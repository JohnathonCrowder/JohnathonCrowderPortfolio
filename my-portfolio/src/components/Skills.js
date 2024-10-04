import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Particles from "react-tsparticles";

const SpaceBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[#0B0B0F]"></div>
    <div className="stars"></div>
    <div className="twinkling"></div>
    <Particles
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  </div>
);
const SkillCard = ({ skill, category, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative bg-[#1C1C22]/80 backdrop-blur-sm rounded-lg border border-[#32323A] p-8 
               hover:border-[#B8A04A] transition-all duration-500 overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-[#B8A04A]/0 to-[#B8A04A]/0 opacity-0 
                    group-hover:opacity-10 transition-opacity duration-500"></div>
    <div className="relative z-10">
      <div className="flex items-center mb-6">
        <div className={`w-0.5 h-8 ${category.accentColor} mr-4`}></div>
        <h4 className="text-xl font-light text-[#E8E8E8]">{skill.name}</h4>
      </div>
      <p className="text-[#A0A0A8] text-sm mb-6 min-h-[40px] leading-relaxed">{skill.description}</p>
      <div className="flex justify-between text-sm font-light">
        <span className="text-[#B8A04A]">{skill.yearsExp} Years Experience</span>
        <span className="text-[#707078]">{skill.projects} Elite Projects</span>
      </div>
    </div>
  </motion.div>
);

const CategoryCard = ({ category }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="col-span-full bg-[#1C1C22]/80 backdrop-blur-sm rounded-lg border border-[#32323A] 
               overflow-hidden mb-12 hover:border-[#B8A04A] transition-all duration-500"
  >
    <div className={`p-10 ${category.bgColor}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-light text-[#E8E8E8] flex items-center tracking-wide">
          <span className="text-4xl mr-4">{category.icon}</span>
          {category.name}
        </h3>
        <span className="text-[#B8A04A] font-light">{category.experience} Years of Excellence</span>
      </div>
      <p className="mt-6 text-[#A0A0A8] leading-relaxed text-lg">{category.description}</p>
    </div>
    <div className="p-10">
      <div className="grid grid-cols-2 gap-8">
        {category.keyPoints.map((point, index) => (
          <div key={index} className="flex items-start">
            <div className={`${category.accentColor} w-0.5 h-full mr-4 flex-shrink-0`}></div>
            <span className="text-[#A0A0A8] leading-relaxed">{point}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const SkillCategory = ({ category, isSelected, onSelect }) => (
  <motion.button
    onClick={() => onSelect(category.name)}
    className={`px-8 py-4 rounded-lg font-light text-sm tracking-wider
      ${isSelected ? 'bg-[#1C1C22]/80 text-[#E8E8E8] border-[#B8A04A]' : 'bg-transparent text-[#A0A0A8] border-[#32323A]'}
      transition-all duration-500 border hover:border-[#B8A04A] backdrop-blur-sm`}
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
  >
    <span className="mr-2">{category.icon}</span>
    {category.name}
  </motion.button>
);

const LuxuryDivider = () => (
    <div className="flex items-center justify-center my-16">
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#B8A04A] to-transparent"></div>
      <div className="mx-4 text-[#B8A04A]">✦</div>
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#B8A04A] to-transparent"></div>
    </div>
  );
  
  const SkillsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const controls = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0.1,
      triggerOnce: true,
    });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
  
    const skillCategories = [
      {
        name: 'Frontend Development',
        icon: '🎨',
        bgColor: 'bg-[#1E1E24]',
        accentColor: 'bg-[#B8A04A]',
        experience: '5+',
        description: 'Crafting immaculate digital experiences through meticulous attention to detail and innovative design principles.',
        keyPoints: [
          'Bespoke component architecture with unparalleled precision',
          'State management solutions of the highest caliber',
          'Impeccable user experience design methodology',
          'Performance optimization to absolute perfection'
        ],
        skills: [
          { name: 'React Mastery', yearsExp: 4, projects: 15, description: 'Architecting distinguished web experiences with unmatched expertise' },
          { name: 'TypeScript Proficiency', yearsExp: 3, projects: 12, description: 'Ensuring code excellence through superior type safety' },
          { name: 'Next.js Innovation', yearsExp: 2, projects: 8, description: 'Pioneering server-rendered applications of exceptional quality' },
          { name: 'Elite UI/UX Craft', yearsExp: 5, projects: 20, description: 'Designing interfaces that exemplify sophistication' },
        ]
      },
      {
        name: 'Backend Architecture',
        icon: '⚙️',
        bgColor: 'bg-[#1E1E24]',
        accentColor: 'bg-[#B8A04A]',
        experience: '4+',
        description: 'Engineering sophisticated server architectures with unparalleled attention to scalability and performance.',
        keyPoints: [
          'Architectural solutions of unprecedented elegance',
          'Database designs optimized for ultimate efficiency',
          'Security implementations of the highest standard',
          'API designs that epitomize RESTful principles'
        ],
        skills: [
          { name: 'Node.js Expertise', yearsExp: 4, projects: 12, description: 'Crafting server-side solutions with exceptional sophistication' },
          { name: 'Python Mastery', yearsExp: 3, projects: 10, description: 'Developing elegant, efficient backend systems' },
          { name: 'Database Artistry', yearsExp: 4, projects: 15, description: 'Architecting data solutions with unmatched precision' },
          { name: 'API Craftsmanship', yearsExp: 3, projects: 14, description: 'Designing interfaces of exceptional clarity and efficiency' },
        ]
      },
      {
        name: 'DevOps & Cloud',
        icon: '🚀',
        bgColor: 'bg-[#1E1E24]',
        accentColor: 'bg-[#B8A04A]',
        experience: '3+',
        description: 'Orchestrating deployment ecosystems with a focus on automation, reliability, and operational excellence.',
        keyPoints: [
          'Continuous Integration pipelines of supreme efficiency',
          'Container orchestration with unmatched precision',
          'Cloud architecture of exceptional scalability',
          'Monitoring solutions providing unprecedented insights'
        ],
        skills: [
          { name: 'Docker Virtuosity', yearsExp: 3, projects: 10, description: 'Containerization solutions of unparalleled sophistication' },
          { name: 'AWS Architecture', yearsExp: 3, projects: 8, description: 'Cloud infrastructures designed with supreme expertise' },
          { name: 'CI/CD Mastery', yearsExp: 3, projects: 12, description: 'Automation pipelines of exceptional reliability' },
          { name: 'Kubernetes Orchestration', yearsExp: 2, projects: 6, description: 'Container management with unprecedented control' },
        ]
      }
    ];
  
    return (
      <section ref={ref} className="relative py-32">
        <SpaceBackground />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -20 },
            }}
            className="text-center"
          >
            <h2 className="text-5xl font-light text-[#E8E8E8] mb-6 tracking-wide">Technical Expertise</h2>
            <p className="text-xl text-[#A0A0A8] font-light tracking-wider">Mastering the art of modern web technologies</p>
          </motion.div>
  
          <LuxuryDivider />
  
          <div className="flex justify-center gap-6 mb-16">
            {skillCategories.map((category) => (
              <SkillCategory
                key={category.name}
                category={category}
                isSelected={selectedCategory === category.name}
                onSelect={setSelectedCategory}
              />
            ))}
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {selectedCategory && (
                <CategoryCard 
                  category={skillCategories.find(cat => cat.name === selectedCategory) || skillCategories[0]} 
                />
              )}
              {(selectedCategory 
                ? [skillCategories.find(cat => cat.name === selectedCategory)].filter(Boolean)
                : skillCategories
              ).map((category) => (
                category && category.skills && category.skills.map((skill, index) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    category={category} 
                    index={index} 
                  />
                ))
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    );
  };
  
  export default SkillsSection;