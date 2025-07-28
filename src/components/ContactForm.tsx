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

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon. Keep exploring!",
        duration: 5000
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
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
          <p className="text-xl text-muted max-w-2xl mx-auto">
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
                    
                    <div className="text-foreground">+92 300 123 4567</div>
                  </div>
                </div>

                
              </div>

              {/* Social Links */}
              <div className="border-t border-primary/20 pt-8">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Follow Our Adventures</h3>
                <div className="flex space-x-4">
                  <button className="p-3 bg-primary/10 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/20 transition-all duration-300 hover-scale neon-glow">
                    <Instagram className="w-5 h-5 text-primary" />
                  </button>
                  
                  
                </div>
              </div>

              {/* QR Code */}
              <div className="mt-8 pt-8 border-t border-primary/20 text-center">
                <p className="text-sm text-muted mb-4">Quick Connect</p>
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
                  <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="bg-bg-dark border-primary/30 focus:border-primary text-foreground placeholder:text-muted" placeholder="Enter your full name" />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground mb-2 block">
                    Email Address *
                  </Label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="bg-bg-dark border-primary/30 focus:border-primary text-foreground placeholder:text-muted" placeholder="Enter your email address" />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-foreground mb-2 block">
                    Subject *
                  </Label>
                  <Input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} className="bg-bg-dark border-primary/30 focus:border-primary text-foreground placeholder:text-muted" placeholder="What's this about?" />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground mb-2 block">
                    Message *
                  </Label>
                  <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} rows={6} className="bg-bg-dark border-primary/30 focus:border-primary text-foreground placeholder:text-muted resize-none" placeholder="Tell us about your adventure plans, questions, or just say hello!" />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground hover:from-accent hover:to-primary neon-glow hover-scale ripple disabled:opacity-50 disabled:cursor-not-allowed group">
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