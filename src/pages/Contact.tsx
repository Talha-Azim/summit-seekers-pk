import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import AstronomyBackground from '@/components/AstronomyBackground';

const Contact = () => {
  return (
    <div className="min-h-screen page-transition-enter relative" style={{ background: 'transparent' }}>
      <AstronomyBackground />
      <Navigation />
      <ContactForm />
    </div>
  );
};

export default Contact;