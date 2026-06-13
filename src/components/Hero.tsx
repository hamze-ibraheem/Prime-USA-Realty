import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative rounded-2xl overflow-hidden border border-gold/20 bg-gradient-to-br from-[#0e2a5c] to-navy flex flex-col justify-center py-20 px-6 md:px-12 lg:px-16 min-h-[400px]">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#C9A84C 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="relative z-10 w-full text-left text-white max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" className={i === 4 ? "opacity-50" : ""} />
              ))}
            </div>
            <span className="text-xs font-medium bg-white/10 px-2 py-1 rounded">4.6/5 Rated by 11 Clients</span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-[1.1]">
            Your Trusted Real Estate <span className="text-gold">Partner</span> in Orlando
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl font-light">
            Buying, Selling, or Renting — María Gabriela Milanes is always in your corner.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="w-full sm:w-auto bg-white hover:bg-gold text-navy font-bold px-6 py-3 rounded-lg transition-colors text-center">
              Find a Home
            </a>
            <a href="#contact" className="w-full sm:w-auto bg-transparent border-2 border-gold text-gold hover:bg-gold/10 font-bold px-6 py-3 rounded-lg transition-colors text-center">
              List My Property
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
