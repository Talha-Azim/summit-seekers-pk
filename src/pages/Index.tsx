import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import JourneySection from '@/components/JourneySection';
import AboutSection from '@/components/AboutSection';
import InstagramSection from '@/components/InstagramSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <GallerySection />
      <JourneySection />
      <AboutSection />
      <InstagramSection />
    </div>
  );
};

export default Index;
