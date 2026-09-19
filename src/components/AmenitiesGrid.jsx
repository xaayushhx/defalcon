import * as LucideIcons from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AmenitiesGrid({ amenities, columns = 4 }) {
  const colClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  }[columns] || 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4';

  return (
    <div className={`grid ${colClass} gap-4 md:gap-6`}>
      {amenities.map((amenity, i) => {
        const IconComponent = LucideIcons[amenity.icon] || LucideIcons.Star;
        return (
          <ScrollReveal key={amenity.id || amenity.label || i} delay={i * 0.05} variant="fadeUp">
            <div className="group flex flex-col items-center text-center p-5 md:p-6 rounded-xl bg-white border border-warm-100 hover:border-ocean-200 hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-ocean-50 flex items-center justify-center mb-3 group-hover:bg-ocean-100 transition-colors duration-300">
                <IconComponent size={22} className="text-ocean-600" />
              </div>
              <h4 className="font-sans text-sm font-semibold text-warm-800 mb-1">
                {amenity.title || amenity.label}
              </h4>
              {amenity.description && (
                <p className="font-sans text-xs text-warm-400 leading-relaxed">
                  {amenity.description}
                </p>
              )}
            </div>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
