import { Link } from 'react-router-dom';
import { DeckInfo, DeckSettings } from '../types';
import { ChevronRight, ImageOff } from 'lucide-react';

export interface DeckCardProps {
  key?: string;
  deck: DeckInfo;
  settings?: DeckSettings | null;
  cardCount: number;
}

export default function DeckCard({ deck, settings, cardCount }: DeckCardProps) {
  const hasCover = Boolean(settings?.coverImageUrl);

  return (
    <div
      className="bg-white rounded-2xl shadow-sm border border-[#173B5E]/10 overflow-hidden flex flex-col transition-all hover:shadow-md"
      style={{ borderLeftWidth: '6px', borderLeftColor: deck.color }}
    >
      <div className="p-4 sm:p-5 flex flex-col gap-3">
        <div className="flex items-start gap-4">
          {/* Deck Cover Thumbnail */}
          <div className="w-20 h-28 sm:w-24 sm:h-32 bg-[#FFF9F0] rounded-xl flex-shrink-0 border border-[#173B5E]/10 overflow-hidden flex items-center justify-center p-1">
            {hasCover ? (
              <img
                src={settings?.coverImageUrl}
                alt={`Portada de ${deck.name}`}
                className="w-full h-full object-contain object-center rounded-lg"
                loading="lazy"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-2 text-center text-[#173B5E]/50 gap-1">
                <ImageOff className="w-6 h-6 text-[#173B5E]/40" />
                <span className="text-[10px] font-semibold tracking-wider uppercase leading-tight text-[#173B5E]/60">
                  PORTADA PENDIENTE
                </span>
              </div>
            )}
          </div>

          {/* Deck Info */}
          <div className="flex-1 flex flex-col justify-between py-0.5 min-w-0">
            <div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <span
                  className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full text-[#173B5E]"
                  style={{ backgroundColor: `${deck.color}40` }}
                >
                  {cardCount === 1 ? '1 carta' : `${cardCount} cartas`}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#173B5E] leading-snug truncate">
                {deck.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#173B5E]/80 mt-1 line-clamp-2 leading-relaxed">
                {deck.description}
              </p>
            </div>

            <div className="mt-3">
              <Link
                to={`/baraja/${deck.id}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#173B5E] text-white font-medium text-sm py-2.5 px-4 rounded-xl shadow-sm active:scale-[0.98] transition-all min-h-[44px]"
              >
                <span>Ver cartas</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
