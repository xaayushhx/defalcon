import { MessageCircle, ExternalLink, Calendar } from 'lucide-react';
import { resort } from '../data/resort';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick Booking & WhatsApp" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
      {/* Direct Booking Badge */}
      <a
        href={resort.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group flex items-center gap-2 bg-gradient-to-r from-sand-500 to-sand-400 text-ocean-950 px-3.5 py-2 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 font-sans text-xs font-bold border border-sand-300/40"
      >
        <Calendar size={14} className="text-ocean-900" />
        <span className="hidden sm:inline">Book Direct (Best Rates)</span>
        <span className="sm:hidden">Book Direct</span>
        <ExternalLink size={12} className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${resort.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with De Falcon Resort"
        className="pointer-events-auto relative group flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-sans text-xs font-bold"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
        </span>
        <MessageCircle size={20} className="flex-shrink-0" />
        <span className="font-semibold tracking-wide">WhatsApp Us</span>
      </a>
    </aside>
  );
}
