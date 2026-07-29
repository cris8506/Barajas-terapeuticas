import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DECKS, THERAPEUTIC_NEEDS } from '../data/decks';
import { DeckSettings, TherapeuticNeed } from '../types';
import { fetchActiveCardCountsByDeck, fetchAllDeckSettings } from '../services/cardService';
import DeckCard from '../components/DeckCard';
import { Sparkles, ChevronRight, RotateCcw, HeartHandshake } from 'lucide-react';

export default function HomeView() {
  const [selectedNeed, setSelectedNeed] = useState<TherapeuticNeed | null>(null);
  const [cardCounts, setCardCounts] = useState<Record<string, number>>({});
  const [deckSettingsMap, setDeckSettingsMap] = useState<Record<string, DeckSettings>>({});
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    // If navigating to #barajas, scroll into view smoothly
    if (location.hash === '#barajas') {
      const elem = document.getElementById('seccion-barajas');
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [counts, settings] = await Promise.all([
          fetchActiveCardCountsByDeck(),
          fetchAllDeckSettings()
        ]);
        setCardCounts(counts);
        setDeckSettingsMap(settings);
      } catch (err) {
        console.error('Error loading home data:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const recommendedDeck = selectedNeed
    ? DECKS.find((d) => d.id === selectedNeed.recommendedDeckId)
    : null;

  return (
    <div className="min-h-screen bg-[#FFF9F0] text-[#173B5E] pb-24 pt-6 px-4 sm:px-6">
      <div className="max-w-md mx-auto flex flex-col gap-6">
        {/* Header */}
        <header className="text-center flex flex-col items-center gap-2 pt-2">
          <div className="w-12 h-12 rounded-2xl bg-[#173B5E]/10 flex items-center justify-center text-[#173B5E] mb-1">
            <HeartHandshake className="w-7 h-7" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#173B5E] tracking-tight">
            BARAJAS TERAPÉUTICAS
          </h1>
          <p className="text-sm text-[#173B5E]/80 font-normal leading-relaxed max-w-xs">
            Elegí una baraja o seleccioná lo que necesitás trabajar hoy.
          </p>
        </header>

        {/* Section: ¿Qué necesitás trabajar? */}
        <section className="bg-white rounded-2xl p-5 shadow-sm border border-[#173B5E]/10 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#E7A36A]" />
            <h2 className="text-base font-bold text-[#173B5E] tracking-wide">
              ¿QUÉ NECESITÁS TRABAJAR?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            {THERAPEUTIC_NEEDS.map((need) => {
              const isSelected = selectedNeed?.id === need.id;
              return (
                <button
                  key={need.id}
                  onClick={() => setSelectedNeed(isSelected ? null : need)}
                  className={`w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-between min-h-[44px] ${
                    isSelected
                      ? 'bg-[#173B5E] text-white shadow-md ring-2 ring-[#173B5E]/20'
                      : 'bg-[#FFF9F0] text-[#173B5E] hover:bg-[#173B5E]/5 active:scale-[0.99] border border-[#173B5E]/10'
                  }`}
                >
                  <span>{need.label}</span>
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                      isSelected
                        ? 'bg-white text-[#173B5E] border-white'
                        : 'border-[#173B5E]/30 bg-white'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-[#173B5E]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Recommendation Card */}
        {selectedNeed && recommendedDeck && (
          <section className="bg-[#173B5E] text-white rounded-2xl p-5 shadow-md flex flex-col gap-4 border-2 border-[#173B5E] animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9CCFE8] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> BARAJA RECOMENDADA
              </span>
              <button
                onClick={() => setSelectedNeed(null)}
                className="text-xs text-white/80 hover:text-white underline flex items-center gap-1 min-h-[44px] px-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Quitar selección</span>
              </button>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">{recommendedDeck.name}</h3>
              <p className="text-xs text-white/90 mt-1 leading-relaxed">
                {recommendedDeck.description}
              </p>
            </div>

            <Link
              to={`/baraja/${recommendedDeck.id}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#94C9A9] text-[#173B5E] font-bold py-3 px-4 rounded-xl shadow transition-all hover:bg-[#83b898] active:scale-[0.98] min-h-[44px]"
            >
              <span>VER CARTAS</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </section>
        )}

        {/* Section: Barajas List */}
        <section id="seccion-barajas" className="flex flex-col gap-4 pt-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#173B5E]">Todas las Barajas (7)</h2>
            {selectedNeed && (
              <button
                onClick={() => setSelectedNeed(null)}
                className="text-xs text-[#173B5E]/70 hover:text-[#173B5E] underline min-h-[44px] px-1 flex items-center"
              >
                Quitar selección
              </button>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {DECKS.map((deck) => (
              <DeckCard
                key={deck.id}
                deck={deck}
                settings={deckSettingsMap[deck.id]}
                cardCount={cardCounts[deck.id] || 0}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
