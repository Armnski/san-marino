"use client";

import { useState } from "react";
import FadeInOnScroll from "@/components/ui/FadeInOnScroll";

const menuItems = [
  {
    title: "Butter Chicken",
    description:
      "Cremig, würzig und ein absoluter Klassiker, der bei unseren Gästen besonders beliebt ist. Zartes Hühnerfleisch in samtiger Tomaten-Sahne-Sauce mit feinen Gewürzen.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80",
  },
  {
    title: "Tandoori-Gerichte",
    description:
      "Saftig gegrilltes Huhn und Lamm, veredelt mit traditionellen Gewürzen. Die Marinade durchdringt das Fleisch und verleiht ihm sein unverwechselbares Aroma.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
  },
  {
    title: "Vegetarische Köstlichkeiten",
    description:
      "Von Dal über Palak Paneer bis zu vielfältigen Gemüse-Currys – frisch, gesund und voller Geschmack. Perfekt für Vegetarier und alle, die leichte Küche lieben.",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
  },
  {
    title: "Mango Lassi",
    description:
      "Genießen Sie unser hausgemachtes Mango Lassi – erfrischend, cremig und fein abgestimmt. Der ideale Begleiter oder Abschluss für ein ausgewogenes indisches Geschmackserlebnis.",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Arrow icons
const ArrowLeftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default function MenuSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? menuItems.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === menuItems.length - 1 ? 0 : prev + 1));
  };

  const getCardIndex = (offset: number) => {
    return (currentIndex + offset + menuItems.length) % menuItems.length;
  };

  return (
    <section style={{ backgroundColor: '#282828' }}>
      <div className="flex flex-col lg:flex-row">
        {/* Left Content */}
        <div 
          className="lg:w-1/2"
          style={{ 
            backgroundColor: '#363636',
            paddingTop: '120px',
            paddingBottom: '120px',
            paddingLeft: '5%',
            paddingRight: '5%',
            width: '100%'
          }}
        >
          <div style={{ paddingLeft: '24px', paddingRight: '24px' }}>
            <FadeInOnScroll delay={0}>
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl leading-tight"
                style={{ 
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  color: '#F3CFB5',
                  marginBottom: '48px'
                }}
              >
                Unsere Spezialitäten: Empfehlungen und Highlights
              </h2>
            </FadeInOnScroll>

            <FadeInOnScroll delay={100}>
              <p 
                className="text-lg leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  color: '#F3CFB5',
                  marginBottom: '64px'
                }}
              >
                Entdecken Sie die kulinarischen Schätze Indiens, sorgfältig
                zusammengestellt von unseren erfahrenen Köchen. Jedes Gericht wird mit
                Liebe zum Detail und authentischen Gewürzen zubereitet.
              </p>
            </FadeInOnScroll>

            {/* Carousel */}
            <FadeInOnScroll delay={200}>
              <div style={{ position: 'relative' }}>
              {/* Cards Container */}
              <div 
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  overflow: 'hidden',
                  padding: '20px 0'
                }}
              >
                {/* Previous Card (Peek) */}
                <div
                  style={{
                    flex: '0 0 60px',
                    height: '400px',
                    backgroundColor: '#282828',
                    borderRadius: '16px',
                    opacity: 0.4,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url('${menuItems[getCardIndex(-1)].image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                </div>

                {/* Current Card */}
                <div
                  style={{
                    flex: '0 0 280px',
                    height: '450px',
                    backgroundColor: '#282828',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      width: '100%',
                      height: '200px',
                      backgroundImage: `url('${menuItems[currentIndex].image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  {/* Content */}
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-playfair), Georgia, serif',
                        color: '#F3CFB5',
                        fontSize: '22px',
                        marginBottom: '16px'
                      }}
                    >
                      {menuItems[currentIndex].title}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        color: 'rgba(243, 207, 181, 0.8)',
                        fontSize: '14px',
                        lineHeight: '1.6',
                        flex: 1
                      }}
                    >
                      {menuItems[currentIndex].description}
                    </p>
                  </div>
                </div>

                {/* Next Card (Peek) */}
                <div
                  style={{
                    flex: '0 0 60px',
                    height: '400px',
                    backgroundColor: '#282828',
                    borderRadius: '16px',
                    opacity: 0.4,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url('${menuItems[getCardIndex(1)].image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                </div>
              </div>

              {/* Navigation Arrows */}
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: '24px',
                  marginTop: '32px'
                }}
              >
                <button
                  onClick={goToPrevious}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#7E402B',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFAFD',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#8B5E4A';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#7E402B';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <ArrowLeftIcon />
                </button>
                <button
                  onClick={goToNext}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: '#7E402B',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFAFD',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#8B5E4A';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#7E402B';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <ArrowRightIcon />
                </button>
              </div>

              {/* Dots Indicator */}
              <div 
                style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  gap: '12px',
                  marginTop: '24px'
                }}
              >
                {menuItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    style={{
                      width: index === currentIndex ? '24px' : '10px',
                      height: '10px',
                      borderRadius: '5px',
                      backgroundColor: index === currentIndex ? '#F3CFB5' : 'rgba(243, 207, 181, 0.3)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 relative min-h-[500px] lg:min-h-[900px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1200&q=80')`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
