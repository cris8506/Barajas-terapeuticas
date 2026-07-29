import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import DeckView from './views/DeckView';
import InfoView from './views/InfoView';
import AdminLoginView from './views/AdminLoginView';
import AdminPanelView from './views/AdminPanelView';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFF9F0] font-sans antialiased selection:bg-[#173B5E] selection:text-white">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/baraja/:deckId" element={<DeckView />} />
          <Route path="/informacion" element={<InfoView />} />
          <Route path="/administracion" element={<AdminLoginView />} />
          <Route path="/administracion/panel" element={<AdminPanelView />} />
          <Route path="*" element={<HomeView />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}
