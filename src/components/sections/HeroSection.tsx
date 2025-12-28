"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  // #region agent log
  useEffect(() => {
    const imagePath = '/images/FrontImage.jpg';
    
    const img = new Image();
    img.onload = () => {
      fetch('http://127.0.0.1:7245/ingest/7f9b9f17-3ca4-4837-871e-9332034987b5', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'HeroSection.tsx:9', message: 'Fixed path loaded successfully', data: { path: imagePath }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'post-fix', hypothesisId: 'VERIFY' }) }).catch(() => {});
    };
    img.onerror = () => {
      fetch('http://127.0.0.1:7245/ingest/7f9b9f17-3ca4-4837-871e-9332034987b5', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ location: 'HeroSection.tsx:13', message: 'Fixed path still failed', data: { path: imagePath }, timestamp: Date.now(), sessionId: 'debug-session', runId: 'post-fix', hypothesisId: 'VERIFY' }) }).catch(() => {});
    };
    img.src = imagePath;
  }, []);
  // #endregion

  return (
    <section className="min-h-screen" style={{ backgroundColor: '#282828' }}>
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Content */}
        <div 
          className="flex-1 lg:w-3/5 flex flex-col justify-center py-20 lg:py-24"
          style={{ marginLeft: '5%', paddingRight: '5%' }}
        >
          <div style={{ marginLeft: '24px', marginRight: '24px' }}>
            <h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
              style={{ 
                fontFamily: 'var(--font-playfair), Georgia, serif',
                color: '#f2d4b9',
                marginBottom: '48px'
              }}
            >
              Willkommen im San Marino – Ihr authentisches indisches Restaurant in Bonn
            </h1>

            <p 
              className="text-lg md:text-xl leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                color: '#f2d4b9',
                maxWidth: '650px',
                marginBottom: '56px'
              }}
            >
              Erleben Sie die faszinierende Welt der indischen Küche in einem stilvollen
              Ambiente, das Tradition und Moderne vereint. Im San Marino erwarten Sie
              authentische Aromen, herzliche Gastfreundschaft und eine kulinarische
              Reise durch die vielfältigen Regionen Indiens.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                variant="primary"
                href="https://www.google.com/maps/reserve/v/dine/c/9Bur0wIrbm8?source=pa&opi=89978449&hl=de-CH&gei=GopRadazNNPoi-gP3cqJaA&sourceurl=https://www.google.com/search?client%3Dsafari%26rls%3Den%26q%3DSan%2BMarino%2BBonn%2Bgoogle%26ie%3DUTF-8%26oe%3DUTF-8"
              >
                Tisch reservieren
              </Button>
              <Button variant="secondary" href="/images/Speisekarte.pdf">Speisekarte ansehen</Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-2/5 relative min-h-[500px] lg:min-h-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/FrontImage.jpg')`,
            }}
          >
            {/* Gradient overlay for better text contrast */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to right, rgba(40, 40, 40, 0.6), transparent)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
