import React, { useEffect, useRef } from 'react';
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';
import galaxyImage from './assets/galaxy.png'; // You'll need to add this image
import planetImage from './assets/planet.png'; // You'll need to add this image
import rocketImage from './assets/rocket.png'; // You'll need to add this image

const Hero = () => {
  const { scrollYProgress } = useViewportScroll();
  const galaxyRef = useRef(null);
  const rocketRef = useRef(null);

  const galaxyParallax = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rocketParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const galaxyOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Default space background */}
      <div className="absolute inset-0 bg-[#0B0B0F] z-0">
        {/* Add twinkling stars effect */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random(),
              animation: `twinkle ${Math.random() * 5 + 5}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Animated galaxy background */}
      <motion.div
        ref={galaxyRef}
        className="absolute inset-0 z-10"
        style={{
          backgroundImage: `url(${galaxyImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          opacity: galaxyOpacity,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Hero content */}
      <div className="container mx-auto px-4 z-20 flex items-center justify-between relative">
        {/* Left side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Navigating the Cosmic Code
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Senior Full Stack Developer
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 md:space-y-0 md:space-x-4"
          >
            <motion.a
              href="#projects"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-block bg-transparent border-2 border-blue-500 text-blue-500 py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Right side - Planet and Rocket */}
        <div className="w-full lg:w-1/2 relative">
          {/* Planet */}
          <motion.img
            src={planetImage}
            alt="Planet"
            className="w-full max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          {/* Rocket */}
          <motion.img
            ref={rocketRef}
            src={rocketImage}
            alt="Rocket"
            className="absolute w-24 h-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
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