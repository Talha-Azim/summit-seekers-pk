const GoalsAchievedSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-secondary text-3xl md:text-5xl neon-text mb-4">
            Goals Achieved
          </h2>
          <p className="text-xl text-glow-subtle">
            Milestones that define our extraordinary journey
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="glass-card p-8 rounded-lg hover-glow text-center group">
            <div className="text-5xl md:text-6xl font-bold neon-text mb-4 group-hover:scale-110 transition-transform duration-300">
              10+
            </div>
            <div className="heading-secondary text-lg md:text-xl mb-2">Peaks Conquered</div>
            <div className="text-glow-subtle text-sm">
              From challenging ascents to breathtaking summits
            </div>
          </div>

          <div className="glass-card p-8 rounded-lg hover-glow text-center group">
            <div className="text-5xl md:text-6xl font-bold neon-text mb-4 group-hover:scale-110 transition-transform duration-300">
              5
            </div>
            <div className="heading-secondary text-lg md:text-xl mb-2">Years of Adventure</div>
            <div className="text-glow-subtle text-sm">
              Half a decade of exploration and discovery
            </div>
          </div>

          <div className="glass-card p-8 rounded-lg hover-glow text-center group">
            <div className="text-5xl md:text-6xl font-bold neon-text mb-4 group-hover:scale-110 transition-transform duration-300">
              ∞
            </div>
            <div className="heading-secondary text-lg md:text-xl mb-2">Memories Created</div>
            <div className="text-glow-subtle text-sm">
              Infinite moments captured and cherished forever
            </div>
          </div>
        </div>

        {/* Achievement Highlights */}
        <div className="mt-16 glass-card p-8 rounded-lg hover-glow animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <h3 className="heading-secondary text-2xl neon-text mb-6">Mission Accomplished</h3>
            <p className="text-glow-subtle max-w-2xl mx-auto leading-relaxed">
              Every peak conquered, every photograph captured, and every memory created 
              represents more than just an achievement—it's a testament to our unwavering 
              passion for exploration and our commitment to pushing beyond the ordinary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsAchievedSection;