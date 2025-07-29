import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => setTypingComplete(true), 3000);
    return () => clearTimeout(timer);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-dark via-bg-secondary to-bg-dark parallax" style={{
      transform: `translateY(${scrollY * -0.5}px)`
    }} />
      
      {/* Floating Particles */}
      <div className="particles">
        {Array.from({
        length: 20
      }).map((_, i) => <div key={i} className="particle" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 20}s`,
        animationDuration: `${15 + Math.random() * 10}s`
      }} />)}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Futuristic geometric animation */}
        <div className="mb-8 flex justify-center space-x-8">
          <div className="w-16 h-16 border-2 border-primary rounded-lg animate-float neon-glow" style={{
          animationDelay: '0s',
          transform: 'rotate(45deg)'
        }}></div>
          <div className="w-12 h-12 border-2 border-accent rounded-full animate-float neon-glow" style={{
          animationDelay: '0.5s'
        }}></div>
          
        </div>

        {/* Hero Title with Typing Effect */}
        <h1 className="heading-primary text-4xl md:text-6xl lg:text-7xl mb-6 neon-text">
          <span className={`inline-block overflow-hidden whitespace-nowrap ${!typingComplete ? 'animate-typing' : ''}`}>
            SUMMIT SEEKERS
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-paragraph mb-8 animate-slide-up max-w-2xl mx-auto" style={{
        animationDelay: '0.5s'
      }}>
          Conquering peaks, capturing memories, and seeking the extraordinary in every ascent
        </p>

        {/* CTA Button */}
        <div className="animate-slide-up" style={{
        animationDelay: '1s'
      }}>
          <Button size="lg" className="px-8 py-4 text-lg font-semibold bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground neon-glow hover-scale animate-neon-pulse btn-simple" onClick={() => {
          document.getElementById('gallery')?.scrollIntoView({
            behavior: 'smooth'
          });
        }}>
            Begin the Ascent
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* SVG Mountain Silhouette */}
      <svg className="absolute bottom-0 w-full h-32 text-bg-card opacity-50" viewBox="0 0 1200 200" fill="currentColor">
        <path d="M0,200 L0,100 L200,50 L400,80 L600,20 L800,60 L1000,30 L1200,70 L1200,200 Z" />
      </svg>
    </section>;
};
export default HeroSection;