import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillCard = ({ skill, category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#1C1C22]/80 backdrop-blur-sm rounded-lg border border-[#32323A] overflow-hidden shadow-lg"
      whileHover={{ 
        y: -5, 
        boxShadow: '0 10px 30px -15px rgba(142, 195, 142, 0.6)',
        transition: { duration: 0.3 }
      }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className={`w-1 h-8 ${category.accentColor} mr-4`}></div>
          <h4 className="text-xl font-semibold text-[#E8E8E8]">{skill.name}</h4>
        </div>
        <p className="text-[#A0A0A8] text-sm mb-4 h-20 overflow-hidden">{skill.description}</p>
        <div className="flex justify-between text-sm font-light">
          <span className="text-[#8EC38E]">{skill.yearsExp} Years Experience</span>
          <span className="text-[#707078]">{skill.projects} Elite Projects</span>
        </div>
      </div>
    </motion.div>
  );
};

const CategoryCard = ({ category }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="col-span-full bg-[#1C1C22]/80 backdrop-blur-sm rounded-lg border border-[#32323A] 
               overflow-hidden mb-12 shadow-lg"
    whileHover={{ 
      y: -5, 
      boxShadow: '0 10px 30px -15px rgba(142, 195, 142, 0.6)',
      transition: { duration: 0.3 }
    }}
  >
    <div className={`p-10 ${category.bgColor}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-light text-[#E8E8E8] flex items-center tracking-wide">
          <span className="text-4xl mr-4">{category.icon}</span>
          {category.name}
        </h3>
        <span className="text-[#8EC38E] font-light">{category.experience} Years of Excellence</span>
      </div>
      <p className="mt-6 text-[#A0A0A8] leading-relaxed text-lg">{category.description}</p>
    </div>
    <div className="p-10">
      <div className="grid grid-cols-2 gap-8">
        {category.keyPoints.map((point, index) => (
          <div key={index} className="flex items-start">
            <div className={`${category.accentColor} w-1 h-full mr-4 flex-shrink-0`}></div>
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
      ${isSelected ? 'bg-[#1C1C22]/80 text-[#E8E8E8] border-[#8EC38E]' : 'bg-transparent text-[#A0A0A8] border-[#32323A]'}
      transition-all duration-500 border hover:border-[#8EC38E] backdrop-blur-sm`}
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
  >
    <span className="mr-2">{category.icon}</span>
    {category.name}
  </motion.button>
);

const LuxuryDivider = () => (
  <div className="flex items-center justify-center my-16">
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#8EC38E] to-transparent"></div>
    <div className="mx-4 text-[#8EC38E]">✦</div>
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#8EC38E] to-transparent"></div>
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
      accentColor: 'bg-[#8EC38E]',
      experience: '5+',
      description: "Creating seamless digital experiences through a blend of meticulous design and cutting-edge technology.",
      keyPoints: [
        'Bespoke component architecture with unparalleled precision',
        'State management solutions of the highest caliber',
        'Impeccable user experience design methodology',
        'Performance optimization to absolute perfection'
      ],
      "skills": [
        { name: "React", yearsExp: 2, projects: 2, description: "Building high-quality web applications with exceptional attention to detail" },
        { name: "Next.js", yearsExp: 2, projects: 8, description: "Developing high-performance server-rendered applications" },
        { name: "UI/UX Design", yearsExp: 5, projects: 20, description: "Crafting user interfaces that reflect elegance and usability" },
        { name: "CSS/SASS", yearsExp: 4, projects: 15, description: "Implementing advanced styling techniques for visually appealing designs" },
        { name: "Responsive Web Design", yearsExp: 4, projects: 10, description: "Ensuring optimal user experiences across all devices and screen sizes" },
        { name: "Version Control", yearsExp: 5, projects: 25, description: "Managing code efficiently and collaborating effectively within teams" },
        { name: "JavaScript", yearsExp: 4, projects: 25, description: "Managing code efficiently and collaborating effectively within teams" },
        { name: "Html", yearsExp: 4, projects: 25, description: "Managing code efficiently and collaborating effectively within teams" },
        { name: "Agile Development Practices", yearsExp: 3, projects: 12, description: "Fostering collaboration and flexibility in project management" }
      ]
    },
    {
      name: 'Backend Architecture',
      icon: '⚙️',
      bgColor: 'bg-[#1E1E24]',
      accentColor: 'bg-[#8EC38E]',
      experience: '4+',
      description: 'Engineering sophisticated server architectures with unparalleled attention to scalability and performance.',
      keyPoints: [
        'Architectural solutions of unprecedented elegance',
        'Database designs optimized for ultimate efficiency',
        'Security implementations of the highest standard',
        'API designs that epitomize RESTful principles'
      ],
      skills: [
        { name: 'Node.js', yearsExp: 4, projects: 12, description: 'Crafting server-side solutions with exceptional sophistication' },
        { name: 'Python', yearsExp: 3, projects: 10, description: 'Developing elegant, efficient backend systems' },
        { name: 'Database Architecture', yearsExp: 4, projects: 15, description: 'Architecting data solutions with unmatched precision' },
        { name: "API's", yearsExp: 3, projects: 14, description: 'Designing interfaces of exceptional clarity and efficiency' },
        { name: "SQL / NoSQL", yearsExp: 3, projects: 14, description: 'Designing interfaces of exceptional clarity and efficiency' },
        { name: "Automated Testing", yearsExp: 3, projects: 14, description: 'Designing interfaces of exceptional clarity and efficiency' },
        { name: "Flask", yearsExp: 3, projects: 14, description: 'Designing interfaces of exceptional clarity and efficiency' },
        { name: "Data Visualization", yearsExp: 3, projects: 14, description: 'Designing interfaces of exceptional clarity and efficiency' },
      ]
    },
    {
      name: 'DevOps & Cloud',
      icon: '🚀',
      bgColor: 'bg-[#1E1E24]',
      accentColor: 'bg-[#8EC38E]',
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