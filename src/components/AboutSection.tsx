const AboutSection = () => {
  return <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-secondary text-3xl md:text-5xl neon-text mb-4">
            About Us
          </h2>
          <p className="text-xl text-muted">
            Passionate adventurers on a mission to explore the world's highest peaks
          </p>
        </div>

        {/* About Content */}
        <div className="glass-card p-8 md:p-12 rounded-lg hover-glow animate-fade-in">
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed mb-6 text-muted">
              From 2020 to 2025, we've embarked on countless journeys into Pakistan's most remote and 
              breathtaking mountain regions. What started as a passion for photography and adventure has 
              evolved into something much deeper—a profound connection with the wilderness that defines us.
            </p>
            
            <p className="text-lg leading-relaxed mb-6 text-muted">
              Our expeditions aren't just about reaching summits; they're about capturing the raw beauty 
              of untouched landscapes, the camaraderie found around a crackling bonfire under star-filled 
              skies, and the transformative power of pushing beyond our comfort zones. Every night spent 
              in remote valleys, every sunrise witnessed from high-altitude camps, adds another chapter 
              to our collective story.
            </p>
            
            <p className="text-lg leading-relaxed text-muted">
              Through night photography sessions that stretch until dawn, we've learned to see the mountains 
              in their most mystical form. The dance of moonlight on snow-capped peaks, the ethereal glow 
              of distant galaxies reflected in crystal-clear lakes, and the profound silence that only 
              exists at altitude—these moments have shaped not just our photography, but our souls.
            </p>
          </div>

          {/* Stats or Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary/20">
            <div className="text-center">
              <div className="text-3xl font-bold neon-text mb-2">10+</div>
              <div className="text-muted">Peaks Conquered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold neon-text mb-2">5</div>
              <div className="text-muted">Years of Adventure</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold neon-text mb-2">∞</div>
              <div className="text-muted">Memories Created</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;