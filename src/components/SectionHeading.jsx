import ScrollReveal from './ScrollReveal';

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const alignClass = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  }[align];

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}>
      {subtitle && (
        <ScrollReveal delay={0}>
          <p
            className={`font-sans text-sm font-semibold tracking-[0.2em] uppercase mb-3 ${
              light ? 'text-sand-300' : 'text-coral'
            }`}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2
          className={`font-serif text-heading-sm md:text-heading font-semibold mb-4 ${
            light ? 'text-white' : 'text-ocean-700'
          }`}
        >
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p
            className={`text-base md:text-lg leading-relaxed ${
              light ? 'text-ivory-300' : 'text-warm-500'
            }`}
          >
            {description}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.3}>
        <div
          className={`mt-5 w-16 h-0.5 ${light ? 'bg-sand-400' : 'bg-coral'} ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        />
      </ScrollReveal>
    </div>
  );
}
