/*
 * ============================================================
 * RESORT CONFIGURATION
 * ============================================================
 * Update this file with actual resort information.
 * Fields marked [PLACEHOLDER] should be replaced with verified data.
 */

export const resort = {
  name: 'Defalcon Goa Beach Resort',
  tagline: 'Your Escape to Paradise',
  location: 'Candolim, North Goa, Goa, India',
  shortDescription:
    'Experience the beauty of Goa, where tropical charm meets the comfort of a perfect getaway.',
  aboutDescription:
    'Nestled in the heart of Candolim, Defalcon Goa Beach Resort offers a warm and welcoming retreat for travelers seeking the best of Goa. Surrounded by lush tropical greenery and just moments from the golden sands of Candolim Beach, our resort combines comfortable accommodation with the laid-back charm that makes Goa so special.',
  aboutSubtext:
    'Whether you are here to unwind by the pool, explore the vibrant local culture, or simply soak in the coastal atmosphere, Defalcon provides a peaceful base for your Goan holiday.',

  phone: '+91 86696 77609',
  whatsapp: '918669677609', // WhatsApp number for enquiries (no spaces)

  // Booking engine URL
  bookingUrl:
    'https://bookings.asiatech.in/?page=2109&type=googlehotelads&checkin=2026-10-02&checkout=2026-10-03&bookingSource=GoogleCPC',

  // Google Maps embed URL
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.425857047664!2d73.76517807589262!3d15.51528498508682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1100369a037%3A0xdd605167d56e8e57!2sDe%20Falcon%20Goa%20Beach%20Resorts!5e0!3m2!1sen!2sin!4v1790875132496!5m2!1sen!2sin',

  address: {
    line1: '503/A Vaddy, Fort Aguada Road',
    line2: 'Near United Colors of Benetton Store',
    city: 'Candolim',
    state: 'Goa',
    country: 'India',
    pincode: '403515',
  },

  socialLinks: {
    instagram: '#',
    facebook: '#',
    twitter: '#',
    tripadvisor: '#',
  },

  checkIn: '2:00 PM',  // [PLACEHOLDER]
  checkOut: '11:00 AM', // [PLACEHOLDER]
};

export const testimonials = [
  {
    id: 1,
    // [PLACEHOLDER] — Replace with real guest reviews
    text: 'A wonderful stay with beautiful rooms and excellent hospitality. The location in Candolim is perfect for exploring Goa.',
    guestInitial: 'A',
    guestLabel: 'Guest', // Use "Verified Guest" only with real reviews
    stayType: 'Family Holiday',
  },
  {
    id: 2,
    text: 'Clean, comfortable, and very well-maintained. The staff were incredibly helpful and made our trip memorable.',
    guestInitial: 'R',
    guestLabel: 'Guest',
    stayType: 'Couple Getaway',
  },
  {
    id: 3,
    text: 'Loved the peaceful atmosphere and the proximity to Candolim Beach. Will definitely return for another stay.',
    guestInitial: 'S',
    guestLabel: 'Guest',
    stayType: 'Solo Travel',
  },
];

export const goaExperiences = [
  {
    id: 1,
    title: 'Candolim Beach & Coastline',
    description:
      'One of North Goa\'s most beloved beaches, known for its golden sands, gentle waves, and stunning sunsets. Located just moments from Defalcon Goa Beach Resort.',
    image: '/images/goa/candolim-beach-sunset.jpg',
  },
  {
    id: 2,
    title: 'Boutique Coastal Living',
    description:
      'Relax by the swimming pool, surrounded by lush palm greenery and tranquil tropical gardens right in the heart of Candolim.',
    image: '/images/goa/coastal-living.jpg',
  },
  {
    id: 3,
    title: 'North Goa Explorations',
    description:
      'Discover historic Fort Aguada, lively beach shacks, night markets, and authentic Goan seafood within easy driving distance.',
    image: '/images/goa/north-goa-fort.jpg',
  },
];

export const getBookingUrl = (checkIn, checkOut, guests) => {
  const base = 'https://bookings.asiatech.in/?page=2109&type=googlehotelads';
  const cin = checkIn || '2026-10-02';
  const cout = checkOut || '2026-10-03';
  let url = `${base}&checkin=${cin}&checkout=${cout}&bookingSource=GoogleCPC`;
  if (guests) {
    url += `&guests=${guests}`;
  }
  return url;
};
