import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Use mailto link to send email
      const subject = encodeURIComponent(formData.subject || 'Contact from Summit Seekers Website');
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:summit.seeker.pk@gmail.com?subject=${subject}&body=${body}`;
      
      window.open(mailtoLink, '_blank');
      
      // Clear form data and show success message
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      toast({
        title: "Email Client Opened",
        description: "Your default email client has been opened with the message. Please send the email from there.",
        duration: 5000,
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open email client. Please try again or contact us directly.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <section className="py-20 px-4 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="heading-primary text-4xl md:text-6xl neon-text mb-4">
            Summit Command
          </h1>
          <p className="max-w-2xl mx-auto text-[#00ffff] text-lg text-center">
            Ready to embark on your next adventure? Reach out and let's plan something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <div className="glass-card p-8 rounded-lg hover-glow h-full">
              <h2 className="heading-secondary text-2xl neon-text mb-8">
                Get in Touch
              </h2>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-primary/10 rounded-full border border-primary/30 group-hover:border-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    
                    <div className="text-foreground">summit.seeker.pk@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-primary/10 rounded-full border border-primary/30 group-hover:border-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-foreground">+92 300 0801341</div>
                  </div>
                </div>

                {/* WhatsApp Contact */}
                <div className="flex items-center space-x-4 group">
                  <button 
                    onClick={() => window.open('https://wa.me/923000801341', '_blank')}
                    className="p-3 bg-primary/10 rounded-full border border-primary/30 group-hover:border-primary hover:bg-primary/20 transition-all duration-300 hover-scale neon-glow"
                  >
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.384"/>
                    </svg>
                  </button>
                  <div>
                    <div className="text-foreground">WhatsApp Chat</div>
                  </div>
                </div>

                {/* Call Button */}
                <div className="flex items-center space-x-4 group">
                  <button 
                    onClick={() => window.open('tel:+923000801341', '_self')}
                    className="p-3 bg-primary/10 rounded-full border border-primary/30 group-hover:border-primary hover:bg-primary/20 transition-all duration-300 hover-scale neon-glow"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                  </button>
                  <div>
                    <div className="text-foreground">Call Now</div>
                  </div>
                </div>

                
              </div>

              {/* Social Links */}
              <div className="border-t border-primary/20 pt-8">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Follow Our Adventures</h3>
                <div className="flex space-x-4">
                  <button className="p-3 bg-primary/10 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300 hover-scale neon-glow" onClick={() => window.open('https://www.instagram.com/summit.seekers.pk/profilecard/?igsh=MW43bWsxNnh5cWNjaA==', '_blank')}>
                    <Instagram className="w-5 h-5 text-primary" />
                  </button>
                  
                  <button className="p-3 bg-primary/10 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300 hover-scale neon-glow" onClick={() => window.open('#', '_blank')} title="TikTok - Coming Soon">
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.321 5.562a5.124 5.124 0 01-.443-.258 6.228 6.228 0 01-1.137-.966c-.849-.849-1.228-1.982-1.228-3.338h-2.926v11.916c0 2.048-1.637 3.732-3.685 3.732-1.998 0-3.732-1.637-3.732-3.732s1.637-3.732 3.732-3.732c.443 0 .849.074 1.228.222v-2.926c-.379-.074-.786-.111-1.228-.111C5.562 6.37 2 9.932 2 14.296s3.562 7.926 7.926 7.926 7.926-3.562 7.926-7.926V9.194a8.88 8.88 0 005.148 1.637V8.055c-1.081 0-2.048-.443-2.679-1.228z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* QR Code */}
              <div className="mt-8 pt-8 border-t border-primary/20 text-center">
                <p className="text-sm mb-4 text-[#00ffff]">Quick Connect</p>
                <div className="w-32 h-32 mx-auto border-2 border-primary/30 rounded-lg flex items-center justify-center bg-bg-dark hover-glow">
                  <img src="/lovable-uploads/e2c2f0a9-69d2-43e6-83b6-5c7136f0e03c.png" alt="QR Code" className="w-24 h-24 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <div className="glass-card p-8 rounded-lg hover-glow">
              <h2 className="heading-secondary text-2xl neon-text mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground mb-2 block">
                    Your Name *
                  </Label>
                  <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="contact-input" placeholder="Enter your full name" />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground mb-2 block">
                    Email Address *
                  </Label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="contact-input" placeholder="Enter your email address" />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-foreground mb-2 block">
                    Subject *
                  </Label>
                  <Input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} className="contact-input" placeholder="What's this about?" />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground mb-2 block">
                    Message *
                  </Label>
                  <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} rows={6} className="contact-input resize-none" placeholder="Tell us about your adventure plans, questions, or just say hello!" />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-accent hover:to-primary neon-glow hover-scale btn-simple disabled:opacity-50 disabled:cursor-not-allowed group">
                  {isSubmitting ? <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </> : <>
                      Send Message
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </>}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;