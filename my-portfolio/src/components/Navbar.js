import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          window.pageYOffset >= sectionTop - sectionHeight * 0.25 &&
          window.pageYOffset < sectionTop + sectionHeight - sectionHeight * 0.25
        ) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1C1C22]/80 backdrop-blur-sm z-50 py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-[#8EC38E] text-2xl font-bold">
Johnathon Crowder        </a>

        <div className="hidden md:flex items-center space-x-8">
          <motion.a
            href="#about"
            className={`text-[#A0A0A8] hover:text-[#8EC38E] transition-colors duration-300 ${
              activeLink === 'about' ? 'text-[#8EC38E]' : ''
            }`}
            whileHover={{ y: -2 }}
          >
            About
          </motion.a>
          <motion.a
            href="#projects"
            className={`text-[#A0A0A8] hover:text-[#8EC38E] transition-colors duration-300 ${
              activeLink === 'projects' ? 'text-[#8EC38E]' : ''
            }`}
            whileHover={{ y: -2 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            className={`text-[#A0A0A8] hover:text-[#8EC38E] transition-colors duration-300 ${
              activeLink === 'contact' ? 'text-[#8EC38E]' : ''
            }`}
            whileHover={{ y: -2 }}
          >
            Contact
          </motion.a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#8EC38E] focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#1C1C22]/80 backdrop-blur-sm py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <motion.a
              href="#about"
              className={`text-[#A0A0A8] hover:text-[#8EC38E] transition-colors duration-300 ${
                activeLink === 'about' ? 'text-[#8EC38E]' : ''
              }`}
              whileHover={{ y: -2 }}
            >
              About
            </motion.a>
            <motion.a
              href="#projects"
              className={`text-[#A0A0A8] hover:text-[#8EC38E] transition-colors duration-300 ${
                activeLink === 'projects' ? 'text-[#8EC38E]' : ''
              }`}
              whileHover={{ y: -2 }}
            >
              Projects
            </motion.a>
            <motion.a
              href="#contact"
              className={`text-[#A0A0A8] hover:text-[#8EC38E] transition-colors duration-300 ${
                activeLink === 'contact' ? 'text-[#8EC38E]' : ''
              }`}
              whileHover={{ y: -2 }}
            >
              Contact
            </motion.a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;