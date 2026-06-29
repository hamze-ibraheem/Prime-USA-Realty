/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-white flex flex-col font-sans overflow-x-hidden">
      <Navbar />
      <main className="flex-1 flex flex-col gap-6 p-4 md:p-6 lg:p-8 pt-24 md:pt-28 max-w-[1440px] mx-auto w-full">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Reviews />
        <About />
        <Contact />
      </main>
      <Footer />
      <a
        href="https://auroraadv.co/?tab=wizard"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center w-28 h-28 md:w-32 md:h-32 bg-gold text-navy rounded-full shadow-2xl hover:scale-105 transition-transform text-center font-bold text-xs md:text-sm p-4 leading-tight border-2 border-white/20 hover:bg-white hover:text-navy"
      >
        Get this website for only $999
      </a>
    </div>
  );
}
