# Defalcon Goa Beach Resort Website

A modern, luxurious, fully responsive website for **Defalcon Goa Beach Resort**, located in Candolim, North Goa, India.

Built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **React Router v6**.

---

## Features

- **Tropical Coastal Aesthetic**: Custom color palette, typography pairing (Playfair Display + Inter), glassmorphism, and smooth scroll animations.
- **Dedicated Room Pages**:
  - **Deluxe Room** (`/rooms/deluxe`)
  - **Super Deluxe Room** (`/rooms/super-deluxe`)
  - **Luxury Room with Jacuzzi** (`/rooms/luxury`)
- **Interactive Room Galleries**: Full-screen lightbox viewer, keyboard navigation, and swipe gestures.
- **Direct Reservation Enquiry System**: Modal popup with check-in/out date validation, guest counter, and instant WhatsApp & Email enquiry fallback.
- **Resort Amenities & Facilities**: Dynamic icon grid showcasing resort-wide and room-specific features.
- **Candolim & North Goa Highlights**: Guide to nearby attractions, beaches, and dining.
- **SEO & Performance Optimized**: Semantic HTML5, dynamic title/meta description tags, Open Graph cards, sitemap.xml, and robots.txt.

---

## Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router v6](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/xaayushhx/defalcon.git
   cd defalcon
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start local development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

---

## Project Structure

```
defalcon-goa-resort/
├── public/
│   ├── images/
│   │   ├── resort/          # Property & exterior imagery
│   │   └── rooms/           # Deluxe, Super Deluxe, Luxury photos
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/          # Reusable UI components (Navbar, Hero, BookingForm, etc.)
│   ├── data/                # Data models (rooms, amenities, gallery, resort info)
│   ├── pages/               # Route views (Home, DeluxeRoom, SuperDeluxeRoom, etc.)
│   ├── App.jsx              # Router & layout shell
│   ├── index.css            # Tailwind directives & design system utilities
│   └── main.jsx
├── index.html
├── tailwind.config.js
└── vite.config.js
```

---

## License

All rights reserved — Defalcon Goa Beach Resort.
