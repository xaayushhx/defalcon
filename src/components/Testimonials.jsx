import { Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { testimonials } from '../data/resort';

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {testimonials.map((t, i) => (
        <ScrollReveal key={t.id} delay={i * 0.15} variant="fadeUp">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elegant transition-all duration-500 h-full flex flex-col">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={16} className="fill-sand-400 text-sand-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-sans text-sm text-warm-600 leading-relaxed mb-6 flex-1 italic">
              "{t.text}"
            </blockquote>

            {/* Guest info */}
            <div className="flex items-center gap-3 pt-4 border-t border-warm-100">
              <div className="w-10 h-10 rounded-full bg-ocean-100 flex items-center justify-center">
                <span className="font-serif text-base font-semibold text-ocean-700">
                  {t.guestInitial}
                </span>
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-warm-700">{t.guestLabel}</p>
                <p className="font-sans text-xs text-warm-400">{t.stayType}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
