import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { resort } from '../data/resort';
import ScrollReveal from './ScrollReveal';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website Enquiry — ${resort.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${resort.email}?subject=${subject}&body=${body}`, '_blank');
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
            We'd love to hear from you. Whether you have a question about rooms, availability, or anything else, our team is ready to help.
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
                  {resort.address.line2}, {resort.address.city}<br />
                  {resort.address.state}, {resort.address.country}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-ocean-50 flex items-center justify-center flex-shrink-0">
                <Phone size={20} className="text-ocean-600" />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-warm-700 mb-0.5">Phone</p>
                <a href={`tel:${resort.phone.replace(/\s/g, '')}`} className="font-sans text-sm text-ocean-500 hover:text-ocean-700 transition-colors">
                  {resort.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-ocean-50 flex items-center justify-center flex-shrink-0">
                <Mail size={20} className="text-ocean-600" />
              </div>
              <div>
                <p className="font-sans text-sm font-semibold text-warm-700 mb-0.5">Email</p>
                <a href={`mailto:${resort.email}`} className="font-sans text-sm text-ocean-500 hover:text-ocean-700 transition-colors">
                  {resort.email}
                </a>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-8 rounded-xl overflow-hidden border border-warm-200 bg-warm-50 aspect-video flex items-center justify-center">
            {resort.mapEmbedUrl ? (
              <iframe
                src={resort.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Resort location"
              />
            ) : (
              <div className="text-center p-8">
                <MapPin size={32} className="text-warm-300 mx-auto mb-2" />
                <p className="font-sans text-sm text-warm-400">
                  Map will be displayed here
                </p>
                <p className="font-sans text-xs text-warm-300 mt-1">
                  Add a Google Maps embed URL in resort.js
                </p>
              </div>
            )}
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
            Fill in the form below and we'll get back to you promptly.
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
                Email Address
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-warm-200 bg-ivory-50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-ocean-300 transition-all"
                placeholder="your@email.com"
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
                placeholder="How can we help you?"
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
