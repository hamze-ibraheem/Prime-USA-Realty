import { Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy pt-16 pb-8 text-slate-400">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-bold text-gold mb-4">Prime USA Realty</h2>
            <p className="text-gray-400 font-light mb-6 max-w-sm">
              Your Florida Real Estate Experts. Delivering uncompromising quality, strategic market insight, and highly personalized service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 font-light text-gray-400">
              <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-gold transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="hover:text-gold transition-colors">Reviews</a></li>
              <li><a href="#about" className="hover:text-gold transition-colors">About Maria</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3 font-light text-gray-400">
              <li><a href="#contact" className="hover:text-gold transition-colors">Home Buying</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Property Selling</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Rental Placements</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Property Management</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 font-light">
          <p>&copy; 2025 Prime USA Realty. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
