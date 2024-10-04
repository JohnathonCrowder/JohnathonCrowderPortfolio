import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-[#1C1C22]/80 backdrop-blur-sm rounded-lg border border-[#32323A] overflow-hidden transition-all duration-300 hover:border-[#B8A04A] group"
  >
    <div className="relative">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="text-white text-center">
          <motion.a
            href={project.link}
            className="inline-block bg-[#B8A04A] text-[#0B0B0F] px-4 py-2 rounded-full font-semibold hover:bg-[#D4BA5A] transition duration-300 mr-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            className="inline-block bg-[#32323A] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#4A4A55] transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-[#E8E8E8] mb-2">{project.title}</h3>
      <p className="text-[#A0A0A8] mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 bg-[#32323A] text-[#B8A04A] rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const LuxuryDivider = () => (
  <div className="flex items-center justify-center my-16">
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#B8A04A] to-transparent"></div>
    <div className="mx-4 text-[#B8A04A]">✦</div>
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#B8A04A] to-transparent"></div>
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
      github: "#"
    },
    {
      title: "Astro Task Manager",
      description: "A stellar web application for managing tasks across the galaxy.",
      image: "https://via.placeholder.com/300x200",
      technologies: ["Vue.js", "Firebase", "Vuex"],
      link: "#",
      github: "#"
    },
    {
      title: "Cosmic Weather Forecast",
      description: "Real-time weather dashboard for tracking atmospheric conditions on distant planets.",
      image: "https://via.placeholder.com/300x200",
      technologies: ["JavaScript", "APIs", "Chart.js"],
      link: "#",
      github: "#"
    },
    {
      title: "Interstellar Analytics",
      description: "Data visualization tool for tracking social media metrics across the cosmos.",
      image: "https://via.placeholder.com/300x200",
      technologies: ["Python", "Django", "D3.js"],
      link: "#",
      github: "#"
    }
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
          <h2 className="text-5xl font-light text-[#E8E8E8] mb-6 tracking-wide">Cosmic Creations</h2>
          <p className="text-xl text-[#A0A0A8] font-light mb-12">Explore the digital constellations I've brought to life</p>
        </motion.div>

        <LuxuryDivider />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;