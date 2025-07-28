import { useState } from 'react';

const conquests = [
  {
    id: 1,
    title: "Musa ka Musala",
    description: "Epic journey to Pakistan's second highest peak",
    image: "/lovable-uploads/4fe01285-bf4e-45cb-8b53-0dabbcd39ee8.png"
  },
  {
    id: 2,
    title: "Dudipatsar Lake",
    description: "Crystal clear waters surrounded by towering peaks",
    image: "/lovable-uploads/7a5b4d0f-7d35-4fdf-b442-bb293fcb46b0.png"
  },
  {
    id: 3,
    title: "Dagribangla",
    description: "Remote wilderness adventure in untouched valleys",
    image: "/lovable-uploads/1fc749f7-2e9d-4976-8e6f-86f5790afcb0.png"
  },
  {
    id: 4,
    title: "Chitral to Kumrat",
    description: "Scenic traverse through diverse mountain landscapes",
    image: "/lovable-uploads/c93eb4d3-868f-44c0-aa61-0ee60b5922cc.png"
  },
  {
    id: 5,
    title: "Skardu Trip",
    description: "Gateway to the world's highest mountains",
    image: "/lovable-uploads/08a42fc8-57ce-44e8-97a7-7820ca1eab9f.png"
  },
  {
    id: 6,
    title: "Makra Peak Trip",
    description: "Challenging ascent with breathtaking summit views",
    image: "/lovable-uploads/1fc749f7-2e9d-4976-8e6f-86f5790afcb0.png"
  }
];

const GallerySection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    // Ripple effect is handled by CSS
    console.log(`Clicked on conquest ${id}`);
  };

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-secondary text-3xl md:text-5xl neon-text mb-4">
            Epic Summit Conquests
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Journey through our most incredible mountain adventures and breathtaking summit achievements
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conquests.map((conquest, index) => (
            <div
              key={conquest.id}
              className={`group glass-card rounded-lg overflow-hidden hover-glow hover-scale ripple cursor-pointer transition-all duration-500 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(conquest.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(conquest.id)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={conquest.image}
                  alt={conquest.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredCard === conquest.id ? 'opacity-70' : 'opacity-40'
                }`} />
                
                {/* Hover Effects */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 transition-opacity duration-300 ${
                  hoveredCard === conquest.id ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 transition-all duration-300 ${
                  hoveredCard === conquest.id ? 'neon-text' : 'text-foreground'
                }`}>
                  {conquest.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {conquest.description}
                </p>
              </div>

              {/* Neon Border Effect */}
              <div className={`absolute inset-0 border-2 border-transparent transition-all duration-300 rounded-lg ${
                hoveredCard === conquest.id ? 'border-primary shadow-[0_0_20px_hsl(var(--primary))]' : ''
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;