import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[70px] border-b border-gold/30 flex items-center ${isScrolled ? 'bg-navy/95 backdrop-blur shadow-lg' : 'bg-navy'} shrink-0`}>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <div>
              <a href="#home" className="text-gold text-2xl font-serif font-bold tracking-tight block">
                PRIME USA REALTY
              </a>
              <p className="text-[10px] uppercase tracking-[0.2em] -mt-1 opacity-70 text-white">Orlando's Premier Agency</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-300 hover:text-gold transition-colors font-medium text-sm">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="bg-gold text-navy hover:bg-white transition-colors px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider">
              Get Free Consultation
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gold focus:outline-none">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-navy absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block px-3 py-2 text-white hover:text-gold font-medium text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="block mt-4 text-center bg-gold text-navy font-semibold px-4 py-3 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Free Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
