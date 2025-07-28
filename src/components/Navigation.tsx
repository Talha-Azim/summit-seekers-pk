import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass-nav py-2' : 'bg-transparent py-4'} animate-slide-down`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Primary Logo - Center */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="block hover-glow">
              <img src="/lovable-uploads/82fae56d-d6d7-4852-a667-9865548a6af5.png" alt="Summit Seekers" className="w-16 h-16 md:w-20 md:h-20 rounded-full neon-glow transition-all duration-300" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`text-lg font-medium transition-all duration-300 hover:text-primary hover-glow relative group ${location.pathname === '/' ? 'neon-text' : 'text-foreground'}`}>
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/contact" className={`text-lg font-medium transition-all duration-300 hover:text-primary hover-glow relative group ${location.pathname === '/contact' ? 'neon-text' : 'text-foreground'}`}>
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Secondary Logo - Top Right (appears on scroll) */}
          <div className={`absolute top-2 right-4 transition-all duration-500 ${isScrolled ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-0'}`}>
            
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground hover:text-primary transition-colors z-50" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="glass-card m-4 p-6 rounded-lg">
            <div className="flex flex-col space-y-4">
              <Link to="/" className={`text-lg font-medium transition-all duration-300 hover:text-primary ${location.pathname === '/' ? 'neon-text' : 'text-foreground'}`} onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/contact" className={`text-lg font-medium transition-all duration-300 hover:text-primary ${location.pathname === '/contact' ? 'neon-text' : 'text-foreground'}`} onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;