import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
