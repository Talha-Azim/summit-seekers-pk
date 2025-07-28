import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import EnhancedGallerySection from '@/components/EnhancedGallerySection';
import JourneySection from '@/components/JourneySection';
import GoalsAchievedSection from '@/components/GoalsAchievedSection';
import InstagramPosts from '@/components/InstagramPosts';
import InstagramSection from '@/components/InstagramSection';
import AstronomyBackground from '@/components/AstronomyBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background page-transition">
      <AstronomyBackground />
      <Navigation />
      <HeroSection />
      <EnhancedGallerySection />
      <JourneySection />
      <GoalsAchievedSection />
      <InstagramPosts />
      <InstagramSection />
    </div>
  );
};

export default Index;
