import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, Users, Home, Search, X, Send } from 'lucide-react';
import { rooms } from '../data/rooms';
import { resort } from '../data/resort';
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
    if (!formData.checkIn) errs.checkIn = 'Required';
    if (!formData.checkOut) errs.checkOut = 'Required';
    if (formData.checkIn && formData.checkOut && formData.checkIn >= formData.checkOut) {
      errs.checkOut = 'Must be after check-in';
    }
    if (!formData.guests || formData.guests < 1) errs.guests = 'Required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowEnquiry(true);
    }
  };

  return (
    <>
      <section className="relative z-20 -mt-10 md:-mt-12 section-padding" id="booking">
        <ScrollReveal>
          <div className="section-max-width">
            <form
              onSubmit={handleSubmit}
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
// BOOKING ENQUIRY MODAL
// ============================================================
export function BookingEnquiryModal({ initialData = {}, onClose, preselectedRoom = '' }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
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
    if (!form.email.trim()) errs.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email';
    if (!form.checkIn) errs.checkIn = 'Required';
    if (!form.checkOut) errs.checkOut = 'Required';
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
Email: ${form.email}
Room: ${roomName}
Check-in: ${form.checkIn}
Check-out: ${form.checkOut}
Adults: ${form.adults}
Children: ${form.children}
${form.requests ? `Special Requests: ${form.requests}` : ''}`;

    // Also prepare mailto fallback
    const mailSubject = encodeURIComponent(`Reservation Enquiry — ${resort.name}`);
    const mailBody = encodeURIComponent(message);

    // Try WhatsApp first
    if (resort.whatsapp && resort.whatsapp !== '+91XXXXXXXXXX') {
      window.open(
        `https://wa.me/${resort.whatsapp}?text=${encodeURIComponent(message)}`,
        '_blank'
      );
    } else {
      // Fallback to email
      window.open(`mailto:${resort.email}?subject=${mailSubject}&body=${mailBody}`, '_blank');
    }

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
            <h4 className="font-serif text-lg font-semibold text-ocean-700 mb-2">Enquiry Sent!</h4>
            <p className="font-sans text-sm text-warm-500 mb-6 max-w-xs mx-auto">
              Thank you for your interest. Our team will get back to you shortly with availability and rates.
            </p>
            <button onClick={onClose} className="btn-primary">
              Close
            </button>
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

            {/* Phone + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-1.5 block">Phone *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg border ${errors.phone ? 'border-red-400' : 'border-warm-200'} bg-ivory-50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ocean-300 transition-all`}
                  placeholder="+91 XXXXX XXXXX"
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label className="font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-1.5 block">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-lg border ${errors.email ? 'border-red-400' : 'border-warm-200'} bg-ivory-50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ocean-300 transition-all`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>
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
                <label className="font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-1.5 block">Check-in *</label>
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
                <label className="font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-1.5 block">Check-out *</label>
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
            <button type="submit" className="btn-primary w-full gap-2">
              <Send size={16} />
              Send Enquiry
            </button>
            <p className="text-center text-xs text-warm-400">
              Your enquiry will be sent via {resort.whatsapp !== '+91XXXXXXXXXX' ? 'WhatsApp' : 'email'}. Our team will respond with availability and rates.
            </p>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
