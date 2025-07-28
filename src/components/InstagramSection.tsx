import { Button } from '@/components/ui/button';
import { Instagram, ExternalLink } from 'lucide-react';

const InstagramSection = () => {
  return (
    <section className="py-20 px-4 bg-bg-secondary">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-secondary text-3xl md:text-5xl neon-text mb-4">
            Follow the Ascent
          </h2>
          <p className="text-xl text-muted">
            Join our community and experience the journey through our lens
          </p>
        </div>

        {/* Instagram Feed Card */}
        <div className="glass-card p-8 md:p-12 rounded-lg hover-glow animate-slide-up text-center">
          <div className="mb-8">
            <Instagram className="w-16 h-16 mx-auto text-primary mb-4 animate-glow" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Connect With Us on Instagram
            </h3>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Get behind-the-scenes glimpses of our adventures, stunning mountain photography, 
              and real-time updates from our expeditions. Every post tells a story of courage, 
              beauty, and the unbreakable bond between adventurers and the mountains they love.
            </p>
          </div>

          {/* Instagram Preview Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className="aspect-square bg-gradient-to-br from-bg-card to-bg-dark rounded-lg border border-primary/20 flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover-scale"
              >
                <Instagram className="w-6 h-6 text-primary/60" />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            size="lg"
            className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-accent hover:to-primary neon-glow hover-scale ripple group"
            onClick={() => window.open('https://instagram.com', '_blank')}
          >
            Join the Ascent
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>

          {/* QR Code Placeholder */}
          <div className="mt-8 pt-8 border-t border-primary/20">
            <p className="text-sm text-muted mb-4">Scan to follow us instantly</p>
            <div className="w-32 h-32 mx-auto border-2 border-primary/30 rounded-lg flex items-center justify-center bg-bg-dark hover-glow">
              <img 
                src="/lovable-uploads/e2c2f0a9-69d2-43e6-83b6-5c7136f0e03c.png" 
                alt="QR Code" 
                className="w-24 h-24 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;