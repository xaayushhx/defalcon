import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';
import SectionHeading from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import RoomCard from '../components/RoomCard';
import AmenitiesGrid from '../components/AmenitiesGrid';
import GalleryGrid from '../components/GalleryGrid';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import { resort, goaExperiences } from '../data/resort';
import { rooms } from '../data/rooms';
import { resortAmenities } from '../data/amenities';
import { galleryImages } from '../data/gallery';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Home() {
  useEffect(() => {
    document.title = `${resort.name} — ${resort.location} | Your Escape to Paradise`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', `Discover ${resort.name} in Candolim, North Goa. Comfortable rooms, tropical gardens, swimming pool, and easy access to Candolim Beach. Book your Goan getaway today.`);
  }, []);

  return (
    <main>
      {/* ====================== HERO ====================== */}
      <Hero />

      {/* ====================== BOOKING BAR ====================== */}
      <BookingForm />

      {/* ====================== ABOUT ====================== */}
      <section className="py-20 md:py-28 section-padding" id="about">
        <div className="section-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal variant="fadeLeft">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/resort/hotel-main.avif"
                  alt="Defalcon Goa Beach Resort Candolim"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeRight" delay={0.2}>
              <div>
                <p className="font-sans text-sm font-semibold tracking-[0.2em] uppercase text-coral mb-3">
                  Welcome
                </p>
                <h2 className="font-serif text-heading-sm md:text-heading font-semibold text-ocean-700 mb-5">
                  A Little Piece of Paradise in Candolim
                </h2>
                <p className="font-sans text-base text-warm-500 leading-relaxed mb-4">
                  {resort.aboutDescription}
                </p>
                <p className="font-sans text-base text-warm-500 leading-relaxed mb-8">
                  {resort.aboutSubtext}
                </p>
                <Link to="/#amenities" className="btn-outline gap-2">
                  Discover Our Resort
                  <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ====================== ROOMS ====================== */}
      <section className="py-20 md:py-28 bg-ivory-100 section-padding" id="rooms">
        <div className="section-max-width">
          <SectionHeading
            subtitle="Accommodation"
            title="Our Rooms"
            description="Choose from three thoughtfully designed room categories, each offering a unique experience at Defalcon Goa Beach Resort."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {rooms.map((room, i) => (
              <RoomCard key={room.slug} room={room} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ====================== AMENITIES ====================== */}
      <section className="py-20 md:py-28 section-padding" id="amenities">
        <div className="section-max-width">
          <SectionHeading
            subtitle="Resort Features"
            title="Amenities & Services"
            description="Everything you need for a comfortable and enjoyable stay in Candolim."
          />
          <AmenitiesGrid amenities={resortAmenities} />
        </div>
      </section>

      {/* ====================== GOA EXPERIENCE ====================== */}
      <section className="py-20 md:py-28 bg-ocean-700 section-padding" id="goa">
        <div className="section-max-width">
          <SectionHeading
            subtitle="The Destination"
            title="Discover Goa & Candolim"
            description="From golden beaches to vibrant markets and rich heritage — Goa has something for everyone."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {goaExperiences.map((exp, i) => (
              <ScrollReveal key={exp.id} delay={i * 0.15} variant="fadeUp">
                <div className="group rounded-2xl overflow-hidden bg-ocean-800/50 hover:bg-ocean-800/70 transition-all duration-500">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="font-serif text-lg font-semibold text-white mb-2">{exp.title}</h3>
                    <p className="font-sans text-sm text-white/60 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== GALLERY ====================== */}
      <section className="py-20 md:py-28 section-padding" id="gallery">
        <div className="section-max-width">
          <SectionHeading
            subtitle="Gallery"
            title="A Glimpse of Defalcon"
            description="Explore our resort, rooms, and surroundings through our photo gallery."
          />
          <GalleryGrid images={galleryImages} maxItems={6} />
        </div>
      </section>

      {/* ====================== TESTIMONIALS ====================== */}
      <section className="py-20 md:py-28 bg-ivory-100 section-padding" id="testimonials">
        <div className="section-max-width">
          <SectionHeading
            subtitle="Guest Reviews"
            title="What Our Guests Say"
            description="Read about experiences from travellers who have stayed with us."
          />
          <Testimonials />
          <p className="text-center font-sans text-xs text-warm-400 mt-8 italic">
            These are editable placeholder reviews. Replace with verified guest feedback.
          </p>
        </div>
      </section>

      {/* ====================== CTA ====================== */}
      <section className="relative py-24 md:py-32 section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/resort/hotel-main.avif"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-ocean-900/75" />
        </div>
        <div className="relative z-10 section-max-width text-center">
          <ScrollReveal>
            <h2 className="font-serif text-heading-sm md:text-heading font-bold text-white mb-4">
              Your Goa Getaway Awaits
            </h2>
            <p className="font-sans text-base md:text-lg text-white/70 max-w-xl mx-auto mb-8">
              Make your next holiday a memorable one at {resort.name}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary !bg-coral hover:!bg-coral-500 gap-2"
              >
                <MessageCircle size={16} />
                Book Your Stay
              </button>
              <a href="#contact" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ====================== CONTACT ====================== */}
      <section className="py-20 md:py-28 section-padding" id="contact">
        <div className="section-max-width">
          <SectionHeading
            subtitle="Contact"
            title="Location & Contact"
            description={`${resort.name} — ${resort.location}`}
          />
          <ContactSection />
        </div>
      </section>
    </main>
  );
}
