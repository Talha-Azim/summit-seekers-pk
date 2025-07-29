import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const adventures = [
  {
    id: 1,
    title: "Musa ka Musala",
    description: "Epic journey to Pakistan's second highest peak",
    image: "/lovable-uploads/4fe01285-bf4e-45cb-8b53-0dabbcd39ee8.png",
    hashtags: "#MusaKaMusala #PakistanPeaks #Adventure"
  },
  {
    id: 2,
    title: "Dudipatsar Lake",
    description: "Crystal clear waters surrounded by towering peaks",
    image: "/lovable-uploads/7a5b4d0f-7d35-4fdf-b442-bb293fcb46b0.png",
    hashtags: "#DudipatsarLake #CrystalWaters #MountainLakes"
  },
  {
    id: 3,
    title: "Dagribangla",
    description: "Remote wilderness adventure in untouched valleys",
    image: "/lovable-uploads/1fc749f7-2e9d-4976-8e6f-86f5790afcb0.png",
    hashtags: "#Dagribangla #Wilderness #UntouchedValleys"
  },
  {
    id: 4,
    title: "Chitral to Kumrat",
    description: "Scenic traverse through diverse mountain landscapes",
    image: "/lovable-uploads/c93eb4d3-868f-44c0-aa61-0ee60b5922cc.png",
    hashtags: "#ChitralKumrat #ScenicTraverse #MountainLandscapes"
  },
  {
    id: 5,
    title: "Skardu Trip",
    description: "Gateway to the world's highest mountains",
    image: "/lovable-uploads/08a42fc8-57ce-44e8-97a7-7820ca1eab9f.png",
    hashtags: "#SkarduTrip #Gateway #HighestMountains"
  },
  {
    id: 6,
    title: "Makra Peak Trip",
    description: "Challenging ascent with breathtaking summit views",
    image: "/lovable-uploads/1fc749f7-2e9d-4976-8e6f-86f5790afcb0.png",
    hashtags: "#MakraPeak #ChallengingAscent #SummitViews"
  }
];

const EnhancedInstagramPosts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1; // Mobile: 1 card
      if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
      return 3; // Desktop: 3 cards
    }
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoSliding) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        const maxSlide = adventures.length - visibleCards;
        return prev >= maxSlide ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoSliding, visibleCards]);

  const nextSlide = () => {
    const maxSlide = adventures.length - visibleCards;
    setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
    setIsAutoSliding(false);
    setTimeout(() => setIsAutoSliding(true), 8000);
  };

  const prevSlide = () => {
    const maxSlide = adventures.length - visibleCards;
    setCurrentSlide(prev => prev <= 0 ? maxSlide : prev - 1);
    setIsAutoSliding(false);
    setTimeout(() => setIsAutoSliding(true), 8000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="py-20 px-4 bg-bg-secondary">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-secondary text-3xl md:text-5xl neon-text mb-4">
            Latest Adventures
          </h2>
          <p className="text-xl text-glow-subtle max-w-2xl mx-auto">
            Follow our journey through breathtaking landscapes and epic mountaineering adventures
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative overflow-hidden">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-bg-dark/80 backdrop-blur-sm rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-glow hover-element"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-bg-dark/80 backdrop-blur-sm rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-glow hover-element"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / visibleCards)}%)`
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsAutoSliding(false)}
            onMouseLeave={() => setIsAutoSliding(true)}
          >
            {adventures.map((adventure, index) => (
              <div
                key={adventure.id}
                className={`flex-shrink-0 px-3 transition-all duration-300`}
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="glass-card rounded-lg overflow-hidden hover-element group h-96">
                  {/* Image Container */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={adventure.image}
                      alt={adventure.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="heading-secondary text-lg neon-text mb-2 group-hover:scale-105 transition-transform duration-300">
                      {adventure.title}
                    </h3>
                    <p className="text-glow-subtle text-sm mb-3 leading-relaxed">
                      {adventure.description}
                    </p>
                    <div className="text-xs text-primary opacity-70">
                      {adventure.hashtags}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: adventures.length - visibleCards + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoSliding(false);
                  setTimeout(() => setIsAutoSliding(true), 8000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover-element ${
                  index === currentSlide
                    ? 'bg-primary shadow-[0_0_10px_hsl(var(--primary))]'
                    : 'bg-muted hover:bg-primary/60'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 w-full bg-bg-dark rounded-full h-1">
            <div
              className="bg-primary h-1 rounded-full transition-all duration-300 shadow-[0_0_10px_hsl(var(--primary))]"
              style={{
                width: `${((currentSlide + 1) / (adventures.length - visibleCards + 1)) * 100}%`
              }}
            />
          </div>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden text-center mt-6 text-muted text-sm">
          Swipe left or right to explore adventures
        </div>
      </div>
    </section>
  );
};

export default EnhancedInstagramPosts;