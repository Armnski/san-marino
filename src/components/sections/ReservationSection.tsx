import Button from "@/components/ui/Button";

const contentBlocks = [
  {
    title: "Online buchen",
    description:
      "Einfach online Ihren Tisch reservieren – schnell, bequem und unkompliziert. Wir freuen uns auf Ihren Besuch!",
  },
  {
    title: "Besondere Anlässe",
    description:
      "Ideal für Geburtstage, Geschäftsessen oder romantische Abende – wir sorgen für unvergessliche Momente.",
  },
];

export default function ReservationSection() {
  return (
    <section style={{ backgroundColor: '#282828' }}>
      <div className="flex flex-col lg:flex-row">
        {/* Left Content */}
        <div 
          className="lg:w-3/5"
          style={{ 
            paddingTop: '120px', 
            paddingBottom: '120px',
            marginLeft: '5%',
            paddingRight: '5%'
          }}
        >
          <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
              style={{ 
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: '#F3CFB5',
                marginBottom: '64px',
                maxWidth: '800px'
              }}
            >
              Reservieren Sie jetzt und erleben Sie Indien mitten in Bonn!
            </h2>

            {/* Two Content Blocks Side by Side */}
            <div 
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ gap: '32px', marginBottom: '32px' }}
            >
              {contentBlocks.map((block, index) => (
                <div 
                  key={index} 
                  className="rounded-2xl card-hover"
                  style={{ 
                    backgroundColor: '#363636',
                    border: '1px solid rgba(58, 58, 58, 0.5)',
                    padding: '40px'
                  }}
                >
                  <h3 
                    className="text-xl md:text-2xl"
                    style={{ 
                      fontFamily: 'var(--font-playfair), Georgia, serif',
                      color: '#E0DED7',
                      marginBottom: '20px'
                    }}
                  >
                    {block.title}
                  </h3>
                  <p 
                    className="text-base leading-relaxed"
                    style={{ 
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      color: 'rgba(224, 224, 224, 0.8)'
                    }}
                  >
                    {block.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Full Width Block */}
            <div 
              className="rounded-2xl card-hover"
              style={{ 
                backgroundColor: '#363636',
                border: '1px solid rgba(58, 58, 58, 0.5)',
                padding: '40px',
                marginBottom: '48px'
              }}
            >
              <h3 
                className="text-xl md:text-2xl"
                style={{ 
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  color: '#E0DED7',
                  marginBottom: '20px'
                }}
              >
                Bleiben Sie verbunden
              </h3>
              <p 
                className="text-base leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  color: 'rgba(224, 224, 224, 0.8)'
                }}
              >
                Folgen Sie uns auf Social Media für aktuelle Angebote, Events und
                kulinarische Inspirationen aus Indien.
              </p>
            </div>

            {/* Description */}
            <p 
              className="text-lg leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                color: '#F3CFB5',
                marginBottom: '48px',
                maxWidth: '650px'
              }}
            >
              Gönnen Sie sich eine Auszeit vom Alltag und tauchen Sie ein in die
              faszinierende Welt der indischen Küche. Unser Team erwartet Sie mit
              offenen Armen und verwöhnt Sie mit authentischen Spezialitäten, die Ihre
              Sinne verzaubern werden.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                variant="primary"
                href="https://www.google.com/maps/reserve/v/dine/c/9Bur0wIrbm8?source=pa&opi=89978449&hl=de-CH&gei=GopRadazNNPoi-gP3cqJaA&sourceurl=https://www.google.com/search?client%3Dsafari%26rls%3Den%26q%3DSan%2BMarino%2BBonn%2Bgoogle%26ie%3DUTF-8%26oe%3DUTF-8"
              >
                Jetzt Tisch reservieren
              </Button>
              <Button 
                variant="secondary"
                href="tel:0228441965"
              >
                Kontakt aufnehmen
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-2/5 relative min-h-[500px] lg:min-h-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('images/EndImage.png')`,
            }}
          >
            {/* Subtle overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to left, transparent, rgba(40, 40, 40, 0.3))'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
