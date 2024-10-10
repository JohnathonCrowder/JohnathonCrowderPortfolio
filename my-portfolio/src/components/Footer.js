import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-light text-[#E8E8E8] mb-4">Johnathon Crowder</h3>
            <p className="text-[#A0A0A8]">Full Stack Developer</p>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-light text-[#E8E8E8] mb-4">Quick Links</h4>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-[#A0A0A8] hover:text-[#B8A04A] transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-[#A0A0A8] hover:text-[#B8A04A] transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-[#A0A0A8] hover:text-[#B8A04A] transition-colors duration-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-[#A0A0A8] hover:text-[#B8A04A] transition-colors duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="text-center md:text-right">
            <h4 className="text-xl font-light text-[#E8E8E8] mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <motion.a 
                href="#" 
                className="text-[#A0A0A8] hover:text-[#B8A04A] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-[#A0A0A8] hover:text-[#B8A04A] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-github fa-2x"></i>
              </motion.a>
              <motion.a 
                href="#" 
                className="text-[#A0A0A8] hover:text-[#B8A04A] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-twitter fa-2x"></i>
              </motion.a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#32323A]">
          <p className="text-center text-[#A0A0A8]">
            &copy; {currentYear} Johnathon Crowder. All rights reserved.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B8A04A] to-transparent"></div>
    </footer>
  );
}

export default Footer;