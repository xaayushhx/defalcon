import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RoomDetail from './pages/RoomDetail';
import DeluxeRoom from './pages/DeluxeRoom';
import SuperDeluxeRoom from './pages/SuperDeluxeRoom';
import LuxuryRoom from './pages/LuxuryRoom';

// Automatically scroll to top on path change, or scroll to element if hash is present
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to allow target element to mount if coming from another route
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="flex flex-col min-h-screen bg-ivory-50 text-warm-800 antialiased selection:bg-ocean-100 selection:text-ocean-800">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms/deluxe" element={<DeluxeRoom />} />
            <Route path="/rooms/super-deluxe" element={<SuperDeluxeRoom />} />
            <Route path="/rooms/luxury" element={<LuxuryRoom />} />
            <Route path="/rooms/:slug" element={<RoomDetail />} />
            {/* Catch-all route to redirect back to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
