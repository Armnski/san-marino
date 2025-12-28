import Button from "@/components/ui/Button";

export default function HeroSection() {
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
              <Button variant="primary">Tisch reservieren</Button>
              <Button variant="secondary">Speisekarte ansehen</Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-2/5 relative min-h-[500px] lg:min-h-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80')`,
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
