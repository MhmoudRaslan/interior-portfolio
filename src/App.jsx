import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;