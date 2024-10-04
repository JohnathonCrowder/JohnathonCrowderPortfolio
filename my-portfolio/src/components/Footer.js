import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>
          <div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-white">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;