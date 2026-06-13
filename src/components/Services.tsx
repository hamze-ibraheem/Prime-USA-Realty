import { motion } from 'motion/react';
import { Home, BadgeDollarSign, Key, Building2 } from 'lucide-react';

const services = [
  {
    title: 'Home Buying',
    description: 'Guided from search to closing with expert local market knowledge and personalized attention.',
    icon: Home,
  },
  {
    title: 'Property Selling',
    description: 'Strategic pricing, premium marketing presentation, and negotiation to maximize your return.',
    icon: BadgeDollarSign,
  },
  {
    title: 'Rentals',
    description: 'Finding the right reliable tenant for your investment, or the perfect home for your family.',
    icon: Key,
  },
  {
    title: 'Property Management',
    description: 'Hands-off ownership, clear communication, and stress-free results for international and local investors.',
    icon: Building2,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0d285a] rounded-2xl p-6 lg:p-10 border border-gold/20 flex flex-col">
      <h3 className="text-gold text-xs uppercase font-bold tracking-widest mb-6">How We Help You</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy/50 p-6 rounded-xl border border-white/5 flex flex-col group hover:bg-navy/80 transition-colors"
            >
              <div className="text-gold mb-4">
                <Icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-sm font-bold mb-2 text-white">{service.title}</h4>
              <p className="text-xs leading-relaxed text-slate-400">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
