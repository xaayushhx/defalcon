/*
 * ============================================================
 * ROOMS CONFIGURATION
 * ============================================================
 * Centralized configuration for all room categories with actual resort imagery.
 * Update descriptions, amenities, images, and specs here.
 */

export const rooms = [
  {
    id: 'deluxe',
    slug: 'deluxe',
    name: 'Deluxe Room',
    shortName: 'Deluxe',
    tagline: 'Comfort Meets Coastal Charm',
    heroImage: '/images/rooms/deluxe/deluxe-room.jpg',
    cardImage: '/images/rooms/deluxe/deluxe-room.jpg',

    shortDescription:
      'A comfortable and well-appointed room designed for a relaxing Goan holiday, with warm interiors and thoughtful touches.',

    fullDescription: [
      'The Deluxe Room at Defalcon Goa Beach Resort offers a welcoming and comfortable space to unwind after a day exploring Candolim. Designed with warm wood tones and soft natural textures, the room creates a calm, restful atmosphere that complements the tropical surroundings.',
      'Each room is thoughtfully furnished to provide everything you need for a pleasant stay — from a comfortable bed with quality linens to a functional workspace and a private bathroom with modern fittings. Natural light fills the space, and carefully chosen décor adds a touch of Goan character.',
      'The Deluxe Room is ideal for couples, solo travellers, or anyone looking for a comfortable and affordable base in the heart of Candolim.',
    ],

    gallery: [
      { src: '/images/rooms/deluxe/deluxe-room.jpg', alt: 'Deluxe Room — comfortable bedroom interior' },
      { src: '/images/rooms/deluxe/deluxe-room-room-2.jpg', alt: 'Deluxe Room — sitting area and furnishings' },
    ],

    // Room specifications — set to null to hide a field
    specs: {
      size: null,          // e.g. '28 sq m' — update when confirmed
      maxOccupancy: '2 Guests',
      bedType: 'Queen Bed',
      numBeds: '1',
      view: 'Garden & Pool View',
      smokingPolicy: 'Non-Smoking',
      extraBed: 'Available on request',
    },

    // Room-specific amenities
    amenities: [
      { icon: 'Snowflake', label: 'Air Conditioning' },
      { icon: 'Wifi', label: 'Complimentary Wi-Fi' },
      { icon: 'Tv', label: 'Television' },
      { icon: 'Bath', label: 'Private Bathroom' },
      { icon: 'Droplets', label: 'Hot & Cold Water' },
      { icon: 'Shirt', label: 'Towels & Toiletries' },
      { icon: 'DoorOpen', label: 'Wardrobe' },
      { icon: 'Sparkles', label: 'Daily Housekeeping' },
    ],

    highlights: [
      {
        title: 'Warm & Welcoming Atmosphere',
        description: 'A cosy retreat with warm wood interiors and soft ambient lighting, designed for a peaceful holiday experience.',
        image: '/images/rooms/deluxe/deluxe-room.jpg',
      },
      {
        title: 'Thoughtful Amenities',
        description: 'Every essential thoughtfully provided so you can focus on enjoying your Goan getaway in Candolim.',
        image: '/images/rooms/deluxe/deluxe-room-room-2.jpg',
      },
    ],

    // What's included in the stay
    inclusions: [
      'Daily housekeeping',
      'Complimentary high-speed Wi-Fi',
      'Access to swimming pool',
      'Access to common areas and gardens',
    ],

    // Rates — set to null to hide pricing until confirmed
    startingPrice: null,
    priceUnit: 'per night',

    // FAQ / Important Information
    faq: [
      {
        question: 'What are the check-in and check-out times?',
        answer: 'Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available on request based on availability.',
      },
      {
        question: 'Is breakfast included?',
        answer: 'Please enquire at the time of booking for current breakfast options and meal plans.',
      },
      {
        question: 'What is the cancellation policy?',
        answer: 'Please contact the resort concierge directly for our current cancellation and date-change policies.',
      },
      {
        question: 'Are children allowed?',
        answer: 'Children are welcome. Please mention the number of children and their ages when submitting your reservation enquiry.',
      },
      {
        question: 'What identification is required at check-in?',
        answer: 'All adult guests are required to present a valid government-issued photo ID (Aadhaar, Passport, Driving License) at check-in.',
      },
      {
        question: 'Is smoking allowed in the rooms?',
        answer: 'All guest rooms are non-smoking. Designated smoking zones are available in open outdoor areas.',
      },
    ],
  },

  {
    id: 'super-deluxe',
    slug: 'super-deluxe',
    name: 'Super Deluxe Room',
    shortName: 'Super Deluxe',
    tagline: 'Elevated Comfort, Tropical Elegance',
    heroImage: '/images/rooms/super-deluxe/super-deluxe-room.jpg',
    cardImage: '/images/rooms/super-deluxe/super-deluxe-room.jpg',

    shortDescription:
      'A step above the ordinary — the Super Deluxe Room offers additional space, refined interiors, and enhanced comfort for a memorable stay.',

    fullDescription: [
      'The Super Deluxe Room elevates your stay at Defalcon Goa Beach Resort with a more spacious layout, premium furnishings, and thoughtful design details that create a sense of refined tropical comfort.',
      'Enjoy a generous seating area where you can relax with a book or plan the next day\'s adventure, complemented by a well-appointed sleeping space with premium bedding. Large windows invite the lush Goan landscape inside, and the tasteful interiors blend contemporary comfort with local character.',
      'With its enhanced amenities and inviting atmosphere, the Super Deluxe Room is perfect for those who appreciate a little extra space and sophistication in their holiday accommodation.',
    ],

    gallery: [
      { src: '/images/rooms/super-deluxe/super-deluxe-room.jpg', alt: 'Super Deluxe Room — spacious bedroom and seating' },
      { src: '/images/rooms/super-deluxe/super-deluxe-room-room-2.jpg', alt: 'Super Deluxe Room — detailed view of furnishings' },
    ],

    specs: {
      size: null,
      maxOccupancy: '2–3 Guests',
      bedType: 'King Bed',
      numBeds: '1',
      view: 'Pool & Garden View',
      smokingPolicy: 'Non-Smoking',
      extraBed: 'Available on request',
    },

    amenities: [
      { icon: 'Snowflake', label: 'Air Conditioning' },
      { icon: 'Wifi', label: 'Complimentary Wi-Fi' },
      { icon: 'Tv', label: 'Television' },
      { icon: 'Bath', label: 'Private Bathroom' },
      { icon: 'Droplets', label: 'Hot & Cold Water' },
      { icon: 'Shirt', label: 'Towels & Toiletries' },
      { icon: 'DoorOpen', label: 'Wardrobe' },
      { icon: 'Armchair', label: 'Seating Area' },
      { icon: 'Coffee', label: 'Tea & Coffee Facilities' },
      { icon: 'Sparkles', label: 'Daily Housekeeping' },
    ],

    highlights: [
      {
        title: 'Extra Space to Relax',
        description: 'A generous layout with a dedicated seating area, so you have plenty of room to spread out and truly unwind in style.',
        image: '/images/rooms/super-deluxe/super-deluxe-room.jpg',
      },
      {
        title: 'Refined Coastal Interiors',
        description: 'Enhanced decor and premium bedding tailored for peaceful sleep after sun-drenched days on Candolim Beach.',
        image: '/images/rooms/super-deluxe/super-deluxe-room-room-2.jpg',
      },
    ],

    inclusions: [
      'Daily housekeeping',
      'Complimentary Wi-Fi',
      'Tea and coffee making facilities',
      'Access to swimming pool',
      'Access to common areas and gardens',
    ],

    startingPrice: null,
    priceUnit: 'per night',

    faq: [
      {
        question: 'Can an extra bed or mattress be accommodated?',
        answer: 'Yes, an extra bed can be arranged for a third guest upon request (subject to additional charges).',
      },
      {
        question: 'What are the check-in and check-out times?',
        answer: 'Check-in is from 2:00 PM onwards and check-out is by 11:00 AM.',
      },
      {
        question: 'Is breakfast included?',
        answer: 'Please enquire at the time of booking for current breakfast inclusion options.',
      },
      {
        question: 'What is the cancellation policy?',
        answer: 'Cancellation terms vary based on seasonal booking windows. Please contact our reservations desk for specifics.',
      },
      {
        question: 'Are children allowed?',
        answer: 'Children are welcome. Please specify the number of children when placing your reservation enquiry.',
      },
      {
        question: 'Is smoking allowed in the rooms?',
        answer: 'All rooms are strictly non-smoking.',
      },
    ],
  },

  {
    id: 'luxury',
    slug: 'luxury',
    name: 'Luxury Room with Jacuzzi',
    shortName: 'Luxury with Jacuzzi',
    tagline: 'Private Jacuzzi & Lavish Coastal Living',
    heroImage: '/images/rooms/luxury/luxray-room-with-jacuzzi-room-2.jpg',
    cardImage: '/images/rooms/luxury/luxray-room-with-jacuzzi-room-2.jpg',

    shortDescription:
      'Our most distinguished accommodation — featuring a private in-room Jacuzzi tub, spacious elegance, and premium appointments for an unforgettable Goan retreat.',

    fullDescription: [
      'The Luxury Room with Jacuzzi at Defalcon Goa Beach Resort represents the absolute pinnacle of coastal comfort and indulgence. Designed with high-end materials and an eye for luxury, this room offers an extraordinary living space that feels both romantic and genuinely rejuvenating.',
      'The centerpiece is your private in-room Jacuzzi, allowing you to soak in warm hydrotherapy bubbles at any hour of the day or night. Complemented by a plush king-sized bed with crisp premium linens, bespoke wooden craftsmanship, and generous space, every hour spent here feels like a five-star escape.',
      'The Luxury Room is the premier choice for couples celebrating honeymoons, anniversaries, or discerning guests seeking the highest standard of boutique indulgence in Candolim.',
    ],

    gallery: [
      { src: '/images/rooms/luxury/luxray-room-with-jacuzzi-room-2.jpg', alt: 'Luxury Room with Jacuzzi — private in-room Jacuzzi tub' },
      { src: '/images/rooms/luxury/room.avif', alt: 'Luxury Room with Jacuzzi — master bedroom suite' },
    ],

    specs: {
      size: null,
      maxOccupancy: '2 Guests',
      bedType: 'King Bed',
      numBeds: '1',
      view: 'Pool & Garden View',
      smokingPolicy: 'Non-Smoking',
      extraBed: 'Available on request',
    },

    amenities: [
      { icon: 'Bath', label: 'Private In-Room Jacuzzi' },
      { icon: 'Snowflake', label: 'Air Conditioning' },
      { icon: 'Wifi', label: 'Complimentary High-Speed Wi-Fi' },
      { icon: 'Tv', label: 'Smart Television' },
      { icon: 'Droplets', label: 'Hot & Cold Water' },
      { icon: 'Shirt', label: 'Plush Bathrobes & Toiletries' },
      { icon: 'DoorOpen', label: 'Spacious Wardrobe' },
      { icon: 'Armchair', label: 'Designer Seating' },
      { icon: 'Coffee', label: 'Tea & Coffee Bar' },
      { icon: 'Refrigerator', label: 'Mini Refrigerator' },
      { icon: 'Sparkles', label: 'Daily Housekeeping' },
    ],

    highlights: [
      {
        title: 'Private In-Room Jacuzzi',
        description: 'Immerse yourself in bubbling hydrotherapy without leaving your private suite — pure romance and bliss.',
        image: '/images/rooms/luxury/luxray-room-with-jacuzzi-room-2.jpg',
      },
      {
        title: 'Boutique Luxury Decor',
        description: 'Lavish appointments, fine wooden finishes, and curated ambient lighting for a truly distinguished experience.',
        image: '/images/rooms/luxury/room.avif',
      },
    ],

    inclusions: [
      'Private in-room Jacuzzi access',
      'Daily housekeeping service',
      'Complimentary high-speed Wi-Fi',
      'Tea and coffee making facilities',
      'Mini refrigerator',
      'Access to resort swimming pool & grounds',
    ],

    startingPrice: null,
    priceUnit: 'per night',

    faq: [
      {
        question: 'Does the room feature a private Jacuzzi?',
        answer: 'Yes, this room category features an exclusive private in-room Jacuzzi tub for your personal use throughout your stay.',
      },
      {
        question: 'What are the check-in and check-out times?',
        answer: 'Check-in is at 2:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be requested in advance.',
      },
      {
        question: 'Is this room suitable for honeymooners and couples?',
        answer: 'Absolutely. The Luxury Room with Jacuzzi is our most popular choice for couples, romantic escapes, and special celebrations.',
      },
      {
        question: 'What is the cancellation policy?',
        answer: 'Please contact the resort directly for our current cancellation and booking terms.',
      },
      {
        question: 'What identification is required?',
        answer: 'A government-issued photo ID (Aadhaar, Passport, or Driving License) is required for all guests at check-in.',
      },
      {
        question: 'Is smoking permitted?',
        answer: 'All rooms are strictly non-smoking to preserve the fresh and luxurious environment.',
      },
    ],
  },
];
