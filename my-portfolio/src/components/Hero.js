
import React from 'react';
import { motion } from 'framer-motion';
import astronautImage from './assets/astronaut.png'; // You'll need to add this image

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Twinkling stars effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating planets */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-purple-500 opacity-75"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-blue-500 opacity-75"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Content */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Exploring the Digital Cosmos
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Full Stack Developer & Space Enthusiast
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 md:space-y-0 md:space-x-4"
            >
              <motion.a
                href="#projects"
                className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Launch Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-block bg-transparent border-2 border-purple-500 text-purple-500 py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-500 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Mission Control
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - Astronaut Animation */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div 
              className="relative w-64 h-96"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={astronautImage} 
                alt="Floating Astronaut"
                className="w-full h-full object-contain"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Space debris */}
              <motion.div 
                className="absolute top-1/4 right-1/4 w-4 h-4 bg-gray-400 rounded-full"
                animate={{
                  x: [0, 50, 0],
                  y: [0, 30, 0],
                  rotate: 360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;