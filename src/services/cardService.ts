import {
  collection,
  query,
  where,
  getDocs,
  doc,
  addDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  getDoc
} from 'firebase/firestore';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';
import { db, storage } from '../lib/firebase';
import { Card, DeckSettings } from '../types';

const ALLOWED_MIME_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

export function validateImageFile(file: File): { valid: boolean; error?: string } {
  if (!file) return { valid: false, error: 'No se seleccionó ningún archivo.' };
  if (!ALLOWED_MIME_TYPES.includes(file.type.toLowerCase())) {
    return {
      valid: false,
      error: `Formato no permitido: ${file.type || 'desconocido'}. Solo se admiten archivos PNG, JPG, JPEG y WEBP.`
    };
  }
  return { valid: true };
}

export function extractCardNumberFromFileName(fileName: string, fallbackNumber: number): number {
  // Look for numbers in file name e.g. "carta_01.png" or "05-card.jpg"
  const match = fileName.match(/(\d+)/);
  if (match && match[1]) {
    const parsed = parseInt(match[1], 10);
    if (!isNaN(parsed) && parsed > 0) {
      return parsed;
    }
  }
  return fallbackNumber;
}

// Fetch active cards for public deck view
export async function fetchActiveCardsByDeck(deckId: string): Promise<Card[]> {
  try {
    const cardsRef = collection(db, 'cards');
    // First attempt query with active == true
    const q = query(cardsRef, where('deckId', '==', deckId), where('active', '==', true));
    const snapshot = await getDocs(q);
    
    const cards: Card[] = snapshot.docs.map(docSnap => ({
      id: docSnap.id,
      ...(docSnap.data() as Omit<Card, 'id'>)
    }));

    // Client-side sort by order asc to guarantee sorting regardless of index requirements
    return cards.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  } catch (err) {
    console.error('Error fetching active cards:', err);
    throw err;
  }
}

// Fetch all cards for admin panel (including inactive)
export async function fetchAllCardsByDeck(deckId: string): Promise<Card[]> {
  try {
    const cardsRef = collection(db, 'cards');
    const q = query(cardsRef, where('deckId', '==', deckId));
    const snapshot = await getDocs(q);
    
    const cards: Card[] = snapshot.docs.map(docSnap => ({
      id: docSnap.id,
      ...(docSnap.data() as Omit<Card, 'id'>)
    }));

    return cards.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  } catch (err) {
    console.error('Error fetching all cards:', err);
    throw err;
  }
}

// Fetch active card count for all decks for home screen
export async function fetchActiveCardCountsByDeck(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};
  try {
    const cardsRef = collection(db, 'cards');
    const q = query(cardsRef, where('active', '==', true));
    const snapshot = await getDocs(q);
    
    snapshot.docs.forEach(docSnap => {
      const data = docSnap.data();
      const dId = data.deckId;
      if (dId) {
        counts[dId] = (counts[dId] || 0) + 1;
      }
    });
  } catch (err) {
    console.error('Error fetching active card counts:', err);
  }
  return counts;
}

// Fetch deck cover settings
export async function fetchDeckSettings(deckId: string): Promise<DeckSettings | null> {
  try {
    const docRef = doc(db, 'deckSettings', deckId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as DeckSettings;
    }
  } catch (err) {
    console.error(`Error fetching deck settings for ${deckId}:`, err);
  }
  return null;
}

// Fetch all deck covers
export async function fetchAllDeckSettings(): Promise<Record<string, DeckSettings>> {
  const settingsMap: Record<string, DeckSettings> = {};
  try {
    const settingsRef = collection(db, 'deckSettings');
    const snapshot = await getDocs(settingsRef);
    snapshot.docs.forEach(docSnap => {
      const data = docSnap.data() as DeckSettings;
      if (data.deckId) {
        settingsMap[data.deckId] = data;
      }
    });
  } catch (err) {
    console.error('Error fetching all deck settings:', err);
  }
  return settingsMap;
}

