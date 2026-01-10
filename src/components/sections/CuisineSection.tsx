"use client";

import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

// Simple SVG icons for the feature cards
const GridIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const FlameIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 2c0 4-4 6-4 10a4 4 0 0 0 8 0c0-4-4-6-4-10z" />
    <path d="M12 12a2 2 0 0 0 2 2c0-2-2-2-2-2z" />
  </svg>
);

const LeafIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 3v12c0 3.5 3.5 6 6 6s6-2.5 6-6V3" />
    <path d="M12 3c-2 4-6 6-6 10" />
    <path d="M12 3c2 4 6 6 6 10" />
  </svg>
);

const features = [
  {
    icon: <GridIcon />,
    title: "Indische Küche mit Herkunft",
    description:
      "Zubereitet von einem Koch aus Indien, der traditionelle Rezepte und regionale Kochkunst originalgetreu in unsere Küche bringt.",
  },
  {
    icon: <FlameIcon />,
    title: "Perfekte Schärfe",
    description:
      "Individuell anpassbar nach Ihrem Geschmack – mild, mittel oder feurig scharf",
  },
  {
    icon: <LeafIcon />,
    title: "Frische Zutaten",
    description:
      "Butter Chicken, Tandoori-Spezialitäten und hausgemachte Chutneys",
  },
];

export default function CuisineSection() {
  return (
    <section 
      style={{ backgroundColor: '#C06C4B', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div style={{ marginLeft: '5%', marginRight: '5%', paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Section Title */}
        <FadeInOnScroll delay={0}>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ 
              fontFamily: 'var(--font-playfair), Georgia, serif',
              color: '#010000',
              marginBottom: '64px',
              maxWidth: '900px'
            }}
          >
            Die Magie der indischen Küche: Vielfalt und Geschmackserlebnis
          </h2>
        </FadeInOnScroll>

        {/* Content Grid */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: '64px', marginBottom: '80px' }}
        >
          {/* Spices Image */}
          <div 
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            style={{ height: '450px' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&q=80')`,
              }}
            />
          </div>

          {/* Text Content */}
          <FadeInOnScroll delay={100}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <h3 
                className="text-2xl md:text-3xl"
                style={{ 
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  color: '#010000'
                }}
              >
                Aromatische Vielfalt
              </h3>
              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  color: '#010000'
                }}
              >
                Indische Küche verbindet aromatische Gewürze, vielfältige Currys und
                traditionelle Zubereitungsarten wie Tandoori und Biryani. Jedes Gericht
                erzählt seine eigene Geschichte und entführt Sie in den Norden Indiens.
              </p>
              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  color: '#010000'
                }}
              >
                Von mild bis &#8222;indisch scharf&#8220;: Unsere Gerichte sind individuell
                anpassbar, damit jeder Gast seine perfekte Schärfe findet und ein
                maßgeschneidertes Geschmackserlebnis genießt.
              </p>
            </div>
          </FadeInOnScroll>
        </div>

        {/* Feature Cards */}
        <FadeInOnScroll delay={200}>
          <div 
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: '32px' }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl card-hover"
              style={{ 
                backgroundColor: '#363636',
                border: '1px solid rgba(58, 58, 58, 0.5)',
                padding: '40px'
              }}
            >
              <div 
                className="rounded-xl flex items-center justify-center"
                style={{ 
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#7E402B',
                  color: '#FFFAFD',
                  marginBottom: '24px'
                }}
              >
                {feature.icon}
              </div>
              <h3 
                className="text-xl md:text-2xl"
                style={{ 
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  color: '#E0DED7',
                  marginBottom: '16px'
                }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-base leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  color: 'rgba(224, 224, 224, 0.8)'
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
