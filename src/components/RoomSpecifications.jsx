import * as LucideIcons from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function RoomSpecifications({ specs }) {
  const specFields = [
    { key: 'size', label: 'Room Size', icon: 'Maximize2' },
    { key: 'maxOccupancy', label: 'Max Occupancy', icon: 'Users' },
    { key: 'bedType', label: 'Bed Type', icon: 'Bed' },
    { key: 'numBeds', label: 'Number of Beds', icon: 'Hash' },
    { key: 'view', label: 'View', icon: 'Eye' },
    { key: 'smokingPolicy', label: 'Smoking', icon: 'Ban' },
    { key: 'extraBed', label: 'Extra Bed', icon: 'PlusCircle' },
  ];

  // Only show fields that have values
  const visibleSpecs = specFields.filter((f) => specs[f.key]);

  if (visibleSpecs.length === 0) return null;

  return (
    <ScrollReveal>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleSpecs.map((field, i) => {
          const IconComponent = LucideIcons[field.icon] || LucideIcons.Info;
          return (
            <div
              key={field.key}
              className="flex items-start gap-3 p-4 rounded-xl bg-ivory-50 border border-warm-100"
            >
              <IconComponent size={18} className="text-ocean-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-sans text-xs text-warm-400 mb-0.5">{field.label}</p>
                <p className="font-sans text-sm font-medium text-warm-800">{specs[field.key]}</p>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollReveal>
  );
}
