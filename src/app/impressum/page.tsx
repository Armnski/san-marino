import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Impressum | San Marino Bonn", "Kontakt und Anbieterangaben für das Restaurant San Marino, Königswinterer Straße 717, 53227 Bonn.", "/impressum");
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";
import Button from "@/components/ui/Button";

export default function ImpressumPage() {
  return (
    <main style={{ backgroundColor: '#282828', minHeight: '100vh' }}>
      <div style={{ marginLeft: '5%', marginRight: '5%', paddingLeft: '24px', paddingRight: '24px', paddingTop: '120px', paddingBottom: '120px' }}>
        <FadeInOnScroll delay={0}>
          <div style={{ marginBottom: '48px' }}>
            <Button variant="secondary" href="/">
              ← Zurück zur Startseite
            </Button>
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll delay={0}>
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl"
            style={{ 
              fontFamily: 'var(--font-playfair), Georgia, serif',
              color: '#E0D8C8',
              marginBottom: '48px'
            }}
          >
            Impressum
          </h1>
        </FadeInOnScroll>

        <FadeInOnScroll delay={100}>
          <div 
            style={{ 
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              color: '#E0DED7',
              lineHeight: '1.8',
              maxWidth: '800px'
            }}
          >
            <h2 
              className="text-2xl md:text-3xl"
              style={{ 
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: '#F3CFB5',
                marginTop: '32px',
                marginBottom: '16px'
              }}
            >
              Angaben gemäß § 5 TMG
            </h2>
            <p style={{ marginBottom: '8px' }}>
              San Marino
            </p>
            <p style={{ marginBottom: '8px' }}>
              Königswinterer Straße 717
            </p>
            <p style={{ marginBottom: '24px' }}>
              53227 Bonn
            </p>

            <h2 
              className="text-2xl md:text-3xl"
              style={{ 
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: '#F3CFB5',
                marginTop: '32px',
                marginBottom: '16px'
              }}
            >
              Kontakt
            </h2>
            <p style={{ marginBottom: '8px' }}>
              Telefon: <a href="tel:0228441965" style={{ color: '#8B5E4A' }}>0228 / 44 19 65</a>
            </p>
            <p style={{ marginBottom: '24px' }}>
              E-Mail: info@sanmarino-bonn.de
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </main>
  );
}

