import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img 
              src="https://via.placeholder.com/300" 
              alt="John Doe" 
              className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h3 className="text-2xl font-semibold mb-4">Hi, I'm John Doe</h3>
            <p className="text-gray-700 mb-6">
              I'm a passionate full-stack developer with over 5 years of experience in creating robust and scalable web applications. My journey in the world of programming began when I built my first "Hello, World!" program, and I've been hooked ever since.
            </p>
            <p className="text-gray-700 mb-6">
              I specialize in JavaScript and its ecosystem, with expertise in React for front-end development and Node.js for back-end services. I'm also proficient in Python and have experience with cloud platforms like AWS and Google Cloud.
            </p>
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2">My Skills:</h4>
              <div className="flex flex-wrap">
                {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'AWS', 'Docker'].map((skill, index) => (
                  <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-gray-700 mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and local meetups.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;