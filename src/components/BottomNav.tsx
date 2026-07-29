import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Layers, Info } from 'lucide-react';

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  // Do not show bottom nav on admin panel or admin login pages
  if (location.pathname.startsWith('/administracion')) {
    return null;
  }

  const handleNav = (target: 'inicio' | 'barajas' | 'informacion') => {
    if (target === 'inicio') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'barajas') {
      if (location.pathname !== '/') {
        navigate('/#barajas');
      } else {
        const elem = document.getElementById('seccion-barajas');
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    } else if (target === 'informacion') {
      navigate('/informacion');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isHomeActive = location.pathname === '/' && !location.hash;
  const isBarajasActive = location.pathname === '/' && location.hash === '#barajas';
  const isInfoActive = location.pathname === '/informacion';

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#FFF9F0] border-t border-[#173B5E]/10 shadow-lg px-4 py-2 sm:px-8">
      <div className="max-w-md mx-auto flex justify-around items-center">
        <button
          onClick={() => handleNav('inicio')}
          className={`flex flex-col items-center justify-center w-20 h-14 rounded-xl transition-all ${
            isHomeActive
              ? 'text-[#173B5E] font-bold bg-[#173B5E]/10'
              : 'text-[#173B5E]/60 hover:text-[#173B5E]'
          }`}
          aria-label="Inicio"
        >
          <Home className="w-6 h-6 mb-1" />
          <span className="text-xs">Inicio</span>
        </button>

        <button
          onClick={() => handleNav('barajas')}
          className={`flex flex-col items-center justify-center w-20 h-14 rounded-xl transition-all ${
            isBarajasActive
              ? 'text-[#173B5E] font-bold bg-[#173B5E]/10'
              : 'text-[#173B5E]/60 hover:text-[#173B5E]'
          }`}
          aria-label="Barajas"
        >
          <Layers className="w-6 h-6 mb-1" />
          <span className="text-xs">Barajas</span>
        </button>

        <button
          onClick={() => handleNav('informacion')}
          className={`flex flex-col items-center justify-center w-20 h-14 rounded-xl transition-all ${
            isInfoActive
              ? 'text-[#173B5E] font-bold bg-[#173B5E]/10'
              : 'text-[#173B5E]/60 hover:text-[#173B5E]'
          }`}
          aria-label="Información"
        >
          <Info className="w-6 h-6 mb-1" />
          <span className="text-xs">Información</span>
        </button>
      </div>
    </nav>
  );
}
