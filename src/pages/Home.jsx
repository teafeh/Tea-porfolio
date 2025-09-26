import React from 'react';
import Hero from '../component/Hero/Hero';
import Skills from '../component/Skills/Skills';
import Portfolio from '../component/Portfolio/Portfolio';
import Experience from '../component/Experience/Experience';
import Contact from '../component/Contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;