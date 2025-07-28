import { useState, useEffect, useRef } from 'react';

interface Conquest {
  id: number;
  title: string;
  description: string;
  image: string;
}

const conquests: Conquest[] = [
  {
    id: 1,
    title: "K2 Base Camp",
    description: "An epic journey to the base of the world's second-highest peak, capturing the raw power of the Karakoram range.",
    image: "/lovable-uploads/08a42fc8-57ce-44e8-97a7-7820ca1eab9f.png"
  },
  {
    id: 2,
    title: "Nanga Parbat Views",
    description: "Witnessing the 'Killer Mountain' in all its glory, with dramatic landscapes that test both courage and camera skills.",
    image: "/lovable-uploads/1fc749f7-2e9d-4976-8e6f-86f5790afcb0.png"
  },
  {
    id: 3,
    title: "Fairy Meadows",
    description: "A mystical plateau offering unparalleled views of Nanga Parbat, where earth meets heaven in perfect harmony.",
    image: "/lovable-uploads/4fe01285-bf4e-45cb-8b53-0dabbcd39ee8.png"
  },
  {
    id: 4,
    title: "Hunza Valley",
    description: "The crown jewel of northern Pakistan, where ancient cultures blend with stunning mountain vistas and glacial rivers.",
    image: "/lovable-uploads/7a5b4d0f-7d35-4fdf-b442-bb293fcb46b0.png"
  },
  {
    id: 5,
    title: "Skardu Adventures",
    description: "Gateway to the giants, this region offers access to multiple 8000m peaks and endless photographic opportunities.",
    image: "/lovable-uploads/c93eb4d3-868f-44c0-aa61-0ee60b5922cc.png"
  },
  {
    id: 6,
    title: "Deosai Plains",
    description: "The 'Land of Giants' - a high-altitude plateau where wildflowers create carpets of color against mountain backdrops.",
    image: "/lovable-uploads/e2c2f0a9-69d2-43e6-83b6-5c7136f0e03c.png"
  }
];

const EnhancedGallerySection = () => {
  const [rotation, setRotation] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isUserControlling, setIsUserControlling] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; opacity: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!isUserControlling && hoveredCard === null) {
        setRotation(prev => prev + 0.5);
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isUserControlling, hoveredCard]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current && hoveredCard === null) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      const angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      setRotation(angle);
      setIsUserControlling(true);
    }
  };

  const handleMouseLeave = () => {
    setIsUserControlling(false);
  };

  const createParticleEffect = (cardId: number) => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
      opacity: 1
    }));
    setParticles(newParticles);

    // Animate particles
    setTimeout(() => {
      setParticles([]);
    }, 1000);
  };

  const handleCardHover = (cardId: number) => {
    setHoveredCard(cardId);
    createParticleEffect(cardId);
  };

  const getCardPosition = (index: number) => {
    const angle = (rotation + (index * 60)) * (Math.PI / 180);
    const radius = 180;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y, angle: rotation + (index * 60) };
  };

  return (
    <section id="gallery" className="py-20 px-4 min-h-screen flex items-center">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-primary text-4xl md:text-6xl neon-text mb-4">
            Epic Summit Conquests
          </h2>
          <p className="text-xl text-glow-subtle max-w-2xl mx-auto">
            Journey through our most extraordinary adventures and breathtaking captures
          </p>
        </div>

        {/* Circular Gallery */}
        <div 
          ref={containerRef}
          className="relative w-full h-[600px] flex items-center justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Particle Effects */}
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-primary rounded-full pointer-events-none"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(${particle.x}px, ${particle.y}px)`,
                opacity: particle.opacity,
                boxShadow: '0 0 4px hsl(var(--neon-cyan))',
                animation: 'particleFloat 1s ease-out forwards'
              }}
            />
          ))}

          {conquests.map((conquest, index) => {
            const position = getCardPosition(index);
            const isHovered = hoveredCard === conquest.id;

            return (
              <div
                key={conquest.id}
                className={`absolute w-64 h-80 transition-all duration-500 cursor-pointer group ${
                  isHovered ? 'z-20' : 'z-10'
                }`}
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) ${
                    isHovered ? 'scale(1.1) rotateY(180deg)' : 'scale(1)'
                  }`,
                  transformStyle: 'preserve-3d'
                }}
                onMouseEnter={() => handleCardHover(conquest.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Front */}
                <div 
                  className={`absolute inset-0 glass-card rounded-lg overflow-hidden backface-hidden ${
                    isHovered ? 'opacity-0' : 'opacity-100'
                  } transition-opacity duration-300`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="relative h-full">
                    <img 
                      src={conquest.image} 
                      alt={conquest.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="heading-secondary text-lg neon-text mb-2">{conquest.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Card Back */}
                <div 
                  className={`absolute inset-0 glass-card rounded-lg p-6 flex flex-col justify-center ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  } transition-opacity duration-300`}
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <h3 className="heading-secondary text-xl neon-text mb-4">{conquest.title}</h3>
                  <p className="text-glow-subtle text-sm leading-relaxed">{conquest.description}</p>
                </div>
              </div>
            );
          })}

          {/* Center Indicator */}
          <div className="absolute w-4 h-4 bg-primary rounded-full neon-glow animate-pulse" />
        </div>

        {/* Instructions */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <p className="text-glow-subtle">
            Move your cursor to control rotation • Hover over cards to explore details
          </p>
        </div>
      </div>

    </section>
  );
};

export default EnhancedGallerySection;