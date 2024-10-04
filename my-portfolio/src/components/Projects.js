import React from 'react';

function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React frontend and Node.js backend.",
      image: "https://via.placeholder.com/300x200",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "A responsive web application for managing tasks and projects.",
      image: "https://via.placeholder.com/300x200",
      technologies: ["Vue.js", "Firebase", "Vuex"],
      link: "#",
      github: "#"
    },
    {
      title: "Weather Forecast Dashboard",
      description: "Real-time weather dashboard using OpenWeatherMap API.",
      image: "https://via.placeholder.com/300x200",
      technologies: ["JavaScript", "APIs", "Chart.js"],
      link: "#",
      github: "#"
    },
    {
      title: "Social Media Analytics Tool",
      description: "Data visualization tool for social media metrics.",
      image: "https://via.placeholder.com/300x200",
      technologies: ["Python", "Django", "D3.js"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <div className="text-white text-center">
                    <a href={project.link} className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300 mr-2">Live Demo</a>
                    <a href={project.github} className="inline-block bg-gray-800 text-white px-4 py-2 rounded-full font-semibold hover:bg-gray-900 transition duration-300">GitHub</a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;