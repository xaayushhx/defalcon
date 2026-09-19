import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Check,
  Calendar,
  Users,
  Clock,
  ShieldCheck,
  Phone,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Coffee,
  Waves
} from 'lucide-react';
import { rooms } from '../data/rooms';
import { resort } from '../data/resort';
import RoomGallery from '../components/RoomGallery';
import RoomSpecifications from '../components/RoomSpecifications';
import AmenitiesGrid from '../components/AmenitiesGrid';
import FAQAccordion from '../components/FAQAccordion';
import RoomCard from '../components/RoomCard';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import { BookingEnquiryModal } from '../components/BookingForm';

export default function RoomDetail({ defaultSlug }) {
  const { slug: paramSlug } = useParams();
  const slug = defaultSlug || paramSlug;
  const navigate = useNavigate();

  const room = rooms.find((r) => r.slug === slug);
  const otherRooms = rooms.filter((r) => r.slug !== slug);

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (room) {
      document.title = `${room.name} — ${resort.name}, Candolim Goa`;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) {
        meta.setAttribute('content', room.shortDescription);
      }
    }
  }, [room]);

  if (!room) {
    return (
      <main className="min-h-[70vh] flex items-center justify-center pt-24 pb-16 section-padding">
        <div className="text-center max-w-md mx-auto">
          <h1 className="font-serif text-3xl font-bold text-ocean-700 mb-4">Room Not Found</h1>
          <p className="font-sans text-warm-500 mb-6">
            The room category you are looking for does not exist or has been moved.
          </p>
          <Link to="/#rooms" className="btn-primary">
            Explore All Rooms
          </Link>
        </div>
      </main>
    );
  }

  const handleOpenEnquiry = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
  };

  const handleWhatsAppEnquiry = () => {
    const datesInfo = checkIn && checkOut ? ` from ${checkIn} to ${checkOut}` : '';
    const message = `Hello! I would like to enquire about booking the ${room.name} at ${resort.name} in Candolim, Goa${datesInfo} for ${guests} guests. Please share availability and current rates.`;

    if (resort.whatsapp && resort.whatsapp !== '+91XXXXXXXXXX') {
      window.open(`https://wa.me/${resort.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    } else {
      window.open(`mailto:${resort.email}?subject=${encodeURIComponent(`Enquiry for ${room.name}`)}&body=${encodeURIComponent(message)}`, '_blank');
    }
  };

  return (
    <main className="pt-24 md:pt-28 pb-20">
      {/* ====================== BREADCRUMB & HEADER ====================== */}
      <div className="section-padding mb-8">
        <div className="section-max-width">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-sans text-xs text-warm-400 mb-4">
            <Link to="/" className="hover:text-ocean-600 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/#rooms" className="hover:text-ocean-600 transition-colors">Rooms</Link>
            <ChevronRight size={12} />
            <span className="text-ocean-700 font-medium">{room.name}</span>
          </nav>

          {/* Title Banner */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-warm-200">
            <div>
              <p className="font-sans text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-coral mb-2">
                {room.tagline || 'Candolim, North Goa'}
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ocean-700 tracking-tight">
                {room.name}
              </h1>
            </div>
            {room.startingPrice ? (
              <div className="bg-ivory-100 border border-sand-200/60 rounded-2xl px-5 py-3 md:text-right">
                <p className="font-sans text-xs text-warm-500 uppercase tracking-wider">Starting From</p>
                <div className="flex items-baseline gap-1 md:justify-end">
                  <span className="font-serif text-2xl md:text-3xl font-bold text-ocean-700">{room.startingPrice}</span>
                  <span className="font-sans text-xs text-warm-500">/{room.priceUnit || 'night'}</span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={handleOpenEnquiry}
                  className="btn-primary !py-3 !px-7"
                >
                  <MessageCircle size={16} />
                  Enquire for Rates
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ====================== GALLERY SLIDER ====================== */}
      <section className="section-padding mb-14 md:mb-20">
        <div className="section-max-width">
          <RoomGallery images={room.gallery} />
        </div>
      </section>

      {/* ====================== MAIN DETAILS GRID ====================== */}
      <section className="section-padding mb-20">
        <div className="section-max-width grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Details, specs, amenities, inclusions, faq */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-16">
            {/* Overview / Story */}
            <ScrollReveal>
              <div className="prose prose-warm max-w-none">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-ocean-700 mb-6">
                  About the {room.name}
                </h2>
                <div className="space-y-4 font-sans text-base text-warm-600 leading-relaxed">
                  {room.fullDescription.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Room Specifications Panel */}
            {room.specs && (
              <ScrollReveal>
                <div className="border-t border-warm-200 pt-12">
                  <h3 className="font-serif text-xl font-semibold text-ocean-700 mb-6">
                    Room Specifications
                  </h3>
                  <RoomSpecifications specs={room.specs} />
                </div>
              </ScrollReveal>
            )}

            {/* Room Highlights */}
            {room.highlights && room.highlights.length > 0 && (
              <ScrollReveal>
                <div className="border-t border-warm-200 pt-12">
                  <h3 className="font-serif text-xl font-semibold text-ocean-700 mb-6">
                    Room Highlights
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {room.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl overflow-hidden border border-warm-100 bg-ivory-50 shadow-soft"
                      >
                        {highlight.image && (
                          <div className="aspect-[16/10] overflow-hidden">
                            <img
                              src={highlight.image}
                              alt={highlight.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="p-5">
                          <h4 className="font-serif text-lg font-semibold text-ocean-700 mb-2">
                            {highlight.title}
                          </h4>
                          <p className="font-sans text-sm text-warm-500 leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Amenities Grid */}
            <ScrollReveal>
              <div className="border-t border-warm-200 pt-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-xl font-semibold text-ocean-700">
                    Room Amenities
                  </h3>
                  <span className="font-sans text-xs text-warm-400">Thoughtfully curated</span>
                </div>
                <AmenitiesGrid amenities={room.amenities} columns={3} />
              </div>
            </ScrollReveal>

            {/* Inclusions */}
            {room.inclusions && room.inclusions.length > 0 && (
              <ScrollReveal>
                <div className="border-t border-warm-200 pt-12">
                  <h3 className="font-serif text-xl font-semibold text-ocean-700 mb-6">
                    What's Included in Your Stay
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {room.inclusions.map((inclusion, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-4 rounded-xl bg-ivory-50 border border-warm-100"
                      >
                        <div className="w-7 h-7 rounded-full bg-tropical-100 flex items-center justify-center flex-shrink-0 text-tropical-700">
                          <Check size={14} className="stroke-[2.5]" />
                        </div>
                        <span className="font-sans text-sm font-medium text-warm-700">{inclusion}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* FAQ Accordion */}
            {room.faq && room.faq.length > 0 && (
              <ScrollReveal>
                <div className="border-t border-warm-200 pt-12">
                  <h3 className="font-serif text-xl font-semibold text-ocean-700 mb-3">
                    Important Information & Policies
                  </h3>
                  <p className="font-sans text-sm text-warm-500 mb-6">
                    Frequently asked questions regarding check-in, children, and room policies.
                  </p>
                  <FAQAccordion items={room.faq} />
                </div>
              </ScrollReveal>
            )}
          </div>

          {/* RIGHT COLUMN: Sticky Reservation & Enquiry Card */}
          <div className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28" id="enquiry">
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl shadow-elegant border border-warm-100 p-6 md:p-8 space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-sand-100 text-sand-800 mb-3">
                    <Sparkles size={12} /> Direct Booking Advantage
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-ocean-700">
                    Reserve Your Stay
                  </h3>
                  <p className="font-sans text-xs text-warm-500 mt-1">
                    Enquire directly with Defalcon Goa Beach Resort for best rate guarantee and personalised service.
                  </p>
                </div>

                <form onSubmit={handleOpenEnquiry} className="space-y-4">
                  <div>
                    <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-warm-500 mb-1.5">
                      Check-in Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        min={today}
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-warm-200 bg-ivory-50 font-sans text-sm text-warm-800 focus:outline-none focus:ring-2 focus:ring-ocean-300 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-warm-500 mb-1.5">
                      Check-out Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        min={checkIn || today}
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-warm-200 bg-ivory-50 font-sans text-sm text-warm-800 focus:outline-none focus:ring-2 focus:ring-ocean-300 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-xs font-semibold tracking-wider uppercase text-warm-500 mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-warm-200 bg-ivory-50 font-sans text-sm text-warm-800 focus:outline-none focus:ring-2 focus:ring-ocean-300 transition-all"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5+ Guests</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary !py-3.5 text-center justify-center font-medium shadow-md hover:shadow-lg transition-all"
                  >
                    Check Availability & Enquire
                  </button>
                </form>

                {/* Instant Messenger CTA */}
                <div className="pt-2 border-t border-warm-100">
                  <p className="font-sans text-xs text-center text-warm-400 mb-3">Or connect instantly with our team</p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleWhatsAppEnquiry}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-sans text-xs font-semibold bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 transition-colors"
                    >
                      <MessageCircle size={15} />
                      WhatsApp
                    </button>
                    {resort.phone && (
                      <a
                        href={`tel:${resort.phone}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-sans text-xs font-semibold bg-ocean-50 text-ocean-700 hover:bg-ocean-100 transition-colors"
                      >
                        <Phone size={15} />
                        Call Resort
                      </a>
                    )}
                  </div>
                </div>

                {/* Direct booking guarantees */}
                <div className="bg-ivory-100 rounded-xl p-4 space-y-2.5 text-xs text-warm-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-tropical-600 flex-shrink-0" />
                    <span>Best rate guaranteed with direct enquiry</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-tropical-600 flex-shrink-0" />
                    <span>Check-in: 2:00 PM | Check-out: 11:00 AM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves size={16} className="text-tropical-600 flex-shrink-0" />
                    <span>Complimentary swimming pool access</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================== SIMILAR ROOMS ====================== */}
      {otherRooms.length > 0 && (
        <section className="py-16 md:py-24 bg-ivory-100 section-padding">
          <div className="section-max-width">
            <SectionHeading
              subtitle="Explore More"
              title="Other Room Categories"
              description="Discover the alternative accommodations available at Defalcon Goa Beach Resort."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {otherRooms.map((other, idx) => (
                <RoomCard key={other.slug} room={other} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====================== FINAL CALL TO ACTION ====================== */}
      <section className="py-20 md:py-24 bg-ocean-700 text-white relative overflow-hidden section-padding">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="section-max-width relative z-10 text-center max-w-2xl mx-auto">
          <p className="font-sans text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-sand-300 mb-3">
            Candolim, North Goa
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready for Your Goan Escape?
          </h2>
          <p className="font-sans text-base text-white/70 leading-relaxed mb-8">
            Experience tropical relaxation, warm hospitality, and the coastal charm of Candolim. Secure your stay at {resort.name} today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleOpenEnquiry}
              className="btn-secondary !py-3.5 !px-8"
            >
              Enquire About {room.name}
            </button>
            <Link to="/#contact" className="btn-outline !text-white !border-white/30 hover:!bg-white/10 !py-3.5 !px-8">
              Contact Concierge
            </Link>
          </div>
        </div>
      </section>

      {/* ====================== ENQUIRY MODAL ====================== */}
      <AnimatePresence>
        {isModalOpen && (
          <BookingEnquiryModal
            preselectedRoom={room.slug}
            initialData={{
              checkIn,
              checkOut,
              guests,
              roomCategory: room.slug,
            }}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
