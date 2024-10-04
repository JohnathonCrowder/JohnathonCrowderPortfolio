import React from 'react';

function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center min-h-screen text-center text-white bg-cover bg-center bg-fixed" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('me.png')"}}>
      <div className="max-w-4xl px-4">
        <h1 className="flex flex-col items-center mb-4">
          <span className="text-5xl font-bold mb-2 animate-fadeInDown">Your Name</span>
          <span className="h-14 overflow-hidden">
            <span className="block h-full animate-spinWords">
              <span className="block h-full">Web Developer</span>
              <span className="block h-full">UI/UX Designer</span>
              <span className="block h-full">Problem Solver</span>
            </span>
          </span>
        </h1>
        <p className="text-2xl mb-8 opacity-0 animate-fadeIn animation-delay-500">Turning ideas into reality through code and design</p>
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="px-6 py-3 bg-orange-600 text-white font-bold rounded-lg transition duration-300 hover:bg-orange-700 hover:-translate-y-1 hover:shadow-lg opacity-0 animate-fadeIn animation-delay-1000">View My Work</a>
          <a href="#contact" className="px-6 py-3 bg-transparent text-white font-bold rounded-lg border-2 border-white transition duration-300 hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-lg opacity-0 animate-fadeIn animation-delay-1000">Get In Touch</a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm opacity-70 animate-bounce">
        <span>Scroll Down</span>
        <i className="fas fa-chevron-down mt-1"></i>
      </div>
    </section>
  );
}

export default Hero;