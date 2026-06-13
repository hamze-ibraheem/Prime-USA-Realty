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
    </div>
  );
}
