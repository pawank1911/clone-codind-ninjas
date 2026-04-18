import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import CoursesSection from './components/CoursesSection';
import HiringPartnersSection from './components/HiringPartnersSection';
import BootcampSection from './components/BootcampSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import PressSection from './components/PressSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans min-h-screen bg-white selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main className="pt-16"> {/* Offset for fixed navbar */}
        <HeroSection />
        <StatsSection />
        <CoursesSection />
        <HiringPartnersSection />
        <FeaturesSection />
        <BootcampSection />
        <TestimonialsSection />
        <PressSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
