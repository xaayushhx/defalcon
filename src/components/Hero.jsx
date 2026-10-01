import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageCircle, ExternalLink } from 'lucide-react';
import { resort } from '../data/resort';

export default function Hero() {
  const scrollToBooking = () => {
    document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" id="hero">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/resort/hotel-main.avif"
          alt="De Falcon Goa Beach Resort — resort view at Candolim"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-sans text-sm md:text-base tracking-[0.25em] uppercase text-sand-300 mb-4"
        >
          {resort.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-serif text-4xl sm:text-5xl md:text-display-sm lg:text-display font-bold text-white mb-4 leading-tight"
        >
          Your Escape to Paradise
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="font-serif text-lg md:text-xl text-sand-300 italic mb-2"
        >
          {resort.name}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="font-sans text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {resort.shortDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          <a
            href={resort.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !bg-sand-400 hover:!bg-sand-300 !text-ocean-950 font-bold !py-3.5 !px-7 shadow-xl hover:scale-105 transition-all gap-2"
          >
            <span>Book Online (Best Rates)</span>
            <ExternalLink size={16} />
          </a>
          <a
            href={`https://wa.me/${resort.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans text-sm font-bold shadow-xl hover:scale-105 transition-all"
          >
            <MessageCircle size={18} />
            <span>WhatsApp Us</span>
          </a>
          <Link to="/#rooms" className="btn-secondary !text-white !border-white/40 hover:!bg-white/20 !py-3.5 !px-6">
            Explore Rooms
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToBooking}
      >
        <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
