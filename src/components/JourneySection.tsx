import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const journeyCards = [{
  id: 1,
  title: "The Beginning",
  content: "Since day one, this journey has been more than just reaching summits. It's about discovering the untold stories that mountains whisper to those brave enough to listen. Every step upward is a step deeper into understanding ourselves and the magnificent world around us."
}, {
  id: 2,
  title: "The Adventure",
  content: "From exploring hidden trails to standing beneath towering peaks, we've learned that the real treasure isn't just the destination. It's the bonds forged in the thin air, the courage found in the face of adversity, and the memories carved into our hearts like ancient petroglyphs."
}, {
  id: 3,
  title: "The Philosophy",
  content: "SummitSeekers is built on the idea that the trail is more than a path—it's a teacher. Each mountain has its own personality, its own lessons to impart. We don't just climb; we commune with these ancient giants, respecting their wisdom and power."
}];
const JourneySection = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isAutoScrolling) return;
    const interval = setInterval(() => {
      setCurrentCard(prev => (prev + 1) % journeyCards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoScrolling]);
  const nextCard = () => {
    setCurrentCard(prev => (prev + 1) % journeyCards.length);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };
  const prevCard = () => {
    setCurrentCard(prev => (prev - 1 + journeyCards.length) % journeyCards.length);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };
  const goToCard = (index: number) => {
    setCurrentCard(index);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
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
      nextCard();
    } else if (isRightSwipe) {
      prevCard();
    }
  };
  return <section className="py-20 px-4 bg-bg-secondary">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-secondary text-3xl md:text-5xl neon-text mb-4">
            Our Journey So Far
          </h2>
          <p className="max-w-2xl mx-auto text-[#00ffff] text-base text-center">
            Follow our evolution from adventurous beginners to seasoned mountain explorers
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button onClick={prevCard} className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-bg-dark/80 backdrop-blur-sm rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-glow hover-scale">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button onClick={nextCard} className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-bg-dark/80 backdrop-blur-sm rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-glow hover-scale">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Container */}
          <div 
            ref={carouselRef} 
            className="overflow-hidden rounded-lg" 
            onMouseEnter={() => setIsAutoScrolling(false)} 
            onMouseLeave={() => setIsAutoScrolling(true)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${currentCard * 100}%)`
          }}>
              {journeyCards.map((card, index) => <div key={card.id} className="w-full flex-shrink-0 px-8">
                  <div className={`glass-card p-8 md:p-12 rounded-lg transition-all duration-500 hover-glow ${index === currentCard ? 'scale-105 shadow-[0_0_30px_hsl(var(--primary))]' : ''}`}>
                    <h3 className="heading-secondary text-2xl md:text-3xl neon-text mb-6">
                      {card.title}
                    </h3>
                    <p className="leading-relaxed text-[#00ffff] font-extralight text-base text-left">
                      {card.content}
                    </p>
                  </div>
                </div>)}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-4">
            {journeyCards.map((_, index) => <button key={index} onClick={() => goToCard(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentCard ? 'bg-primary shadow-[0_0_10px_hsl(var(--primary))]' : 'bg-muted hover:bg-primary/60'}`} />)}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 w-full bg-bg-dark rounded-full h-1">
            <div className="bg-primary h-1 rounded-full transition-all duration-300 shadow-[0_0_10px_hsl(var(--primary))]" style={{
            width: `${(currentCard + 1) / journeyCards.length * 100}%`
          }} />
          </div>
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden text-center mt-6 text-muted text-sm">
          Swipe left or right to explore our journey
        </div>
      </div>
    </section>;
};
export default JourneySection;