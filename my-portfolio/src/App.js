import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import SpaceBackground from './components/SpaceBackground';
import CustomCursor from './components/CustomCursor';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animate elements only once
      easing: 'ease-out-cubic', // Default easing for animations
      delay: 0, // Default delay for animations
    });

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  // Refresh AOS when components update
  useEffect(() => {
    AOS.refresh();
  });

  return (
    <>
      <CustomCursor mousePosition={mousePosition} />
      <div className="App relative">
        <SpaceBackground />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
