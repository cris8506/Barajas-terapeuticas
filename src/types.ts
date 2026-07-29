import { Timestamp } from 'firebase/firestore';

export interface DeckInfo {
  id: string;
  name: string;
  color: string;
  description: string;
}

export interface TherapeuticNeed {
  id: string;
  label: string;
  recommendedDeckId: string;
}

export interface Card {
  id: string;
  deckId: string;
  imageUrl: string;
  storagePath: string;
  cardNumber: number;
  order: number;
  internalName: string;
  active: boolean;
  createdAt: Timestamp | any;
  updatedAt: Timestamp | any;
}

export interface DeckSettings {
  deckId: string;
  coverImageUrl: string;
  coverStoragePath: string;
  updatedAt: Timestamp | any;
}

export interface DiagnosticInfo {
  projectId: string;
  storageBucket: string;
  userEmail: string | null;
  selectedDeckId: string;
  lastUrl: string | null;
  lastError: string | null;
  cardsCount: number;
}
