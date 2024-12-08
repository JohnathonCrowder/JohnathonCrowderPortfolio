import React from 'react';
import { motion } from 'framer-motion';
import greenthumbImg from './assets/greenthumb.png';
import webdesignImg from './assets/webdesign.png';
import junkremovalImg from './assets/junkremoval.png';
import heartdachImg from './assets/heartdach.png';
import pawfinderImg from './assets/pawfinder.png';
import resumeImg from './assets/resume.png';




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
          style={{ backgroundImage: `url(${project.image}` }}
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
      title: "PuppyHorizon",
      description: "A website for connecting Dog Breeders with Clients. Also helps breeders track financial records.",
      image: pawfinderImg,
      technologies: ["Flask", "Python", "SqlAlchemy", "TailwindCss"],
      link: "https://puppyhorizon.com/",
      github: "https://github.com/JohnathonCrowder",
    },
    {
      title: "GreenThumb Landscaping",
      description: "A Demo Website for a landscaping company, created with python and flask.",
      image: greenthumbImg,
      technologies: ["Flask", "Python", "SqlAlchemy", "TailwindCss"],
      link: "https://landscape-website.onrender.com",
      github: "https://github.com/JohnathonCrowder/GreenThumbLandscaping",
    },
    {
      title: "Heartland Dachshunds",
      description: "A Demo Website for a dog breeder, featuring easy puppy and litter management.",
      image: heartdachImg,
      technologies: ["JavaScript", "Python", "Flask", "SqlAlchemy"],
      link: "https://heartlanddachshunds.onrender.com/",
      github: "https://github.com/JohnathonCrowder",
    },
    {
      title: "Simmons Family Junk Removal",
      description: "A Demo website created for a local buiseness. Includes easy to use blog system to increase SEO. ",
      image: junkremovalImg,
      technologies: ["React", "Node.js", "Javascript", "TailwindCss"],
      link: "https://simmonsfamilyjunkremoval.onrender.com/",
      github: "https://github.com/JohnathonCrowder",
    },
    {
      title: "Portfolio Website",
      description: "This would be the website your looking at now, it was created with react and node.js",
      image: resumeImg,
      technologies: ["React", "Node.js", "Javascript", "TailwindCss"],
      link: "https://yourportfolio.com",
      github: "https://github.com/JohnathonCrowder/JohnathonCrowderPortfolio",
    },
    {
      title: "Personal Web-design Website",
      description: "This is a site i created to help find myself freelance web-design work.",
      image: webdesignImg,
      technologies: ["Flask", "Python", "Javascript", "TailwindCss"],
      link: "https://websitedevelopment.onrender.com/",
      github: "https://github.com/JohnathonCrowder",
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
            <span className="text-[#8EC38E]">✦</span> Favorite Projects <span className="text-[#8EC38E]">✦</span>
          </h2>
          <p className="text-xl text-[#A0A0A8] font-light mb-12">Explore some of the websites I've crafted</p>
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