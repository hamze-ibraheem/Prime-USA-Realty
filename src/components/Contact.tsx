import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="bg-gold rounded-2xl p-6 lg:p-10 text-navy shadow-xl flex flex-col md:flex-row gap-12 items-center md:items-start">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-5/12"
      >
        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 leading-tight">Let's Find Your Next Home</h3>
        <div className="h-1 w-20 bg-navy mb-6"></div>
        <p className="text-navy/80 mb-8 max-w-sm">
          Whether you're buying, selling, or looking for premium property management, Prime USA Realty is ready to assist.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center shrink-0">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-xs uppercase font-bold tracking-wider opacity-70">Call Us Direct</p>
              <p className="font-serif font-bold text-lg">(407) 555-0198</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center shrink-0">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-xs uppercase font-bold tracking-wider opacity-70">Email Us</p>
              <p className="font-medium">info@primerealty.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-xs uppercase font-bold tracking-wider opacity-70">Office Location</p>
              <p className="font-medium">Orlando, Florida</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-7/12"
      >
        <div className="bg-white/30 backdrop-blur-sm p-6 lg:p-8 rounded-xl border border-navy/10">
          {formStatus === 'success' ? (
            <div className="py-12 text-center text-navy">
              <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h4 className="font-serif text-2xl font-bold mb-2">Message Sent!</h4>
              <p className="text-navy/80">Thank you for reaching out. We'll speak soon.</p>
              <button 
                onClick={() => setFormStatus('idle')}
                className="mt-6 text-sm font-bold uppercase tracking-widest hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  required
                  className="w-full p-3 rounded-lg border-none text-sm bg-white placeholder:text-navy/50 focus:ring-2 focus:ring-navy outline-none"
                  placeholder="Full Name"
                />
                <input 
                  type="tel" 
                  required
                  className="w-full p-3 rounded-lg border-none text-sm bg-white placeholder:text-navy/50 focus:ring-2 focus:ring-navy outline-none"
                  placeholder="Phone Number"
                />
              </div>
              
              <input 
                type="email" 
                required
                className="w-full p-3 rounded-lg border-none text-sm bg-white placeholder:text-navy/50 focus:ring-2 focus:ring-navy outline-none"
                placeholder="Email Address"
              />
              
              <select 
                required
                className="w-full p-3 rounded-lg border-none text-sm bg-white text-navy focus:ring-2 focus:ring-navy outline-none"
              >
                <option value="">I'm looking to...</option>
                <option value="buy">Buy a Home</option>
                <option value="sell">Sell a Home</option>
                <option value="rent">Find a Rental</option>
                <option value="manage">Property Management Services</option>
              </select>

              <textarea 
                rows={4}
                className="w-full p-3 rounded-lg border-none text-sm bg-white placeholder:text-navy/50 focus:ring-2 focus:ring-navy outline-none resize-none"
                placeholder="How can we help you?"
              ></textarea>

              <button 
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-navy text-white hover:bg-navy/90 font-bold uppercase tracking-widest text-sm py-4 rounded-lg transition-all disabled:opacity-70 mt-2"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Free Consultation'}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
