import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import JourneySection from '@/components/JourneySection';
import GoalsAchievedSection from '@/components/GoalsAchievedSection';
import EnhancedInstagramPosts from '@/components/EnhancedInstagramPosts';
import InstagramSection from '@/components/InstagramSection';
import AstronomyBackground from '@/components/AstronomyBackground';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen relative" style={{ background: 'transparent' }}>
      <AstronomyBackground />
      <div className="relative z-10" style={{ background: 'transparent' }}>
        <Navigation />
        <HeroSection />
        <EnhancedInstagramPosts />
        <JourneySection />
        <GoalsAchievedSection />
        <InstagramSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
