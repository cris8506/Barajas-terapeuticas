import { useState, useEffect, useRef, TouchEvent } from 'react';
import { Card } from '../types';
import { X, ChevronLeft, ChevronRight, Shuffle } from 'lucide-react';

interface CardViewerProps {
  cards: Card[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
  onRandomCard: () => void;
  deckName: string;
}

export default function CardViewer({
  cards,
  currentIndex,
  onClose,
  onNavigate,
  onRandomCard,
  deckName
}: CardViewerProps) {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentCard = cards[currentIndex];

  useEffect(() => {
    // Lock scroll on background
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!currentCard) return null;

  const totalCards = cards.length;

  const handlePrev = () => {
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(totalCards - 1); // Loop back
    }
  };

  const handleNext = () => {
    if (currentIndex < totalCards - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0); // Loop to start
    }
  };

  // Swipe handling
  const handleTouchStart = (e: TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-3 sm:p-6 text-white select-none backdrop-blur-md"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between gap-3 w-full max-w-2xl mx-auto pt-2 pb-2 px-2 z-10">
        <div className="flex flex-col">
          <span className="text-xs text-white/70 font-medium truncate max-w-[200px] sm:max-w-xs">
            {deckName}
          </span>
          <span className="text-sm font-semibold tracking-wide text-white">
            Carta {currentIndex + 1} de {totalCards}
          </span>
        </div>

        <button
          onClick={onClose}
          className="w-11 h-11 bg-white/10 hover:bg-white/20 active:scale-95 rounded-full flex items-center justify-center text-white transition-all min-h-[44px] min-w-[44px]"
          aria-label="Cerrar visor"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Area */}
      <div className="flex-1 flex items-center justify-center relative my-2 overflow-hidden w-full max-w-4xl mx-auto">
        {/* Navigation Side Arrows for larger touch/screens */}
        {totalCards > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-1 sm:left-4 z-20 w-12 h-12 bg-black/40 hover:bg-black/70 active:scale-95 text-white/90 rounded-full flex items-center justify-center transition-all backdrop-blur-sm min-h-[44px] min-w-[44px]"
            aria-label="Carta anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        )}

        <div className="w-full h-full flex items-center justify-center p-2">
          <img
            src={currentCard.imageUrl}
            alt={`Carta ${currentIndex + 1} de ${deckName}`}
            className="max-w-full max-h-full rounded-lg shadow-2xl transition-all"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'center'
            }}
          />
        </div>

        {totalCards > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-1 sm:right-4 z-20 w-12 h-12 bg-black/40 hover:bg-black/70 active:scale-95 text-white/90 rounded-full flex items-center justify-center transition-all backdrop-blur-sm min-h-[44px] min-w-[44px]"
            aria-label="Carta siguiente"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        )}
      </div>

      {/* Bottom Controls Bar */}
      <div className="w-full max-w-md mx-auto flex flex-col items-center gap-3 pb-3 pt-2 z-10">
        <div className="flex items-center justify-center gap-3 w-full">
          {totalCards > 1 && (
            <button
              onClick={handlePrev}
              className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:scale-95 py-3 px-4 rounded-xl font-medium text-sm transition-all min-h-[44px]"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Anterior</span>
            </button>
          )}

          {totalCards > 1 && (
            <button
              onClick={onRandomCard}
              className="flex-1 flex items-center justify-center gap-2 bg-[#94C9A9] text-[#173B5E] hover:bg-[#83b898] active:scale-95 py-3 px-4 rounded-xl font-bold text-sm shadow-md transition-all min-h-[44px]"
            >
              <Shuffle className="w-5 h-5" />
              <span>Otra al azar</span>
            </button>
          )}

          {totalCards > 1 && (
            <button
              onClick={handleNext}
              className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 active:scale-95 py-3 px-4 rounded-xl font-medium text-sm transition-all min-h-[44px]"
            >
              <span>Siguiente</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
