import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

const InstagramSection = () => {
  return (
    <section className="py-20 px-4 bg-bg-secondary">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-secondary text-3xl md:text-5xl neon-text mb-4">
            Connect with us on social media
          </h2>
            <p className="text-xl text-glow-subtle">
              Follow our adventures across platforms and join our growing community
            </p>
        </div>

        {/* Social Media Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Instagram Section */}
          <div className="glass-card p-6 md:p-8 rounded-lg hover-glow animate-slide-up text-center">
            <div className="mb-6">
              <Instagram className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Instagram
              </h3>
              <p className="text-base text-glow-subtle leading-relaxed mb-6">
                Behind-the-scenes glimpses and stunning mountain photography.
              </p>
            </div>

            {/* Instagram Preview Grid - Top 3 */}
            <div className="grid grid-cols-3 gap-3 mb-6 max-w-sm mx-auto">
              {[1, 2, 3].map((item) => (
                <div 
                  key={item} 
                  className="aspect-square bg-gradient-to-br from-bg-card to-bg-dark rounded-lg border border-primary/20 flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover-scale cursor-pointer btn-simple"
                  onClick={() => window.open('https://www.instagram.com/summit.seekers.pk/profilecard/?igsh=MW43bWsxNnh5cWNjaA==', '_blank')}
                >
                  <Instagram className="w-5 h-5 text-primary/60" />
                </div>
              ))}
            </div>

            {/* Instagram CTA Button */}
            <Button 
              size="default"
              className="px-6 py-3 text-base font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-accent hover:to-primary neon-glow hover-scale btn-simple group mb-6"
              onClick={() => window.open('https://www.instagram.com/summit.seekers.pk/profilecard/?igsh=MW43bWsxNnh5cWNjaA==', '_blank')}
            >
              Follow Instagram
              <Instagram className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" />
            </Button>

            {/* Instagram QR Code */}
            <div className="pt-6 border-t border-primary/20">
              <p className="text-sm text-glow-subtle mb-4">Instagram QR</p>
              <div className="w-24 h-24 mx-auto border-2 border-primary/30 rounded-lg flex items-center justify-center bg-bg-dark hover-glow">
                <img 
                  src="/lovable-uploads/e2c2f0a9-69d2-43e6-83b6-5c7136f0e03c.png" 
                  alt="Instagram QR Code" 
                  className="w-20 h-20 rounded"
                />
              </div>
            </div>
          </div>

          {/* TikTok Section */}
          <div className="glass-card p-6 md:p-8 rounded-lg hover-glow animate-slide-up text-center">
            <div className="mb-6">
              <svg className="w-12 h-12 mx-auto text-primary mb-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.849-1.228-1.982-1.228-3.338h-2.926v11.916c0 2.048-1.637 3.732-3.685 3.732-1.998 0-3.732-1.637-3.732-3.732s1.637-3.732 3.732-3.732c.443 0 .849.074 1.228.222v-2.926c-.379-.074-.786-.111-1.228-.111C5.562 6.37 2 9.932 2 14.296s3.562 7.926 7.926 7.926 7.926-3.562 7.926-7.926V9.194a8.88 8.88 0 005.148 1.637V8.055c-1.081 0-2.048-.443-2.679-1.228z"/>
              </svg>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                TikTok
              </h3>
              <p className="text-base text-glow-subtle leading-relaxed mb-6">
                Quick adventure moments and mountain stories.
              </p>
            </div>

            {/* TikTok Preview Grid */}
            <div className="grid grid-cols-3 gap-3 mb-6 max-w-sm mx-auto">
              {[1, 2, 3].map((item) => (
                <div 
                  key={item} 
                  className="aspect-square bg-gradient-to-br from-bg-card to-bg-dark rounded-lg border border-primary/20 flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover-scale cursor-pointer btn-simple"
                  onClick={() => window.open('https://www.tiktok.com/@summit.seekers.pk?_t=ZT-8yXMyrciaH0&_r=1', '_blank')}
                >
                  <svg className="w-5 h-5 text-primary/60" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.849-1.228-1.982-1.228-3.338h-2.926v11.916c0 2.048-1.637 3.732-3.685 3.732-1.998 0-3.732-1.637-3.732-3.732s1.637-3.732 3.732-3.732c.443 0 .849.074 1.228.222v-2.926c-.379-.074-.786-.111-1.228-.111C5.562 6.37 2 9.932 2 14.296s3.562 7.926 7.926 7.926 7.926-3.562 7.926-7.926V9.194a8.88 8.88 0 005.148 1.637V8.055c-1.081 0-2.048-.443-2.679-1.228z"/>
                  </svg>
                </div>
              ))}
            </div>

            {/* TikTok CTA Button */}
            <Button 
              size="default"
              className="px-6 py-3 text-base font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-accent hover:to-primary neon-glow hover-scale btn-simple group mb-6"
              onClick={() => window.open('https://www.tiktok.com/@summit.seekers.pk?_t=ZT-8yXMyrciaH0&_r=1', '_blank')}
            >
              Follow TikTok
              <svg className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.849-1.228-1.982-1.228-3.338h-2.926v11.916c0 2.048-1.637 3.732-3.685 3.732-1.998 0-3.732-1.637-3.732-3.732s1.637-3.732 3.732-3.732c.443 0 .849.074 1.228.222v-2.926c-.379-.074-.786-.111-1.228-.111C5.562 6.37 2 9.932 2 14.296s3.562 7.926 7.926 7.926 7.926-3.562 7.926-7.926V9.194a8.88 8.88 0 005.148 1.637V8.055c-1.081 0-2.048-.443-2.679-1.228z"/>
              </svg>
            </Button>

            {/* TikTok QR Code */}
            <div className="pt-6 border-t border-primary/20">
              <p className="text-sm text-glow-subtle mb-4">TikTok QR</p>
              <div className="w-24 h-24 mx-auto border-2 border-primary/30 rounded-lg flex items-center justify-center bg-bg-dark hover-glow">
                <img 
                  src="/lovable-uploads/fa10e80a-3ce2-42c5-a74c-4146dac60113.png" 
                  alt="TikTok QR Code" 
                  className="w-20 h-20 rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;