import React, { useEffect, useRef } from 'react';
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';
import galaxyImage from './assets/galaxy.png'; 
import planetImage from './assets/planet.png'; 
import rocketImage from './assets/rocket.png'; 

const Hero = () => {
  const { scrollYProgress } = useViewportScroll();
  const galaxyRef = useRef(null);
  const rocketRef = useRef(null);

  const galaxyParallax = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rocketParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const galaxyOpacity = useTransform(scrollYProgress, [0, 0.3], [.4, 0]);

  const smoothGalaxyParallax = useSpring(galaxyParallax, { stiffness: 100, damping: 30 });
  const smoothRocketParallax = useSpring(rocketParallax, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const galaxy = galaxyRef.current;
    const rocket = rocketRef.current;

    if (galaxy) {
      galaxy.style.transform = `translateY(${smoothGalaxyParallax.get()}px)`;
    }

    if (rocket) {
      rocket.style.transform = `translateY(${smoothRocketParallax.get()}px)`;
    }
  }, [smoothGalaxyParallax, smoothRocketParallax]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      

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
  initial={{ scale: 1 , opacity: 0.7}}
  animate={{ scale: [1, 1.05, 1] , opacity:0.7 }} // Zoom in and out
  transition={{ duration: 30, ease: 'easeInOut', repeat: Infinity }}
/>

      {/* Hero content */}
<div className="container mx-auto px-4 z-20 flex justify-between relative">
  {/* Left side - Content */}
  <div className="relative w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
    {/* Gray Background Effect with Fixed Height and Centered Text */}
<div className="absolute inset-0 bg-gray-800 opacity-70 flex items-center justify-center rounded-md p-10 h-80">
  <div className="text-center w-full pt-2"> {/* Added pt-12 for top padding */}
    <motion.h1 
      className="relative text-5xl md:text-7xl font-extrabold text-white mb-2"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ textShadow: '0 2px 5px rgba(0, 0, 0, 0.8)' }}
    >
      Johnathon Crowder
    </motion.h1>
    
    <motion.h2
      className="relative text-2xl md:text-3xl font-semibold text-white mb-4"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.6)' }}
    >
      Crafting Innovative Solutions
    </motion.h2>
    
    <motion.p
      className="relative text-xl md:text-2xl text-white mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.6)' }}
    >
      Passionate Software Engineer
    </motion.p>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="relative space-y-4 md:space-y-0 md:space-x-4"
      style={{ marginBottom: '20px' }} // Retained margin-bottom for button spacing
    >
      <motion.a
        href="#portfolio"
        className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View My Work
      </motion.a>
      <motion.a
        href="#about"
        className="inline-block bg-transparent border-2 border-blue-500 text-blue-500 py-3 px-8 rounded-full text-lg font-semibold transition-colors duration-300 hover:bg-blue-500 hover:text-white shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </motion.a>
    </motion.div>
  </div>
</div>
  </div>

  {/* Right side - Planet and Rocket */}
  <div className="w-full lg:w-1/2 relative flex items-center justify-center h-80"> {/* Match height for alignment */}
    {/* Planet */}
    <motion.img
      src={planetImage}
      alt="Planet"
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
    />

    {/* Rocket */}
    <motion.img
      ref={rocketRef}
      src={rocketImage}
      alt="Rocket"
      className="absolute w-24 h-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, delay: 3 }}
    />
  </div>
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