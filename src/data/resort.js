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

  // [PLACEHOLDER] — Replace with verified contact details
  phone: '+91 XXXXX XXXXX',
  email: 'reservations@defalcongoa.com',
  whatsapp: '+91XXXXXXXXXX', // WhatsApp number for enquiries (no spaces)

  // [PLACEHOLDER] — Replace with actual coordinates
  mapCoordinates: {
    lat: 15.5180,
    lng: 73.7630,
  },
  mapEmbedUrl: '', // Paste Google Maps embed URL here

  address: {
    line1: 'Defalcon Goa Beach Resort',
    line2: 'Candolim',
    city: 'North Goa',
    state: 'Goa',
    country: 'India',
    pincode: '403515', // [PLACEHOLDER]
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
    image: '/images/resort/hotel-main.avif',
  },
  {
    id: 2,
    title: 'Boutique Coastal Living',
    description:
      'Relax by the swimming pool, surrounded by lush palm greenery and tranquil tropical gardens right in the heart of Candolim.',
    image: '/images/rooms/luxury/luxray-room-with-jacuzzi-room-2.jpg',
  },
  {
    id: 3,
    title: 'North Goa Explorations',
    description:
      'Discover historic Fort Aguada, lively beach shacks, night markets, and authentic Goan seafood within easy driving distance.',
    image: '/images/rooms/super-deluxe/super-deluxe-room.jpg',
  },
];
