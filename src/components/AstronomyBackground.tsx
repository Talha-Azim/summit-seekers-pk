import { useEffect, useState } from 'react';

const AstronomyBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; delay: string; duration: string; isMoving: boolean }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 150; i++) {
        starArray.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          delay: `${Math.random() * 5}s`,
          duration: `${3 + Math.random() * 4}s`,
          isMoving: Math.random() > 0.7, // 30% of stars will move in circular motion
        });
      }
      setStars(starArray);
    };

    generateStars();
  }, []);

  return (
    <>
      {/* Main astronomy background */}
      <div className="astronomy-bg" />
      
      {/* Landscape silhouette */}
      <div className="landscape">
        <svg 
          className="absolute bottom-0 w-full h-full text-primary opacity-20"
          viewBox="0 0 1200 400"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          {/* Mountains */}
          <path d="M0,400 L0,200 L150,100 L300,150 L450,80 L600,120 L750,60 L900,100 L1050,40 L1200,90 L1200,400 Z" />
          {/* Trees silhouette */}
          <g opacity="0.6">
            <path d="M100,200 L100,170 L110,150 L90,150 Z" />
            <path d="M200,220 L200,180 L215,160 L185,160 Z" />
            <path d="M500,210 L500,175 L520,155 L480,155 Z" />
            <path d="M800,230 L800,190 L820,170 L780,170 Z" />
            <path d="M1000,200 L1000,170 L1015,150 L985,150 Z" />
          </g>
          {/* Lake reflection */}
          <ellipse cx="600" cy="350" rx="400" ry="30" opacity="0.3" />
        </svg>
      </div>

      {/* Stars */}
      <div className="stars">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`star ${star.isMoving ? 'moving' : ''}`}
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="particles">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 25}s`,
              animationDuration: `${20 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default AstronomyBackground;