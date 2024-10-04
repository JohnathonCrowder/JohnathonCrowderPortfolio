import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-[#1C1C22] rounded-lg overflow-hidden shadow-lg"
      whileHover={{ 
        y: -5, 
        boxShadow: '0 10px 30px -15px rgba(142, 195, 142, 0.6)',
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative h-48">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C22] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-semibold text-[#E8E8E8] mb-2">{project.title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-[#A0A0A8] mb-4 h-20 overflow-hidden">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-3 py-1 bg-[#32323A] text-[#8EC38E] rounded-full text-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: techIndex * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex space-x-4">
          <motion.a
            href={project.link}
            className="px-4 py-2 bg-[#8EC38E] text-[#0B0B0F] rounded-full font-semibold text-sm flex-grow text-center"
            whileHover={{ scale: 1.05, backgroundColor: '#A5D0A5' }}
            whileTap={{ scale: 0.95 }}
          >
            Launch Project
          </motion.a>
          <motion.a
            href={project.github}
            className="px-4 py-2 bg-[#32323A] text-[#8EC38E] rounded-full font-semibold text-sm flex-grow text-center"
            whileHover={{ scale: 1.05, color: '#A5D0A5' }}
            whileTap={{ scale: 0.95 }}
          >
            View Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const CosmicDivider = () => (
  <div className="flex items-center justify-center my-16">
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#8EC38E] to-transparent"></div>
    <div className="mx-4 text-[#8EC38E] text-2xl">✧</div>
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#8EC38E] to-transparent"></div>
  </div>
);

function Projects() {
  const projects = [
    {
      title: "Nebula E-commerce",
      description: "A full-stack e-commerce platform with cosmic product offerings.",
      image: "https://via.placeholder.com/300x200",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
      github: "#",
    },
    {
      title: "Astro Task Manager",
      description: "A stellar web application for managing tasks across the galaxy.",
      image: "https://via.placeholder.com/300x200",
      technologies: ["Vue.js", "Firebase", "Vuex"],
      link: "#",
      github: "#",
    },
    {
      title: "Cosmic Weather Forecast",
      description: "Real-time weather dashboard for tracking atmospheric conditions on distant planets.",
      image: "https://via.placeholder.com/300x200",
      technologies: ["JavaScript", "APIs", "Chart.js"],
      link: "#",
      github: "#",
    },
    {
      title: "Interstellar Analytics",
      description: "Data visualization tool for tracking social media metrics across the cosmos.",
      image: "https://via.placeholder.com/300x200",
      technologies: ["Python", "Django", "D3.js"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="relative py-32">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl font-light text-[#E8E8E8] mb-6 tracking-wide">
            <span className="text-[#8EC38E]">✦</span> Cosmic Creations <span className="text-[#8EC38E]">✦</span>
          </h2>
          <p className="text-xl text-[#A0A0A8] font-light mb-12">Explore the digital galaxies I've crafted</p>
        </motion.div>

        <CosmicDivider />

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;