import React, { useEffect, useRef } from 'react';
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';
import galaxyImage from './assets/galaxy.png'; 

const Hero = () => {
  const { scrollYProgress } = useViewportScroll();
  const galaxyRef = useRef(null);

  const galaxyParallax = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const galaxyOpacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 0]);

  const smoothGalaxyParallax = useSpring(galaxyParallax, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const galaxy = galaxyRef.current;

    if (galaxy) {
      galaxy.style.transform = `translateY(${smoothGalaxyParallax.get()}px)`;
      galaxy.style.opacity = galaxyOpacity.get();
    }
  }, [smoothGalaxyParallax, galaxyOpacity]);

  

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
      {/* Animated galaxy background */}
      <motion.div
        ref={galaxyRef}
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(${galaxyImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 95%)',
        }}
        initial={{ scale: 1, opacity: 0.7 }}
        animate={{ scale: [1, 1.05, 1], opacity: 0.7 }} // Zoom in and out
        transition={{ duration: 30, ease: 'easeInOut', repeat: Infinity }}
      />

       {/* Hero content with enhanced box for visibility */}
       <div className="container mx-auto px-4 z-20 flex flex-col items-center text-center">
  <motion.div
    className="min-h-[350px] max-h-[450px] overflow-y-auto bg-gray-900 bg-opacity-50 backdrop-blur-md rounded-3xl p-8 shadow-[inset_0_0_12px_rgba(255,255,255,0.2),_0_0_15px_rgba(255,255,255,0.3)] ring-2 ring-gray-500 flex flex-col justify-evenly"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, ease: 'easeInOut' }}
  >
    <motion.h1
      className="text-5xl md:text-7xl font-bold text-white tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      Johnathon Crowder
    </motion.h1>

    <motion.h2
      className="text-2xl md:text-3xl font-medium text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] tracking-wider"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      Software Engineer
    </motion.h2>

    <motion.div
      className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
    >
      <motion.a
        href="#projects"
        className="bg-gradient-to-r from-gray-500 to-gray-700 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore My Projects
      </motion.a>
      <motion.a
        href="#contact"
        className="border-2 border-white text-white py-3 px-6 rounded-full text-lg font-semibold transition-colors duration-300 hover:bg-white hover:text-black"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Me
      </motion.a>
    </motion.div>
  </motion.div>
</div>


      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="text-white text-sm mb-2">Scroll Down</div>
        <div className="w-8 h-8 border-2 border-white rounded-full flex justify-center items-center">
          <motion.div 
            className="w-2 h-2 bg-white rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
