import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillCard = ({ skill, category, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-[#1C1C22] rounded-lg border border-[#32323A] p-6 hover:border-[#B8A04A] transition-all duration-300"
  >
    <div className="flex items-center mb-4">
      <div className={`w-1 h-6 ${category.accentColor} mr-3`}></div>
      <h4 className="text-lg font-medium text-[#E8E8E8]">{skill.name}</h4>
    </div>
    <p className="text-[#A0A0A8] text-sm mb-4 min-h-[40px]">{skill.description}</p>
    <div className="flex justify-between text-sm">
      <span className="text-[#B8A04A]">{skill.yearsExp} Years</span>
      <span className="text-[#707078]">{skill.projects} Projects</span>
    </div>
  </motion.div>
);

const CategoryCard = ({ category }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="col-span-full bg-[#1C1C22] rounded-lg border border-[#32323A] overflow-hidden mb-8"
  >
    <div className={`p-8 ${category.bgColor}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-medium text-[#E8E8E8] flex items-center">
          <span className="text-3xl mr-3">{category.icon}</span>
          {category.name}
        </h3>
        <span className="text-[#B8A04A]">{category.experience} Years Expertise</span>
      </div>
      <p className="mt-4 text-[#A0A0A8]">{category.description}</p>
    </div>
    <div className="p-8">
      <div className="grid grid-cols-2 gap-6">
        {category.keyPoints.map((point, index) => (
          <div key={index} className="flex items-start">
            <div className={`${category.accentColor} w-1 h-6 mt-1 mr-3 flex-shrink-0`}></div>
            <span className="text-[#A0A0A8]">{point}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const SkillCategory = ({ category, isSelected, onSelect }) => (
  <motion.button
    onClick={() => onSelect(category.name)}
    className={`px-6 py-3 rounded-lg font-medium text-sm
      ${isSelected ? category.bgColor + ' text-[#E8E8E8] border-[#B8A04A]' : 'bg-[#1C1C22] text-[#A0A0A8] border-[#32323A]'}
      transition-all duration-300 border hover:border-[#B8A04A]`}
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
  >
    <span className="mr-2">{category.icon}</span>
    {category.name}
  </motion.button>
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
      description: 'Crafting exquisite, responsive interfaces with cutting-edge JavaScript frameworks.',
      keyPoints: [
        'Bespoke component architecture',
        'Advanced state management solutions',
        'Premium user experience design',
        'Performance optimization'
      ],
      skills: [
        { name: 'React & React Native', yearsExp: 4, projects: 15, description: 'Developing premium web and mobile experiences' },
        { name: 'TypeScript', yearsExp: 3, projects: 12, description: 'Ensuring codebase excellence with static typing' },
        { name: 'Next.js', yearsExp: 2, projects: 8, description: 'Crafting high-performance server-rendered applications' },
        { name: 'UI/UX Development', yearsExp: 5, projects: 20, description: 'Creating sophisticated, intuitive interfaces' },
      ]
    },
    {
      name: 'Backend Architecture',
      icon: '⚙️',
      bgColor: 'bg-[#1E1E24]',
      accentColor: 'bg-[#B8A04A]',
      experience: '4+',
      description: 'Engineering robust, scalable server-side solutions with uncompromising quality.',
      keyPoints: [
        'Elite API design and development',
        'Sophisticated microservices architecture',
        'High-performance database solutions',
        'Enterprise-grade security implementation'
      ],
      skills: [
        { name: 'Node.js & Express', yearsExp: 4, projects: 12, description: 'Building high-caliber server applications' },
        { name: 'Python & Django', yearsExp: 3, projects: 8, description: 'Developing elegant, scalable backends' },
        { name: 'Database Architecture', yearsExp: 4, projects: 15, description: 'Designing optimized data solutions' },
        { name: 'Security & Authentication', yearsExp: 3, projects: 10, description: 'Implementing fortress-like security measures' },
      ]
    },
    {
      name: 'DevOps & Cloud',
      icon: '🚀',
      bgColor: 'bg-[#1E1E24]',
      accentColor: 'bg-[#B8A04A]',
      experience: '3+',
      description: 'Orchestrating seamless deployment pipelines and managing elite cloud infrastructure.',
      keyPoints: [
        'Streamlined CI/CD implementation',
        'Advanced container orchestration',
        'Infrastructure as Code mastery',
        'Premium cloud architecture design'
      ],
      skills: [
        { name: 'Docker & Kubernetes', yearsExp: 3, projects: 10, description: 'Orchestrating containerized excellence' },
        { name: 'AWS Architecture', yearsExp: 3, projects: 8, description: 'Crafting sophisticated cloud solutions' },
        { name: 'CI/CD Mastery', yearsExp: 3, projects: 12, description: 'Engineering automated deployment precision' },
        { name: 'System Monitoring', yearsExp: 2, projects: 6, description: 'Ensuring peak application performance' },
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-[#15151A]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -20 },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-medium text-[#E8E8E8] mb-4">Technical Expertise</h2>
          <p className="text-xl text-[#A0A0A8]">Mastery in modern web technologies and best practices</p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.name}
              category={category}
              isSelected={selectedCategory === category.name}
              onSelect={setSelectedCategory}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {selectedCategory && (
              <CategoryCard category={skillCategories.find(cat => cat.name === selectedCategory)} />
            )}
            {(selectedCategory ? [skillCategories.find(cat => cat.name === selectedCategory)] : skillCategories).map((category) => (
              category.skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} category={category} index={index} />
              ))
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
