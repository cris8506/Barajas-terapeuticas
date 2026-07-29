import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DECKS } from '../data/decks';
import { Card } from '../types';
import { fetchActiveCardsByDeck } from '../services/cardService';
import CardViewer from '../components/CardViewer';
import { ArrowLeft, Shuffle, ImageOff, Loader2 } from 'lucide-react';

export default function DeckView() {
  const { deckId } = useParams<{ deckId: string }>();
  const navigate = useNavigate();

  const deck = DECKS.find((d) => d.id === deckId);

  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Card Viewer state
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [lastRandomIndex, setLastRandomIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!deckId) return;

    async function loadCards() {
      setLoading(true);
      setError(null);
      try {
        const fetchedCards = await fetchActiveCardsByDeck(deckId);
        setCards(fetchedCards);
      } catch (err: any) {
        console.error('Error fetching cards for deck:', err);
        setError('Ocurrió un problema al cargar las cartas de la baraja.');
      } finally {
        setLoading(false);
      }
    }

    loadCards();
  }, [deckId]);

  if (!deck) {
    return (
      <div className="min-h-screen bg-[#FFF9F0] text-[#173B5E] p-6 flex flex-col items-center justify-center text-center gap-4">
        <h2 className="text-xl font-bold">Baraja no encontrada</h2>
        <button
          onClick={() => navigate('/')}
          className="bg-[#173B5E] text-white px-5 py-2.5 rounded-xl font-medium min-h-[44px]"
        >
          Volver al Inicio
        </button>
      </div>
    );
  }

  const handleOpenViewer = (index: number) => {
    setSelectedIndex(index);
    setViewerOpen(true);
  };

  const handleRandomCard = () => {
    if (cards.length === 0) return;
    if (cards.length === 1) {
      setSelectedIndex(0);
      setViewerOpen(true);
      return;
    }

    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * cards.length);
    } while (randomIndex === lastRandomIndex && cards.length > 1);

    setLastRandomIndex(randomIndex);
    setSelectedIndex(randomIndex);
    setViewerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#173B5E] pb-24 pt-4 px-4 sm:px-6">
      <div className="max-w-xl mx-auto flex flex-col gap-5">
        {/* Top Header */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="w-11 h-11 bg-white border border-[#173B5E]/10 rounded-xl flex items-center justify-center text-[#173B5E] hover:bg-[#173B5E]/5 active:scale-95 transition-all shadow-sm min-h-[44px] min-w-[44px]"
            aria-label="Volver al inicio"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-bold tracking-wider uppercase text-[#173B5E]/60">
            BARAJAS TERAPÉUTICAS
          </span>
        </div>

        {/* Deck Header Info Card */}
        <div
          className="bg-white rounded-2xl p-5 shadow-sm border border-[#173B5E]/10 flex flex-col gap-3"
          style={{ borderTopWidth: '6px', borderTopColor: deck.color }}
        >
          <div className="flex items-center justify-between gap-2">
            <span
              className="inline-block px-3 py-1 text-xs font-bold rounded-full text-[#173B5E]"
              style={{ backgroundColor: `${deck.color}40` }}
            >
              {cards.length === 1 ? '1 carta disponible' : `${cards.length} cartas disponibles`}
            </span>
          </div>

          <h1 className="text-2xl font-extrabold text-[#173B5E]">{deck.name}</h1>
          <p className="text-sm text-[#173B5E]/80 leading-relaxed">{deck.description}</p>

          {/* Big "Carta al azar" button */}
          <button
            onClick={handleRandomCard}
            disabled={cards.length === 0}
            className={`w-full flex items-center justify-center gap-2.5 font-bold py-3.5 px-5 rounded-xl shadow-md transition-all text-base min-h-[48px] mt-1 ${
              cards.length > 0
                ? 'bg-[#173B5E] text-white hover:bg-[#173B5E]/90 active:scale-[0.98]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
            }`}
          >
            <Shuffle className="w-5 h-5" />
            <span>Carta al azar</span>
          </button>
        </div>

        {/* Gallery Section */}
        <section className="flex flex-col gap-3">
          <h2 className="text-base font-bold text-[#173B5E] px-1">Galería de cartas</h2>

          {loading ? (
            <div className="py-12 flex flex-col items-center justify-center text-[#173B5E]/60 gap-3">
              <Loader2 className="w-8 h-8 animate-spin" />
              <p className="text-sm">Cargando cartas...</p>
            </div>
          ) : error ? (
            <div className="p-4 bg-red-50 text-red-700 rounded-2xl text-sm text-center border border-red-200">
              {error}
            </div>
          ) : cards.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center border border-[#173B5E]/10 flex flex-col items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#FFF9F0] flex items-center justify-center text-[#173B5E]/40">
                <ImageOff className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-[#173B5E]/80 max-w-xs leading-relaxed">
                Todavía no hay cartas disponibles en esta baraja.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {cards.map((card, idx) => (
                <button
                  key={card.id}
                  onClick={() => handleOpenViewer(idx)}
                  className="bg-white rounded-xl p-2 border border-[#173B5E]/10 shadow-sm hover:shadow-md transition-all text-left flex flex-col items-center justify-center active:scale-[0.98] group overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#173B5E]"
                  aria-label={`Ver carta ${idx + 1}`}
                >
                  <div className="w-full h-44 sm:h-52 bg-[#FFF9F0] rounded-lg overflow-hidden flex items-center justify-center p-1">
                    <img
                      src={card.imageUrl}
                      alt={`Carta ${idx + 1}`}
                      loading="lazy"
                      className="rounded transition-transform group-hover:scale-[1.02]"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        objectPosition: 'center'
                      }}
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-[#173B5E]/60 mt-1.5 self-start px-1">
                    Carta {idx + 1}
                  </span>
                </button>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Fullscreen Card Viewer Modal */}
      {viewerOpen && cards.length > 0 && (
        <CardViewer
          cards={cards}
          currentIndex={selectedIndex}
          onClose={() => setViewerOpen(false)}
          onNavigate={(idx) => setSelectedIndex(idx)}
          onRandomCard={handleRandomCard}
          deckName={deck.name}
        />
      )}
    </div>
  );
}
