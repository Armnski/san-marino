"use client";

import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

// Simple SVG icons
const RecipeIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="10" x2="16" y2="10" />
    <line x1="8" y1="14" x2="12" y2="14" />
    <circle cx="8" cy="18" r="1" fill="currentColor" />
  </svg>
);

const PlantIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M12 22V8" />
    <path d="M5 12c2-2 5-2 7 0" />
    <path d="M19 12c-2-2-5-2-7 0" />
    <path d="M5 8c2-2 5-2 7 0" />
    <path d="M19 8c-2-2-5-2-7 0" />
    <circle cx="12" cy="5" r="2" />
  </svg>
);

const HeartIcon = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const features = [
  {
    icon: <RecipeIcon />,
    title: "Traditionelle Rezepte",
    description:
      "Jahrhundertealte Kochtraditionen, authentisch umgesetzt mit modernem Anspruch an Qualität und Frische.",
  },
  {
    icon: <PlantIcon />,
    title: "Frische Zutaten",
    description:
      "Nur die besten Zutaten finden den Weg in unsere Küche – täglich frisch und sorgfältig ausgewählt.",
  },
  {
    icon: <HeartIcon />,
    title: "Gesund & Ausgewogen",
    description:
      "Vegane und vegetarische Optionen für bewussten Genuss ohne Kompromisse beim Geschmack.",
  },
];

export default function AuthenticitySection() {
  return (
    <section 
      style={{ backgroundColor: '#282828', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div style={{ marginLeft: '5%', marginRight: '5%', paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Section Title */}
        <FadeInOnScroll delay={0}>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center"
            style={{ 
              fontFamily: 'var(--font-playfair), Georgia, serif',
              color: '#F3CFB5',
              marginBottom: '80px'
            }}
          >
            Authentizität und Qualität aus Überzeugung
          </h2>
        </FadeInOnScroll>

        {/* Main Content Grid */}
        <FadeInOnScroll delay={100}>
          <div 
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{ gap: '64px', marginBottom: '100px' }}
          >
          {/* Image */}
          <div 
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ height: '500px' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&q=80')`,
              }}
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-start" style={{ gap: '32px' }}>
            <p 
              className="text-lg md:text-xl leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                color: '#F3CFB5'
              }}
            >
              Frische Zutaten und traditionelle Rezepte garantieren echten Geschmack
              Indiens – wie in den besten Restaurants Deutschlands. Unsere Gerichte
              werden mit Liebe und Sorgfalt zubereitet, inspiriert von jahrhundertealten
              Kochtraditionen, die von Generation zu Generation weitergegeben wurden.
            </p>
            <p 
              className="text-lg leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                color: '#F3CFB5'
              }}
            >
              Wir bieten auch vegane und vegetarische Optionen, die Gesundheit und
              Genuss vereinen. Jede Zutat wird sorgfältig ausgewählt, um höchste
              Qualität und Authentizität zu gewährleisten.
            </p>
          </div>
          </div>
        </FadeInOnScroll>

        {/* Feature Blocks */}
        <FadeInOnScroll delay={200}>
          <div 
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: '40px' }}
          >
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center md:text-left rounded-2xl card-hover"
              style={{ 
                border: '1px solid rgba(58, 58, 58, 0.5)',
                backgroundColor: 'rgba(54, 54, 54, 0.3)',
                padding: '48px'
              }}
            >
              <div 
                className="flex justify-center md:justify-start"
                style={{ color: '#7D402D', marginBottom: '24px' }}
              >
                {feature.icon}
              </div>
              <h3 
                className="text-xl md:text-2xl"
                style={{ 
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  color: '#F3CFB5',
                  marginBottom: '16px'
                }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-base leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  color: '#F3CFB5'
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