// Upload a single card image
export async function uploadCardImage(
  deckId: string,
  file: File,
  existingCardsCount: number
): Promise<{ card: Card; url: string }> {
  // 1. Validate file format
  const validation = validateImageFile(file);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  // 2. Determine card number and order
  const calculatedNum = extractCardNumberFromFileName(file.name, existingCardsCount + 1);
  const timestamp = Date.now();
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const storagePath = `cards/${deckId}/${timestamp}-${safeName}`;

  // 3. Upload to Storage
  const storageRef = ref(storage, storagePath);
  await uploadBytes(storageRef, file);

  // 4. Get Download URL
  const imageUrl = await getDownloadURL(storageRef);
  if (!imageUrl.startsWith('https://')) {
    throw new Error('La URL de la imagen generada no es segura (HTTPS).');
  }

  // 5. Save to Firestore
  const cardData = {
    deckId,
    imageUrl,
    storagePath,
    cardNumber: calculatedNum,
    order: calculatedNum,
    internalName: file.name,
    active: true,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  };

  const docRef = await addDoc(collection(db, 'cards'), cardData);

  const newCard: Card = {
    id: docRef.id,
    ...cardData
  };

  return { card: newCard, url: imageUrl };
}

// Upload deck cover image
export async function uploadDeckCover(deckId: string, file: File): Promise<DeckSettings> {
  const validation = validateImageFile(file);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  // Fetch current cover to delete if exists
  const existingSettings = await fetchDeckSettings(deckId);

  const timestamp = Date.now();
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const storagePath = `deck-covers/${deckId}/${timestamp}-${safeName}`;

  const storageRef = ref(storage, storagePath);
  await uploadBytes(storageRef, file);

  const coverImageUrl = await getDownloadURL(storageRef);
  if (!coverImageUrl.startsWith('https://')) {
    throw new Error('La URL de la portada no es segura (HTTPS).');
  }

  const settingsData: DeckSettings = {
    deckId,
    coverImageUrl,
    coverStoragePath: storagePath,
    updatedAt: serverTimestamp()
  };

  await setDoc(doc(db, 'deckSettings', deckId), settingsData);

  // Delete previous cover file in storage if it exists
  if (existingSettings?.coverStoragePath) {
    try {
      const oldRef = ref(storage, existingSettings.coverStoragePath);
      await deleteObject(oldRef);
    } catch (e) {
      console.warn('Could not delete old cover image from storage:', e);
    }
  }

  return settingsData;
}

// Update card active status
export async function toggleCardActiveStatus(cardId: string, active: boolean): Promise<void> {
  const docRef = doc(db, 'cards', cardId);
  await updateDoc(docRef, {
    active,
    updatedAt: serverTimestamp()
  });
}

// Update card order
export async function updateCardOrder(cardId: string, newOrder: number): Promise<void> {
  const docRef = doc(db, 'cards', cardId);
  await updateDoc(docRef, {
    order: newOrder,
    cardNumber: newOrder,
    updatedAt: serverTimestamp()
  });
}

// Replace card image
export async function replaceCardImage(card: Card, newFile: File): Promise<string> {
  const validation = validateImageFile(newFile);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const timestamp = Date.now();
  const safeName = newFile.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const newStoragePath = `cards/${card.deckId}/${timestamp}-${safeName}`;

  // 1. Upload new file
  const storageRef = ref(storage, newStoragePath);
  await uploadBytes(storageRef, newFile);

  // 2. Get URL
  const newImageUrl = await getDownloadURL(storageRef);
  if (!newImageUrl.startsWith('https://')) {
    throw new Error('La URL de la nueva imagen no es HTTPS.');
  }

  // 3. Update Firestore
  const docRef = doc(db, 'cards', card.id);
  await updateDoc(docRef, {
    imageUrl: newImageUrl,
    storagePath: newStoragePath,
    internalName: newFile.name,
    updatedAt: serverTimestamp()
  });

  // 4. Delete old file from storage
  if (card.storagePath) {
    try {
      const oldStorageRef = ref(storage, card.storagePath);
      await deleteObject(oldStorageRef);
    } catch (err) {
      console.warn('Could not remove previous card image from storage:', err);
    }
  }

  return newImageUrl;
}

// Delete card permanently
export async function deleteCardPermanently(card: Card): Promise<void> {
  // 1. Delete Firestore document
  const docRef = doc(db, 'cards', card.id);
  await deleteDoc(docRef);

  // 2. Delete file in Storage
  if (card.storagePath) {
    try {
      const storageRef = ref(storage, card.storagePath);
      await deleteObject(storageRef);
    } catch (err) {
      console.warn('Could not delete card file from Firebase Storage:', err);
    }
  }
}
