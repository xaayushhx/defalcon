import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, Users, Home, Search, X, Send, ExternalLink, MessageCircle } from 'lucide-react';
import { rooms } from '../data/rooms';
import { resort, getBookingUrl } from '../data/resort';
import ScrollReveal from './ScrollReveal';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomCategory: '',
  });
  const [errors, setErrors] = useState({});
  const [showEnquiry, setShowEnquiry] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs = {};
    if (formData.checkIn && formData.checkOut && formData.checkIn >= formData.checkOut) {
      errs.checkOut = 'Must be after check-in';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const url = getBookingUrl(formData.checkIn, formData.checkOut, formData.guests);
    window.open(url, '_blank');
  };

  return (
    <>
      <section className="relative z-20 -mt-10 md:-mt-12 section-padding" id="booking">
        <ScrollReveal>
          <div className="section-max-width">
            <form
              onSubmit={handleSearch}
              className="bg-white rounded-2xl shadow-elegant p-6 md:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5 items-end">
                {/* Check-in */}
                <div>
                  <label className="flex items-center gap-2 font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-2">
                    <CalendarDays size={14} />
                    Check-in
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.checkIn ? 'border-red-400' : 'border-warm-200'} bg-ivory-50 font-sans text-sm text-warm-800 focus:outline-none focus:ring-2 focus:ring-ocean-300 focus:border-transparent transition-all`}
                  />
                  {errors.checkIn && <p className="text-xs text-red-500 mt-1">{errors.checkIn}</p>}
                </div>

                {/* Check-out */}
                <div>
                  <label className="flex items-center gap-2 font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-2">
                    <CalendarDays size={14} />
                    Check-out
                  </label>
                  <input
                    type="date"
                    min={formData.checkIn || today}
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.checkOut ? 'border-red-400' : 'border-warm-200'} bg-ivory-50 font-sans text-sm text-warm-800 focus:outline-none focus:ring-2 focus:ring-ocean-300 focus:border-transparent transition-all`}
                  />
                  {errors.checkOut && <p className="text-xs text-red-500 mt-1">{errors.checkOut}</p>}
                </div>

                {/* Guests */}
                <div>
                  <label className="flex items-center gap-2 font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-2">
                    <Users size={14} />
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-warm-200 bg-ivory-50 font-sans text-sm text-warm-800 focus:outline-none focus:ring-2 focus:ring-ocean-300 focus:border-transparent transition-all appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                {/* Room Category */}
                <div>
                  <label className="flex items-center gap-2 font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-2">
                    <Home size={14} />
                    Room Type
                  </label>
                  <select
                    value={formData.roomCategory}
                    onChange={(e) => setFormData({ ...formData, roomCategory: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-warm-200 bg-ivory-50 font-sans text-sm text-warm-800 focus:outline-none focus:ring-2 focus:ring-ocean-300 focus:border-transparent transition-all appearance-none"
                  >
                    <option value="">Any Room</option>
                    {rooms.map((room) => (
                      <option key={room.slug} value={room.slug}>{room.name}</option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <div>
                  <button type="submit" className="btn-primary w-full !py-3 gap-2">
                    <Search size={16} />
                    Check Availability
                  </button>
                </div>
              </div>

              {/* Quick prominent booking & WhatsApp actions */}
              <div className="mt-5 pt-4 border-t border-warm-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-ocean-50/60 -mx-6 -mb-6 md:-mx-8 md:-mb-8 p-4 md:px-8 rounded-b-2xl">
                <div className="flex items-center gap-2 text-xs font-semibold text-ocean-900">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tropical-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tropical-500"></span>
                  </span>
                  <span>Official Booking Guarantee: Lowest rates online & instant confirmation</span>
                </div>
                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-end">
                  <a
                    href={`https://wa.me/${resort.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-sans text-xs font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    <MessageCircle size={16} />
                    WhatsApp Enquiry
                  </a>
                  <a
                    href={resort.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-ocean-700 hover:bg-ocean-800 text-white font-sans text-xs font-bold shadow-md hover:shadow-lg transition-all"
                  >
                    <ExternalLink size={15} />
                    Direct AsiaTech Portal
                  </a>
                </div>
              </div>
            </form>
          </div>
        </ScrollReveal>
      </section>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {showEnquiry && (
          <BookingEnquiryModal
            initialData={formData}
            onClose={() => setShowEnquiry(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ============================================================
// BOOKING ENQUIRY MODAL (WHATSAPP & ONLINE ENGINE)
// ============================================================
export function BookingEnquiryModal({ initialData = {}, onClose, preselectedRoom = '' }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    roomCategory: preselectedRoom || initialData.roomCategory || '',
    checkIn: initialData.checkIn || '',
    checkOut: initialData.checkOut || '',
    adults: initialData.guests || '2',
    children: '0',
    requests: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Please enter your name';
    if (!form.phone.trim()) errs.phone = 'Please enter your phone number';
    if (form.checkIn && form.checkOut && form.checkIn >= form.checkOut) errs.checkOut = 'Must be after check-in';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build WhatsApp message
    const roomName = rooms.find(r => r.slug === form.roomCategory)?.name || 'Any Room';
    const message = `Hello! I'd like to enquire about a reservation at ${resort.name}.

Name: ${form.name}
Phone: ${form.phone}
Room: ${roomName}
${form.checkIn ? `Check-in: ${form.checkIn}` : ''}
${form.checkOut ? `Check-out: ${form.checkOut}` : ''}
Adults: ${form.adults}
Children: ${form.children}
${form.requests ? `Special Requests: ${form.requests}` : ''}`;

    window.open(
      `https://wa.me/${resort.whatsapp}?text=${encodeURIComponent(message)}`,
      '_blank'
    );

    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-warm-100">
          <div>
            <h3 className="font-serif text-xl font-semibold text-ocean-700">Reservation Enquiry</h3>
            <p className="font-sans text-sm text-warm-400 mt-0.5">{resort.name}</p>
          </div>
          <button onClick={onClose} className="p-1 text-warm-400 hover:text-warm-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          /* Success State */
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-tropical-50 flex items-center justify-center mx-auto mb-4">
              <Send size={28} className="text-tropical-500" />
            </div>
            <h4 className="font-serif text-lg font-semibold text-ocean-700 mb-2">Enquiry Sent via WhatsApp!</h4>
            <p className="font-sans text-sm text-warm-500 mb-6 max-w-xs mx-auto">
              Thank you for contacting us. Our reservations team will respond shortly.
            </p>
            <div className="flex justify-center gap-3">
              <a
                href={getBookingUrl(form.checkIn, form.checkOut, form.adults)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Instantly Online
              </a>
              <button onClick={onClose} className="btn-outline">
                Close
              </button>
            </div>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Name */}
            <div>
              <label className="font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-1.5 block">Full Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-lg border ${errors.name ? 'border-red-400' : 'border-warm-200'} bg-ivory-50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ocean-300 transition-all`}
                placeholder="Your full name"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-1.5 block">Phone Number *</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-lg border ${errors.phone ? 'border-red-400' : 'border-warm-200'} bg-ivory-50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ocean-300 transition-all`}
                placeholder="+91 86696 77609"
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            {/* Room Category */}
            <div>
              <label className="font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-1.5 block">Room Category</label>
              <select
                value={form.roomCategory}
                onChange={(e) => setForm({ ...form, roomCategory: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-warm-200 bg-ivory-50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ocean-300 transition-all appearance-none"
              >
                <option value="">Any Room</option>
                {rooms.map((room) => (
                  <option key={room.slug} value={room.slug}>{room.name}</option>
                ))}
              </select>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-1.5 block">Check-in</label>
                <input
                  type="date"
                  min={today}
                  value={form.checkIn}
                  onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg border ${errors.checkIn ? 'border-red-400' : 'border-warm-200'} bg-ivory-50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ocean-300 transition-all`}
                />
                {errors.checkIn && <p className="text-xs text-red-500 mt-1">{errors.checkIn}</p>}
              </div>
              <div>
                <label className="font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-1.5 block">Check-out</label>
                <input
                  type="date"
                  min={form.checkIn || today}
                  value={form.checkOut}
                  onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg border ${errors.checkOut ? 'border-red-400' : 'border-warm-200'} bg-ivory-50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ocean-300 transition-all`}
                />
                {errors.checkOut && <p className="text-xs text-red-500 mt-1">{errors.checkOut}</p>}
              </div>
            </div>

            {/* Adults + Children */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-1.5 block">Adults</label>
                <select
                  value={form.adults}
                  onChange={(e) => setForm({ ...form, adults: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-warm-200 bg-ivory-50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ocean-300 transition-all appearance-none"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div>
                <label className="font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-1.5 block">Children</label>
                <select
                  value={form.children}
                  onChange={(e) => setForm({ ...form, children: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-warm-200 bg-ivory-50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ocean-300 transition-all appearance-none"
                >
                  {[0, 1, 2, 3, 4].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-1.5 block">Special Requests</label>
              <textarea
                rows={3}
                value={form.requests}
                onChange={(e) => setForm({ ...form, requests: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-warm-200 bg-ivory-50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ocean-300 transition-all resize-none"
                placeholder="Any special requirements..."
              />
            </div>

            {/* Submit */}
            <div className="space-y-2">
              <button type="submit" className="btn-primary w-full gap-2">
                <Send size={16} />
                Send Enquiry via WhatsApp
              </button>
              <a
                href={getBookingUrl(form.checkIn, form.checkOut, form.adults)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline w-full text-center justify-center gap-2"
              >
                <ExternalLink size={16} />
                Book Online via Booking Engine
              </a>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
