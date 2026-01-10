"use client";

import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

const features = [
  {
    title: "Herzlicher Service",
    description:
      "Freundliches Personal, das Sie kompetent berät und auf Ihre Wünsche eingeht – für ein unvergessliches Geschmackserlebnis.",
  },
  {
    title: "Stilvolles Ambiente",
    description:
      "Ruhige Innenräume mit warmem Licht schaffen eine entspannte Atmosphäre für besondere Momente.",
  },
  {
    title: "Einladende Terrasse",
    description:
      "Genießen Sie laue Sommerabende auf unserer Terrasse – ideal für romantische Dinner oder gesellige Runden.",
  },
];

export default function AtmosphereSection() {
  return (
    <section 
      style={{ backgroundColor: '#B2674A', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div style={{ marginLeft: '5%', marginRight: '5%', paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Section Title */}
        <FadeInOnScroll delay={0}>
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{ 
              fontFamily: 'var(--font-playfair), Georgia, serif',
              color: '#010000',
              marginBottom: '48px',
              maxWidth: '900px'
            }}
          >
            Unser Restaurant: Atmosphäre und Gastfreundschaft
          </h2>
        </FadeInOnScroll>

        {/* Intro Paragraph */}
        <FadeInOnScroll delay={100}>
          <div 
            style={{ 
              marginBottom: '80px',
              maxWidth: '900px'
            }}
          >
          <p 
            className="text-lg md:text-xl leading-relaxed"
            style={{ 
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              color: '#010000',
              marginBottom: '24px'
            }}
          >
            Unser Restaurant steht für authentische indische Küche in einem ruhigen, stilvollen Ambiente. Warme Farben, fein abgestimmte Lichtakzente und ausgewählte Details aus der indischen Kultur schaffen eine Atmosphäre der Gelassenheit und Eleganz.
          </p>
          <p 
            className="text-lg md:text-xl leading-relaxed"
            style={{ 
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              color: '#010000'
            }}
          >
            Hier geht es nicht um Inszenierung, sondern um Echtheit: traditionelle Aromen, sorgfältige Zubereitung und ein Raum, der zum Ankommen, Entspannen und Genießen einlädt. Ein Ort, an dem sich indische Esskultur natürlich entfaltet – dezent, hochwertig und zeitlos.
          </p>
          </div>
        </FadeInOnScroll>

        {/* Feature Blocks */}
        <FadeInOnScroll delay={200}>
          <div 
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: '48px', marginBottom: '80px' }}
          >
          {features.map((feature, index) => (
            <div key={index}>
              <h3 
                className="text-2xl md:text-3xl"
                style={{ 
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  color: '#010000',
                  marginBottom: '20px'
                }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-base md:text-lg leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  color: '#010000'
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
          </div>
        </FadeInOnScroll>

        {/* Quote */}
        <FadeInOnScroll delay={300}>
          <div 
            style={{ 
              borderLeft: '4px solid #010000',
              paddingLeft: '40px',
              paddingTop: '24px',
              paddingBottom: '24px',
              marginTop: '40px'
            }}
          >
            <p 
              className="text-2xl md:text-3xl lg:text-4xl italic leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: '#010000',
                fontWeight: 400
              }}
            >
              &#8222;Bei uns erleben Sie nicht nur ein Essen, sondern eine Reise nach Indien
              – mit allen Sinnen.&#8220;
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
