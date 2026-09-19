import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { resort } from '../data/resort';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Rooms', href: '/#rooms' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Detect if on homepage
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      if (isHome) {
        e.preventDefault();
        const el = document.querySelector(href.replace('/', ''));
        el?.scrollIntoView({ behavior: 'smooth' });
      }
      // If not on home, React Router will navigate to / first
    }
    setMobileOpen(false);
  };

  const bgClass = isScrolled || !isHome
    ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-warm-100'
    : 'bg-transparent';

  const textClass = isScrolled || !isHome
    ? 'text-ocean-700'
    : 'text-white';

  const logoTextClass = isScrolled || !isHome
    ? 'text-ocean-700'
    : 'text-white';

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgClass}`}
      >
        <nav className="section-padding">
          <div className="section-max-width flex items-center justify-between h-18 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group" onClick={() => setMobileOpen(false)}>
              <span className={`font-serif text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${logoTextClass}`}>
                Defalcon
              </span>
              <span className={`hidden sm:inline font-sans text-[10px] tracking-[0.15em] uppercase opacity-70 transition-colors duration-300 ${logoTextClass}`}>
                Goa Beach Resort
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3.5 py-2 font-sans text-[13px] font-medium tracking-wide uppercase transition-all duration-300 rounded-md hover:bg-white/10 ${textClass}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/#booking"
                onClick={(e) => handleNavClick(e, '/#booking')}
                className="ml-4 btn-primary !py-2.5 !px-6 !text-xs"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 transition-colors ${textClass}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-warm-100">
                  <span className="font-serif text-lg font-bold text-ocean-700">
                    Defalcon
                  </span>
                  <button onClick={() => setMobileOpen(false)} className="p-1 text-warm-500">
                    <X size={22} />
                  </button>
                </div>

                {/* Menu Links */}
                <div className="flex-1 py-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                    >
                      <Link
                        to={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="block px-6 py-3.5 font-sans text-sm font-medium text-warm-700 hover:text-ocean-700 hover:bg-ivory-100 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="p-6 border-t border-warm-100">
                  <Link
                    to="/#booking"
                    onClick={(e) => handleNavClick(e, '/#booking')}
                    className="btn-primary w-full text-center"
                  >
                    Book Your Stay
                  </Link>
                  <p className="mt-3 text-center text-xs text-warm-400 font-sans">
                    {resort.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
