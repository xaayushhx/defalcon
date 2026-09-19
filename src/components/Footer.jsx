import { Link } from 'react-router-dom';
import { resort } from '../data/resort';
import { rooms } from '../data/rooms';
import { MapPin, Phone, Mail } from 'lucide-react';

const InstagramIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const footerNav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Rooms', href: '/#rooms' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-ocean-700 text-white/80" id="footer">
      <div className="section-padding">
        <div className="section-max-width py-16 md:py-20">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Column 1: About */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block mb-4">
                <span className="font-serif text-2xl font-bold text-white">Defalcon</span>
                <span className="block font-sans text-[10px] tracking-[0.2em] uppercase text-sand-300 mt-0.5">
                  Goa Beach Resort
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-white/60 mb-6 max-w-sm">
                A warm and welcoming retreat in Candolim, North Goa — where tropical charm meets comfortable accommodation for a perfect Goan holiday.
              </p>
              <div className="flex items-center gap-3">
                {resort.socialLinks.instagram !== '#' || true ? (
                  <a
                    href={resort.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all"
                    aria-label="Instagram"
                  >
                    <InstagramIcon size={16} />
                  </a>
                ) : null}
                <a
                  href={resort.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={16} />
                </a>
                <a
                  href={resort.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all"
                  aria-label="Twitter"
                >
                  <TwitterIcon size={16} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-serif text-base font-semibold text-white mb-5">Navigate</h3>
              <ul className="space-y-2.5">
                {footerNav.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="font-sans text-sm text-white/60 hover:text-sand-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Our Rooms */}
            <div>
              <h3 className="font-serif text-base font-semibold text-white mb-5">Our Rooms</h3>
              <ul className="space-y-2.5">
                {rooms.map((room) => (
                  <li key={room.slug}>
                    <Link
                      to={`/rooms/${room.slug}`}
                      className="font-sans text-sm text-white/60 hover:text-sand-300 transition-colors"
                    >
                      {room.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="font-serif text-base font-semibold text-white mb-5">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-sand-300" />
                  <span className="font-sans text-sm text-white/60 leading-relaxed">
                    {resort.address.line1}<br />
                    {resort.address.line2}, {resort.address.city}<br />
                    {resort.address.state}, {resort.address.country}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="flex-shrink-0 text-sand-300" />
                  <a
                    href={`tel:${resort.phone.replace(/\s/g, '')}`}
                    className="font-sans text-sm text-white/60 hover:text-sand-300 transition-colors"
                  >
                    {resort.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="flex-shrink-0 text-sand-300" />
                  <a
                    href={`mailto:${resort.email}`}
                    className="font-sans text-sm text-white/60 hover:text-sand-300 transition-colors"
                  >
                    {resort.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-14 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="font-sans text-xs text-white/40">
                © {new Date().getFullYear()} {resort.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="font-sans text-xs text-white/40 hover:text-white/60 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="font-sans text-xs text-white/40 hover:text-white/60 transition-colors">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
