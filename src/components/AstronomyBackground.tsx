import { useEffect, useState } from 'react';

const AstronomyBackground = () => {
  const [stars, setStars] = useState<Array<{ id: number; left: string; top: string; delay: string; duration: string; isMoving: boolean }>>([]);
  const [shootingStars, setShootingStars] = useState<Array<{ id: number; delay: string }>>([]);
  const [cityLights, setCityLights] = useState<Array<{ id: number; left: string; bottom: string; delay: string }>>([]);

  useEffect(() => {
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 200; i++) {
        starArray.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          delay: `${Math.random() * 5}s`,
          duration: `${3 + Math.random() * 4}s`,
          isMoving: Math.random() > 0.7,
        });
      }
      setStars(starArray);
    };

    const generateShootingStars = () => {
      const shootingArray = [];
      for (let i = 0; i < 3; i++) {
        shootingArray.push({
          id: i,
          delay: `${Math.random() * 10}s`,
        });
      }
      setShootingStars(shootingArray);
    };

    const generateCityLights = () => {
      const lightsArray = [];
      for (let i = 0; i < 20; i++) {
        lightsArray.push({
          id: i,
          left: `${Math.random() * 100}%`,
          bottom: `${15 + Math.random() * 10}%`,
          delay: `${Math.random() * 3}s`,
        });
      }
      setCityLights(lightsArray);
    };

    generateStars();
    generateShootingStars();
    generateCityLights();
  }, []);

  return (
    <>
      {/* Main astronomy background */}
      <div className="astronomy-bg-enhanced" />
      
      {/* Enhanced landscape silhouette */}
      <div className="landscape">
        <svg 
          className="absolute bottom-0 w-full h-full text-primary opacity-30"
          viewBox="0 0 1200 400"
          fill="currentColor"
          preserveAspectRatio="none"
        >
          {/* Mountain base */}
          <path d="M0,400 L0,200 L150,100 L300,150 L450,80 L600,120 L750,60 L900,100 L1050,40 L1200,90 L1200,400 Z" />
          
          {/* Enhanced snow caps on mountains */}
          <g fill="white" opacity="0.9">
            <path d="M130,100 L170,100 L150,75 Z" />
            <path d="M280,150 L320,150 L300,125 Z" />
            <path d="M430,80 L480,80 L450,55 Z" />
            <path d="M580,120 L620,120 L600,95 Z" />
            <path d="M730,60 L770,60 L750,35 Z" />
            <path d="M880,100 L920,100 L900,75 Z" />
            <path d="M1030,40 L1070,40 L1050,15 Z" />
            {/* Additional snow details */}
            <circle cx="150" cy="82" r="3" opacity="0.7" />
            <circle cx="300" cy="132" r="2" opacity="0.7" />
            <circle cx="450" cy="62" r="4" opacity="0.7" />
            <circle cx="600" cy="102" r="3" opacity="0.7" />
            <circle cx="750" cy="42" r="4" opacity="0.7" />
            <circle cx="900" cy="82" r="2" opacity="0.7" />
            <circle cx="1050" cy="22" r="3" opacity="0.7" />
          </g>
          
          {/* Trees silhouette */}
          <g opacity="0.6">
            <path d="M100,200 L100,170 L110,150 L90,150 Z" />
            <path d="M200,220 L200,180 L215,160 L185,160 Z" />
            <path d="M500,210 L500,175 L520,155 L480,155 Z" />
            <path d="M800,230 L800,190 L820,170 L780,170 Z" />
            <path d="M1000,200 L1000,170 L1015,150 L985,150 Z" />
          </g>
          
          {/* Houses/buildings */}
          <g opacity="0.7">
            <rect x="120" y="180" width="8" height="20" />
            <rect x="180" y="190" width="6" height="15" />
            <rect x="250" y="185" width="10" height="18" />
            <rect x="420" y="175" width="8" height="22" />
            <rect x="520" y="180" width="7" height="20" />
            <rect x="680" y="185" width="9" height="18" />
            <rect x="820" y="190" width="6" height="15" />
            <rect x="920" y="185" width="8" height="20" />
          </g>
          
          {/* Lake reflection */}
          <ellipse cx="600" cy="350" rx="400" ry="30" opacity="0.3" />
        </svg>
      </div>

      {/* City lights */}
      <div className="city-lights">
        {cityLights.map((light) => (
          <div
            key={light.id}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            style={{
              left: light.left,
              bottom: light.bottom,
              animation: `cityLights 2s ease-in-out infinite`,
              animationDelay: light.delay,
              boxShadow: '0 0 3px #ffff00',
            }}
          />
        ))}
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

      {/* Shooting stars */}
      <div className="shooting-stars">
        {shootingStars.map((shootingStar) => (
          <div
            key={shootingStar.id}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: '20%',
              left: '0%',
              animation: `shootingStar 3s linear infinite`,
              animationDelay: shootingStar.delay,
              boxShadow: '0 0 6px white, 2px 0 8px white',
            }}
          />
        ))}
      </div>

      {/* Floating particles */}
      <div className="particles">
        {Array.from({ length: 40 }).map((_, i) => (
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