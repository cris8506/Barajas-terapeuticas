import { useState, useEffect, ChangeEvent, DragEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth, firebaseConfig } from '../lib/firebase';
import { DECKS } from '../data/decks';
import { Card, DeckSettings, DiagnosticInfo } from '../types';
import {
  fetchAllCardsByDeck,
  fetchDeckSettings,
  uploadCardImage,
  uploadDeckCover,
  toggleCardActiveStatus,
  updateCardOrder,
  replaceCardImage,
  deleteCardPermanently
} from '../services/cardService';
import {
  Upload,
  Image as ImageIcon,
  Trash2,
  Eye,
  EyeOff,
  RefreshCw,
  LogOut,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  FileCheck,
  ImageOff,
  Layers,
  ArrowUp,
  ArrowDown,
  Info
} from 'lucide-react';

export default function AdminPanelView() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  // Selected deck
  const [selectedDeckId, setSelectedDeckId] = useState<string>(DECKS[0].id);

  // Data for selected deck
  const [cards, setCards] = useState<Card[]>([]);
  const [deckSettings, setDeckSettings] = useState<DeckSettings | null>(null);
  const [loadingData, setLoadingData] = useState(true);

  // Pending upload files preview
  const [selectedFiles, setSelectedFiles] = useState<{ file: File; previewUrl: string }[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgressText, setUploadProgressText] = useState('');

  // Deck Cover upload file
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [isUploadingCover, setIsUploadingCover] = useState(false);

  // Card Replacement state
  const [replacingCardId, setReplacingCardId] = useState<string | null>(null);

  // Delete modal state
  const [cardToDelete, setCardToDelete] = useState<Card | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Drag and drop state
  const [isDragging, setIsDragging] = useState(false);

  // Messages & Diagnostics
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [lastUrl, setLastUrl] = useState<string | null>(null);

  const navigate = useNavigate();

  // 1. Auth Guard
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/administracion', { replace: true });
      } else {
        setCurrentUser(user);
        setCheckingAuth(false);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // 2. Fetch deck cards & cover on selectedDeckId change
  useEffect(() => {
    if (!currentUser) return;
    loadDeckDetails(selectedDeckId);
  }, [selectedDeckId, currentUser]);

  const loadDeckDetails = async (deckId: string) => {
    setLoadingData(true);
    setErrorMsg(null);
    try {
      const [fetchedCards, settings] = await Promise.all([
        fetchAllCardsByDeck(deckId),
        fetchDeckSettings(deckId)
      ]);
      setCards(fetchedCards);
      setDeckSettings(settings);
    } catch (err: any) {
      console.error('Error loading admin deck details:', err);
      setErrorMsg(`Error al cargar datos de la baraja: ${err.message || err}`);
    } finally {
      setLoadingData(false);
    }
  };

  const currentDeck = DECKS.find((d) => d.id === selectedDeckId) || DECKS[0];

  // Handle batch file selection for cards
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      addFilesForPreview(Array.from(e.target.files));
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      addFilesForPreview(Array.from(e.dataTransfer.files));
    }
  };

  const addFilesForPreview = (files: File[]) => {
    setErrorMsg(null);
    setSuccessMsg(null);

    const validFiles: { file: File; previewUrl: string }[] = [];
    const errors: string[] = [];

    if (files.length + selectedFiles.length > 20) {
      setErrorMsg('Podés seleccionar un máximo de 20 imágenes a la vez.');
      return;
    }

    files.forEach((file) => {
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (!['png', 'jpg', 'jpeg', 'webp'].includes(ext || '')) {
        errors.push(`"${file.name}": Formato no permitido (Solo PNG, JPG, JPEG, WEBP).`);
      } else {
        validFiles.push({
          file,
          previewUrl: URL.createObjectURL(file)
        });
      }
    });

    if (errors.length > 0) {
      setErrorMsg(errors.join(' '));
    }

    if (validFiles.length > 0) {
      setSelectedFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const removePendingFile = (index: number) => {
    setSelectedFiles((prev) => {
      const fileToRemove = prev[index];
      if (fileToRemove?.previewUrl) {
        URL.revokeObjectURL(fileToRemove.previewUrl);
      }
      return prev.filter((_, i) => i !== index);
    });
  };

  // Upload Batch Cards
  const handleBatchUpload = async () => {
    if (selectedFiles.length === 0) return;

    setIsUploading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    let successCount = 0;
    let lastUploadedUrl = '';

    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const item = selectedFiles[i];
        setUploadProgressText(`Subiendo imagen ${i + 1} de ${selectedFiles.length}: ${item.file.name}`);

        const result = await uploadCardImage(selectedDeckId, item.file, cards.length + i);
        lastUploadedUrl = result.url;
        successCount++;
      }

      setLastUrl(lastUploadedUrl);
      setSuccessMsg(`¡${successCount} cartas subidas correctamente a Firebase!`);

      // Clean preview URLs
      selectedFiles.forEach((item) => URL.revokeObjectURL(item.previewUrl));
      setSelectedFiles([]);

      // Reload gallery
      await loadDeckDetails(selectedDeckId);
    } catch (err: any) {
      console.error('Upload error:', err);
      setErrorMsg(`Error durante la subida: ${err.message || 'Fallo inesperado'}`);
    } finally {
      setIsUploading(false);
      setUploadProgressText('');
    }
  };

  // Upload Cover Image
  const handleCoverSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setCoverFile(file);
      setCoverPreview(URL.createObjectURL(file));
    }
  };

  const handleUploadCoverSubmit = async () => {
    if (!coverFile) return;

    setIsUploadingCover(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      const newSettings = await uploadDeckCover(selectedDeckId, coverFile);
      setDeckSettings(newSettings);
      setLastUrl(newSettings.coverImageUrl);
      setSuccessMsg('¡Portada actualizada correctamente!');

      if (coverPreview) URL.revokeObjectURL(coverPreview);
      setCoverFile(null);
      setCoverPreview(null);
    } catch (err: any) {
      console.error('Error uploading cover:', err);
      setErrorMsg(`Error al subir la portada: ${err.message || err}`);
    } finally {
      setIsUploadingCover(false);
    }
  };

  // Toggle Active/Inactive
  const handleToggleActive = async (card: Card) => {
    try {
      await toggleCardActiveStatus(card.id, !card.active);
      setCards((prev) =>
        prev.map((c) => (c.id === card.id ? { ...c, active: !c.active } : c))
      );
    } catch (err: any) {
      setErrorMsg(`Error al cambiar estado de la carta: ${err.message || err}`);
    }
  };

  // Reorder card
  const handleReorder = async (card: Card, newOrder: number) => {
    if (isNaN(newOrder) || newOrder < 1) return;
    try {
      await updateCardOrder(card.id, newOrder);
      setCards((prev) =>
        prev
          .map((c) => (c.id === card.id ? { ...c, order: newOrder, cardNumber: newOrder } : c))
          .sort((a, b) => a.order - b.order)
      );
    } catch (err: any) {
      setErrorMsg(`Error al cambiar el orden: ${err.message || err}`);
    }
  };

  // Replace Card Image
  const handleReplaceCardFile = async (card: Card, file: File) => {
    setReplacingCardId(card.id);
    setErrorMsg(null);
    try {
      const newUrl = await replaceCardImage(card, file);
      setLastUrl(newUrl);
      setSuccessMsg(`Carta reemplazada correctamente.`);
      await loadDeckDetails(selectedDeckId);
    } catch (err: any) {
      setErrorMsg(`Error al reemplazar la carta: ${err.message || err}`);
    } finally {
      setReplacingCardId(null);
    }
  };

  // Delete Card
  const confirmDeleteCard = async () => {
    if (!cardToDelete) return;
    setIsDeleting(true);
    setErrorMsg(null);
    try {
      await deleteCardPermanently(cardToDelete);
      setSuccessMsg(`Carta eliminada correctamente de Firebase.`);
      setCardToDelete(null);
      await loadDeckDetails(selectedDeckId);
    } catch (err: any) {
      setErrorMsg(`Error al eliminar la carta: ${err.message || err}`);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/administracion');
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen bg-[#FFF9F0] flex items-center justify-center p-6 text-[#173B5E]">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  const diagnosticInfo: DiagnosticInfo = {
    projectId: firebaseConfig.projectId || 'desconocido',
    storageBucket: firebaseConfig.storageBucket || 'desconocido',
    userEmail: currentUser?.email || null,
    selectedDeckId,
    lastUrl,
    lastError: errorMsg,
    cardsCount: cards.length
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#173B5E] pb-20 pt-4 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto flex flex-col gap-6">
        {/* Top Navbar */}
        <div className="flex items-center justify-between bg-white rounded-2xl p-4 border border-[#173B5E]/10 shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#173B5E]/10 flex items-center justify-center text-[#173B5E]">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-[#173B5E]">PANEL DE ADMINISTRACIÓN</h1>
              <span className="text-xs text-[#173B5E]/70 truncate max-w-[180px] block">
                {currentUser?.email}
              </span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 bg-red-50 text-red-700 px-3 py-2 rounded-xl text-xs font-semibold hover:bg-red-100 transition-all min-h-[44px]"
            title="Cerrar sesión"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Salir</span>
          </button>
        </div>

        {/* Global Notifications */}
        {successMsg && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs sm:text-sm font-medium flex items-center gap-2.5 animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>{successMsg}</span>
          </div>
        )}

        {errorMsg && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-2xl text-xs sm:text-sm font-medium flex items-start gap-2.5 animate-fadeIn">
            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <span className="font-bold">Atención</span>
              <span>{errorMsg}</span>
            </div>
          </div>
        )}

        {/* Deck Selector Tabs */}
        <div className="bg-white rounded-2xl p-4 border border-[#173B5E]/10 shadow-sm flex flex-col gap-3">
          <label className="text-xs font-bold uppercase tracking-wider text-[#173B5E]/70">
            Seleccioná una Baraja para administrar
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {DECKS.map((d) => {
              const isSelected = d.id === selectedDeckId;
              return (
                <button
                  key={d.id}
                  onClick={() => {
                    setSelectedDeckId(d.id);
                    setSelectedFiles([]);
                    setSuccessMsg(null);
                    setErrorMsg(null);
                  }}
                  className={`text-left p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between min-h-[44px] ${
                    isSelected
                      ? 'bg-[#173B5E] text-white border-[#173B5E] shadow'
                      : 'bg-[#FFF9F0] text-[#173B5E] border-[#173B5E]/15 hover:bg-[#173B5E]/5'
                  }`}
                  style={isSelected ? { borderLeft: `6px solid ${d.color}` } : {}}
                >
                  <span className="truncate pr-2">{d.name}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-[#173B5E]/10 text-[#173B5E]'
                    }`}
                  >
                    {d.id.substring(0, 2)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Deck Overview */}
        <div
          className="bg-white rounded-2xl p-5 border border-[#173B5E]/10 shadow-sm flex flex-col gap-4"
          style={{ borderTopWidth: '6px', borderTopColor: currentDeck.color }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#173B5E]">{currentDeck.name}</h2>
            <span className="text-xs font-semibold px-3 py-1 bg-[#FFF9F0] border border-[#173B5E]/15 rounded-full text-[#173B5E]">
              {cards.length} cartas
            </span>
          </div>

          {/* Cover Management Section */}
          <div className="bg-[#FFF9F0] p-4 rounded-xl border border-[#173B5E]/10 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-20 h-28 bg-white border border-[#173B5E]/20 rounded-lg flex items-center justify-center p-1 overflow-hidden flex-shrink-0">
              {coverPreview ? (
                <img src={coverPreview} alt="Vista previa portada" className="w-full h-full object-contain" />
              ) : deckSettings?.coverImageUrl ? (
                <img src={deckSettings.coverImageUrl} alt="Portada actual" className="w-full h-full object-contain" />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-1 text-[#173B5E]/40">
                  <ImageOff className="w-5 h-5 mb-1" />
                  <span className="text-[9px] font-bold">PORTADA PENDIENTE</span>
                </div>
              )}
            </div>

            <div className="flex-1 flex flex-col gap-2 w-full">
              <span className="text-xs font-bold text-[#173B5E]">Portada de la Baraja</span>
              <p className="text-xs text-[#173B5E]/70">
                Subí una imagen para usarla como portada oficial de esta baraja en la pantalla principal.
              </p>

              <div className="flex items-center gap-2 mt-1">
                <label className="bg-white text-[#173B5E] border border-[#173B5E]/20 px-3 py-2 rounded-xl text-xs font-bold cursor-pointer hover:bg-gray-50 active:scale-95 transition-all inline-flex items-center gap-1.5 min-h-[44px]">
                  <ImageIcon className="w-4 h-4" />
                  <span>{coverPreview ? 'Cambiar archivo' : 'Seleccionar portada'}</span>
                  <input
                    type="file"
                    accept="image/png, image/jpeg, image/jpg, image/webp"
                    onChange={handleCoverSelect}
                    className="hidden"
                  />
                </label>

                {coverFile && (
                  <button
                    onClick={handleUploadCoverSubmit}
                    disabled={isUploadingCover}
                    className="bg-[#173B5E] text-white px-4 py-2 rounded-xl text-xs font-bold shadow hover:bg-[#173B5E]/90 active:scale-95 transition-all inline-flex items-center gap-1.5 min-h-[44px]"
                  >
                    {isUploadingCover ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <span>Guardar portada</span>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Batch Card Upload Area */}
          <div className="flex flex-col gap-3 mt-2">
            <h3 className="text-sm font-bold text-[#173B5E]">SUBIR CARTAS A ESTA BARAJA</h3>

            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 transition-all ${
                isDragging
                  ? 'border-[#173B5E] bg-[#173B5E]/10'
                  : 'border-[#173B5E]/20 bg-[#FFF9F0] hover:border-[#173B5E]/40'
              }`}
            >
              <div className="w-12 h-12 rounded-full bg-[#173B5E]/10 flex items-center justify-center text-[#173B5E]">
                <Upload className="w-6 h-6" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#173B5E]">
                  Arrastrá y soltá las cartas aquí
                </p>
                <p className="text-xs text-[#173B5E]/70 mt-1">
                  Formatos permitidos: PNG, JPG, JPEG, WEBP. Máximo 20 imágenes a la vez.
                </p>
              </div>

              <label className="bg-[#173B5E] text-white font-bold text-xs py-3 px-5 rounded-xl shadow-md hover:bg-[#173B5E]/90 cursor-pointer active:scale-95 transition-all min-h-[44px] flex items-center gap-2">
                <Upload className="w-4 h-4" />
                <span>Seleccionar imágenes</span>
                <input
                  type="file"
                  multiple
                  accept="image/png, image/jpeg, image/jpg, image/webp"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>

            {/* Pending Upload Previews */}
            {selectedFiles.length > 0 && (
              <div className="bg-[#FFF9F0] rounded-2xl p-4 border border-[#173B5E]/15 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#173B5E]">
                    Vistas previas antes de subir ({selectedFiles.length})
                  </span>
                  <button
                    onClick={() => setSelectedFiles([])}
                    className="text-xs text-red-600 hover:underline min-h-[44px] px-1"
                  >
                    Borrar selección
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {selectedFiles.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-1.5 rounded-xl border border-[#173B5E]/10 flex flex-col items-center relative group"
                    >
                      <img
                        src={item.previewUrl}
                        alt={`Preview ${idx}`}
                        className="w-full h-24 object-contain rounded-lg"
                      />
                      <span className="text-[10px] text-[#173B5E]/70 truncate w-full mt-1 text-center font-medium">
                        {item.file.name}
                      </span>
                      <button
                        onClick={() => removePendingFile(idx)}
                        className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full shadow hover:bg-red-700 min-h-[28px] min-w-[28px] flex items-center justify-center"
                        title="Quitar"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleBatchUpload}
                  disabled={isUploading}
                  className="w-full bg-[#173B5E] text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:bg-[#173B5E]/90 active:scale-[0.98] transition-all flex items-center justify-center gap-2 min-h-[48px] mt-1"
                >
                  {isUploading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span className="text-xs">{uploadProgressText}</span>
                    </>
                  ) : (
                    <>
                      <FileCheck className="w-5 h-5" />
                      <span>SUBIR {selectedFiles.length} CARTAS A FIREBASE</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Existing Cards List & Operations */}
        <section className="bg-white rounded-2xl p-5 border border-[#173B5E]/10 shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-[#173B5E]">
              Cartas subidas en esta baraja ({cards.length})
            </h3>
            <button
              onClick={() => loadDeckDetails(selectedDeckId)}
              className="p-2 text-[#173B5E]/70 hover:text-[#173B5E] min-h-[44px] min-w-[44px] flex items-center justify-center"
              title="Recargar cartas"
            >
              <RefreshCw className={`w-4 h-4 ${loadingData ? 'animate-spin' : ''}`} />
            </button>
          </div>

          {loadingData ? (
            <div className="py-8 flex items-center justify-center text-[#173B5E]/60 gap-2">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span className="text-xs">Cargando cartas...</span>
            </div>
          ) : cards.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#173B5E]/60 bg-[#FFF9F0] rounded-xl p-4 border border-[#173B5E]/10">
              Todavía no hay cartas registradas en esta baraja.
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {cards.map((card, idx) => (
                <div
                  key={card.id}
                  className={`p-3 rounded-2xl border flex flex-col sm:flex-row items-center gap-3 transition-all ${
                    card.active
                      ? 'bg-[#FFF9F0] border-[#173B5E]/15'
                      : 'bg-gray-100 border-gray-300 opacity-60'
                  }`}
                >
                  {/* Card Thumbnail */}
                  <div className="w-20 h-28 bg-white border border-[#173B5E]/20 rounded-xl overflow-hidden p-1 flex-shrink-0 flex items-center justify-center">
                    <img
                      src={card.imageUrl}
                      alt={card.internalName || `Carta ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Card Metadata & Actions */}
                  <div className="flex-1 flex flex-col gap-2 w-full">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-[#173B5E]">
                        Carta N° {card.cardNumber || idx + 1}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          card.active ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {card.active ? 'Activa' : 'Inactiva'}
                      </span>
                    </div>

                    <p className="text-[11px] text-[#173B5E]/70 truncate max-w-xs">
                      {card.internalName || card.id}
                    </p>

                    {/* Controls */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#173B5E]/10">
                      {/* Order Input */}
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] font-bold text-[#173B5E]/70">Orden:</span>
                        <input
                          type="number"
                          min="1"
                          defaultValue={card.order || idx + 1}
                          onBlur={(e) => handleReorder(card, parseInt(e.target.value, 10))}
                          className="w-12 bg-white border border-[#173B5E]/20 rounded-lg text-center text-xs py-1 text-[#173B5E] font-bold min-h-[32px]"
                        />
                      </div>

                      <div className="flex items-center gap-1.5">
                        {/* Toggle Active */}
                        <button
                          onClick={() => handleToggleActive(card)}
                          className="p-2 rounded-lg bg-white border border-[#173B5E]/20 text-[#173B5E] hover:bg-gray-50 active:scale-95 transition-all min-h-[36px] min-w-[36px] flex items-center justify-center"
                          title={card.active ? 'Desactivar' : 'Activar'}
                        >
                          {card.active ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4 text-gray-400" />}
                        </button>

                        {/* Replace Image Button */}
                        <label
                          className="p-2 rounded-lg bg-white border border-[#173B5E]/20 text-[#173B5E] hover:bg-gray-50 active:scale-95 transition-all cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
                          title="Reemplazar imagen"
                        >
                          {replacingCardId === card.id ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                          ) : (
                            <RefreshCw className="w-4 h-4" />
                          )}
                          <input
                            type="file"
                            accept="image/png, image/jpeg, image/jpg, image/webp"
                            disabled={replacingCardId === card.id}
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                handleReplaceCardFile(card, e.target.files[0]);
                              }
                            }}
                            className="hidden"
                          />
                        </label>

                        {/* Delete Button */}
                        <button
                          onClick={() => setCardToDelete(card)}
                          className="p-2 rounded-lg bg-red-50 border border-red-200 text-red-600 hover:bg-red-100 active:scale-95 transition-all min-h-[36px] min-w-[36px] flex items-center justify-center"
                          title="Eliminar carta"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Diagnostics Section */}
        <section className="bg-white rounded-2xl p-5 border border-[#173B5E]/10 shadow-sm flex flex-col gap-3">
          <div className="flex items-center gap-2 border-b border-[#173B5E]/10 pb-2">
            <Info className="w-4 h-4 text-[#173B5E]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#173B5E]">
              Diagnóstico de Firebase
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono bg-[#FFF9F0] p-3 rounded-xl border border-[#173B5E]/10">
            <div>
              <span className="font-bold text-[#173B5E]">projectId:</span>{' '}
              <span className="text-[#173B5E]/80">{diagnosticInfo.projectId}</span>
            </div>
            <div>
              <span className="font-bold text-[#173B5E]">storageBucket:</span>{' '}
              <span className="text-[#173B5E]/80 truncate block">{diagnosticInfo.storageBucket}</span>
            </div>
            <div>
              <span className="font-bold text-[#173B5E]">Usuario:</span>{' '}
              <span className="text-[#173B5E]/80">{diagnosticInfo.userEmail || 'No autenticado'}</span>
            </div>
            <div>
              <span className="font-bold text-[#173B5E]">Baraja activa:</span>{' '}
              <span className="text-[#173B5E]/80">{diagnosticInfo.selectedDeckId}</span>
            </div>
            <div>
              <span className="font-bold text-[#173B5E]">Cartas encontradas:</span>{' '}
              <span className="text-[#173B5E]/80">{diagnosticInfo.cardsCount}</span>
            </div>
            <div className="sm:col-span-2">
              <span className="font-bold text-[#173B5E]">Última URL obtenida:</span>{' '}
              <span className="text-[#173B5E]/80 truncate block">
                {diagnosticInfo.lastUrl || 'Ninguna'}
              </span>
            </div>
            <div className="sm:col-span-2">
              <span className="font-bold text-[#173B5E]">Último error:</span>{' '}
              <span className="text-red-600 block">{diagnosticInfo.lastError || 'Ninguno'}</span>
            </div>
          </div>
        </section>
      </div>

      {/* Confirmation Delete Modal */}
      {cardToDelete && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full flex flex-col gap-4 shadow-xl border border-[#173B5E]/10 animate-fadeIn">
            <div className="flex items-center gap-3 text-red-600">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                <Trash2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#173B5E]">¿Eliminar carta?</h3>
            </div>

            <p className="text-xs text-[#173B5E]/80 leading-relaxed">
              Esta acción eliminará permanentemente el documento de Firestore y la imagen almacenada en Firebase Storage. No se puede deshacer.
            </p>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setCardToDelete(null)}
                disabled={isDeleting}
                className="px-4 py-2.5 rounded-xl border border-[#173B5E]/20 text-xs font-bold text-[#173B5E] hover:bg-gray-50 min-h-[44px]"
              >
                Cancelar
              </button>
              <button
                onClick={confirmDeleteCard}
                disabled={isDeleting}
                className="px-4 py-2.5 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-700 min-h-[44px] flex items-center gap-1.5"
              >
                {isDeleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <span>Confirmar eliminación</span>}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
