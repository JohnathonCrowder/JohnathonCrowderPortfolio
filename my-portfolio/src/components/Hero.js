import React from 'react';
import { motion } from 'framer-motion';
import rocketImage from './assets/rocket.png';


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0B0B0F] to-[#1C1C22] overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              opacity: Math.random() * 0.5 + 0.5,
              animation: `twinkle ${Math.random() * 5 + 5}s infinite`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Content */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-[#B8A04A] mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              John Doe
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Full Stack Developer
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 md:space-y-0 md:space-x-4"
            >
              <motion.a
                href="#projects"
                className="inline-block bg-[#B8A04A] text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#D4BA5A] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-block bg-transparent border-2 border-[#B8A04A] text-[#B8A04A] py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#B8A04A] hover:text-black transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - Rocket PNG Animation */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div 
              className="relative w-64 h-96"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.img
              src={rocketImage} 
              alt="Rocket"
                className="w-full h-full object-contain"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Rocket flames */}
              <motion.div 
                className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
                animate={{ scaleY: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-16 h-32 bg-gradient-to-t from-orange-500 via-yellow-500 to-transparent rounded-full filter blur-sm" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;