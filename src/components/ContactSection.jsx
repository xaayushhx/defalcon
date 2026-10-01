import { useState } from 'react';
import { MapPin, Phone, MessageCircle, Send, ExternalLink } from 'lucide-react';
import { resort } from '../data/resort';
import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello Defalcon Goa Beach Resort!\n\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    window.open(`https://wa.me/${resort.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      {/* Contact Info */}
      <ScrollReveal variant="fadeLeft">
        <div>
          <h3 className="font-serif text-heading-sm font-semibold text-ocean-700 mb-3">
            Get in Touch
          </h3>
          <p className="font-sans text-base text-warm-500 mb-8 leading-relaxed">
            We'd love to hear from you. Whether you have a question about rooms, reservations, or anything else, our team is ready to help.
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-ocean-50 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} className="text-ocean-600" />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-warm-700 mb-0.5">Address</p>
                <p className="font-sans text-sm text-warm-500 leading-relaxed">
                  {resort.address.line1}<br />
                  {resort.address.line2}<br />
                  {resort.address.city}, {resort.address.state} - {resort.address.pincode}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-ocean-50 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-ocean-600" />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-warm-700 mb-0.5">Phone</p>
                <a href={`tel:${resort.phone.replace(/\s/g, '')}`} className="font-sans text-sm text-ocean-500 hover:text-ocean-700 transition-colors font-medium">
                  {resort.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-tropical-50 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={20} className="text-tropical-600" />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-warm-700 mb-0.5">Direct Booking & WhatsApp</p>
                <div className="flex flex-wrap items-center gap-3 mt-1">
                  <a
                    href={resort.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-ocean-600 hover:text-ocean-800 bg-ocean-50 hover:bg-ocean-100 px-3 py-1 rounded-md transition-colors"
                  >
                    Online Booking Engine
                    <ExternalLink size={12} />
                  </a>
                  <a
                    href={`https://wa.me/${resort.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#128C7E] hover:text-[#075E54] bg-[#25D366]/10 hover:bg-[#25D366]/20 px-3 py-1 rounded-md transition-colors"
                  >
                    WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 rounded-xl overflow-hidden border border-warm-200 bg-warm-50 aspect-video flex items-center justify-center shadow-subtle">
            <iframe
              src={resort.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="De Falcon Goa Beach Resorts Location"
            />
          </div>
        </div>
      </ScrollReveal>

      {/* Contact Form */}
      <ScrollReveal variant="fadeRight">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card">
          <h4 className="font-serif text-lg font-semibold text-ocean-700 mb-1">
            Send Us a Message
          </h4>
          <p className="font-sans text-sm text-warm-400 mb-6">
            Fill in the form below and our team will connect with you promptly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-1.5 block">
                Your Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-warm-200 bg-ivory-50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ocean-300 transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-1.5 block">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-warm-200 bg-ivory-50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ocean-300 transition-all"
                placeholder="+91 86696 77609"
              />
            </div>
            <div>
              <label className="font-sans text-xs font-semibold tracking-wide uppercase text-warm-500 mb-1.5 block">
                Message
              </label>
              <textarea
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-warm-200 bg-ivory-50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ocean-300 transition-all resize-none"
                placeholder="How can we help you with your stay in Goa?"
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full gap-2"
              disabled={sent}
            >
              {sent ? (
                'Message Sent ✓'
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </ScrollReveal>
    </div>
  );
}
