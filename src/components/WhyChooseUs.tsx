import { motion } from 'motion/react';
import { ShieldCheck, Target, TrendingUp, Search, Globe, DollarSign } from 'lucide-react';

const reasons = [
  {
    title: 'Always on Your Side',
    description: 'Clients say Maria does "whatever it takes to help you find the right home." We advocate fiercely for your best interests.',
    icon: ShieldCheck
  },
  {
    title: 'Goes the Extra Mile',
    description: 'We "never give up on the hunt." Your perfect home is out there, and we will find it.',
    icon: Target
  },
  {
    title: 'Expert Market Knowledge',
    description: 'Actionable insights on current market conditions to help design fair leasing terms and strategic offers.',
    icon: TrendingUp
  },
  {
    title: 'Professional & Responsive',
    description: 'Our management team is consistently praised for responsiveness, professionalism, and strict attention to detail.',
    icon: Search
  },
  {
    title: 'Trusted Globally',
    description: 'Managing properties for 10+ years for overseas owners with zero problems. Secure remote investments.',
    icon: Globe
  },
  {
    title: 'Reasonable & Outstanding',
    description: 'Outstanding service paired with reasonable rates for a truly unmatched real estate experience.',
    icon: DollarSign
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#0e2a5c] rounded-2xl p-6 lg:p-10 border border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay"></div>
      
      <div className="relative z-10 w-full">
        <h3 className="text-gold text-xs uppercase font-bold tracking-widest mb-6">Why Choose Prime USA</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-navy/50 p-6 rounded-xl border border-white/5 flex flex-col items-start gap-4 hover:border-gold/30 transition-colors"
              >
                <div className="text-gold">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-2 text-white">{reason.title}</h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
