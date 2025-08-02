import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import AstronomyBackground from '@/components/AstronomyBackground';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen page-transition-enter relative" style={{ background: 'transparent' }}>
      <AstronomyBackground />
      <Navigation />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;