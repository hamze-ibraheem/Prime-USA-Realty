import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="bg-white text-navy rounded-2xl p-6 lg:p-10 relative overflow-hidden border border-gold/20 flex flex-col md:flex-row gap-8 items-center md:items-start">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex-shrink-0"
      >
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-gold bg-slate-200 overflow-hidden shadow-xl">
           <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="María Gabriela Milanes" 
              className="w-full h-full object-cover" 
           />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full flex-1"
      >
        <h3 className="font-serif text-3xl font-bold leading-tight mb-2">María Gabriela Milanes</h3>
        <p className="text-sm text-gold font-bold uppercase tracking-wider mb-6">Lead Agent & CEO</p>
        
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <p>
            My fundamental mission as a real estate professional is to be relentlessly in your corner. Let it be the start of a home search, closing a deal, or resolving complex property matters, I believe in always going the extra mile. I won't stop until we secure the perfectly matched property or the ideal tenant.
          </p>
          <p>
            Serving the vibrant Orlando market, my expertise covers the complete spectrum of real estate: from guiding first-time home buyers and executing strategic property sales to curating seamless rental experiences and maintaining meticulous property management operations.
          </p>
          <p>
            For over a decade, I am thoroughly proud to have earned the trust of local Florida families seeking their forever homes, alongside international investors relying on my team for hands-off, highly responsive, and profitable remote property management.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="text-[10px] bg-slate-100 text-navy px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">Expert Insights</span>
          <span className="text-[10px] bg-slate-100 text-navy px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">International Focus</span>
          <span className="text-[10px] bg-slate-100 text-navy px-3 py-1.5 rounded-full font-bold uppercase tracking-wider">Relocation Pro</span>
        </div>
      </motion.div>
    </section>
  );
}
