import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import EnhancedGallerySection from '@/components/EnhancedGallerySection';
import JourneySection from '@/components/JourneySection';
import GoalsAchievedSection from '@/components/GoalsAchievedSection';
import EnhancedInstagramPosts from '@/components/EnhancedInstagramPosts';
import InstagramSection from '@/components/InstagramSection';
import AstronomyBackground from '@/components/AstronomyBackground';

const Index = () => {
  return (
    <div className="min-h-screen page-transition relative" style={{ background: 'transparent' }}>
      <AstronomyBackground />
      <div className="relative z-10" style={{ background: 'transparent' }}>
        <Navigation />
        <HeroSection />
        <EnhancedGallerySection />
        <JourneySection />
        <GoalsAchievedSection />
        <EnhancedInstagramPosts />
        <InstagramSection />
      </div>
    </div>
  );
};

export default Index;
