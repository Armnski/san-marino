"use client";

import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

export default function Footer() {
  return (
    <footer 
      style={{ backgroundColor: '#3A3A3A', paddingTop: '100px', paddingBottom: '80px' }}
    >
      <div style={{ marginLeft: '5%', marginRight: '5%', paddingLeft: '24px', paddingRight: '24px' }}>
        <FadeInOnScroll delay={0}>
          <div 
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: '64px', marginBottom: '80px' }}
          >
          {/* Restaurant Name & Description */}
          <div>
            <h2 
              className="text-3xl md:text-4xl"
              style={{ 
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: '#8B5E4A',
                marginBottom: '24px'
              }}
            >
              San Marino
            </h2>
            <p 
              className="text-base leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                color: 'rgba(224, 224, 224, 0.7)',
                lineHeight: '1.8',
                marginBottom: '16px'
              }}
            >
              Authentisches indisches Restaurant in Bonn. Erleben Sie die Vielfalt
              der indischen Küche in gehobenem Ambiente.
            </p>
            <p 
              className="text-base leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                color: 'rgba(224, 224, 224, 0.7)',
                lineHeight: '1.8'
              }}
            >
              Inhaber: Familie Ghotra
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 
              className="text-xl md:text-2xl"
              style={{ 
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: '#E0DED7',
                marginBottom: '24px'
              }}
            >
              Kontakt
            </h3>
            <div 
              style={{ 
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                color: 'rgba(224, 224, 224, 0.8)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <p>Königswinterer Straße 717</p>
              <p>53227 Bonn</p>
              <p style={{ marginTop: '16px' }}>
                <a
                  href="tel:0228441965"
                  className="transition-colors hover:opacity-80"
                  style={{ color: '#8B5E4A' }}
                >
                  0228 / 44 19 65
                </a>
              </p>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 
              className="text-xl md:text-2xl"
              style={{ 
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: '#E0DED7',
                marginBottom: '24px'
              }}
            >
              Öffnungszeiten
            </h3>
            <div 
              style={{ 
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                color: 'rgba(224, 224, 224, 0.8)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}
            >
              <p>Täglich geöffnet</p>
              <p style={{ color: '#8B5E4A', fontWeight: 500, marginTop: '8px' }}>
                11:00 – 14:00 Uhr
              </p>
              <p style={{ color: '#8B5E4A', fontWeight: 500 }}>
                17:00 – 23:00 Uhr
              </p>
            </div>
          </div>
          </div>
        </FadeInOnScroll>

        {/* Divider */}
        <FadeInOnScroll delay={100}>
          <div 
            style={{ 
              borderTop: '1px solid rgba(212, 196, 168, 0.3)',
              paddingTop: '20px'
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center" style={{ gap: '12px' }}>
            <p 
              style={{ 
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                color: 'rgba(224, 224, 224, 0.4)',
                fontSize: '12px'
              }}
            >
              © {new Date().getFullYear()} San Marino. Alle Rechte vorbehalten.
            </p>
            <p 
              style={{ 
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                color: 'rgba(224, 224, 224, 0.4)',
                fontSize: '12px'
              }}
            >
              Made by Armaan Ghotra
            </p>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <p 
                style={{ 
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  color: 'rgba(224, 224, 224, 0.4)',
                  fontSize: '12px'
                }}
              >
                Gehobene indische Küche in Bonn
              </p>
              <span style={{ color: 'rgba(224, 224, 224, 0.2)' }}>|</span>
              <a
                href="/impressum"
                className="transition-colors hover:opacity-70"
                style={{ 
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  color: 'rgba(224, 224, 224, 0.4)',
                  fontSize: '12px',
                  textDecoration: 'none'
                }}
              >
                Impressum
              </a>
            </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </footer>
  );
}
