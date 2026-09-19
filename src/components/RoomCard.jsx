import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function RoomCard({ room, index = 0 }) {
  return (
    <ScrollReveal delay={index * 0.15} className="h-full">
      <div className="card-premium group h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={room.cardImage}
            alt={`${room.name} at Defalcon Goa Beach Resort`}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Price tag — only shown if price is set */}
          {room.startingPrice && (
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg">
              <p className="font-sans text-xs text-warm-500">From</p>
              <p className="font-serif text-lg font-semibold text-ocean-700">{room.startingPrice}</p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 md:p-7">
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-ocean-700 mb-2">
            {room.name}
          </h3>
          <p className="font-sans text-sm text-warm-500 leading-relaxed mb-5 flex-1">
            {room.shortDescription}
          </p>

          {/* Quick specs */}
          <div className="flex flex-wrap gap-3 mb-6">
            {room.specs.maxOccupancy && (
              <span className="font-sans text-xs px-3 py-1 bg-ivory-100 text-warm-600 rounded-full">
                {room.specs.maxOccupancy}
              </span>
            )}
            {room.specs.bedType && (
              <span className="font-sans text-xs px-3 py-1 bg-ivory-100 text-warm-600 rounded-full">
                {room.specs.bedType}
              </span>
            )}
            {room.specs.size && (
              <span className="font-sans text-xs px-3 py-1 bg-ivory-100 text-warm-600 rounded-full">
                {room.specs.size}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Link
              to={`/rooms/${room.slug}`}
              className="btn-outline !py-2.5 !px-5 !text-xs flex-1 gap-1.5"
            >
              Explore Room
              <ArrowRight size={14} />
            </Link>
            <Link
              to={`/rooms/${room.slug}#enquiry`}
              className="btn-primary !py-2.5 !px-5 !text-xs flex-1 gap-1.5"
            >
              <MessageCircle size={14} />
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
