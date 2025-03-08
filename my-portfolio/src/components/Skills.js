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
        <span className="text-[#8EC38E] font-light">{category.experience} Years of Experience</span>
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
      experience: '4+',
      description: "I excel at creating unique digital experiences through a blend of meticulous design and cutting-edge technology.",
      keyPoints: [
        'Custom component architecture designed for flexibility and reusability',
        'Efficient state management ensuring optimal performance in dynamic applications',
        'User experience strategies focused on accessibility and user satisfaction',
        'Thorough performance enhancements leading to faster load times and smoother interactions'
    ],
      "skills": [
        {
          name: "JavaScript / Typescript",
          yearsExp: 4,
          projects: 25,
          description: "Proficient in JavaScript for building dynamic web applications, with a strong focus on developing efficient code and implementing modern JavaScript features to enhance functionality."
      },
        {
            name: "React",
            yearsExp: 2,
            projects: 2,
            description: "Skilled in building high-quality web applications using React, focusing on component-driven architecture and delivering responsive, user-friendly interfaces."
        },
        {
            name: "UI/UX Design",
            yearsExp: 4,
            projects: 20,
            description: "Expert in crafting user interfaces that balance elegance and usability, ensuring that designs not only look good but also provide a seamless user experience."
        },
        {
          name: "HTML",
          yearsExp: 4,
          projects: 25,
          description: "Skilled in using HTML to create semantic, accessible web content, ensuring a solid foundation for web applications that improves SEO and user experience."
      },
        {
            name: "CSS/SASS",
            yearsExp: 4,
            projects: 15,
            description: "Proficient in implementing advanced styling techniques using CSS and SASS to create visually appealing and maintainable designs that elevate the overall aesthetic of web applications."
        },
        {
          name: "Tailwind CSS",
          yearsExp: 4,
          projects: 3,
          description: "Skilled in using Tailwind CSS for utility-first styling, enabling rapid UI development and consistent design across applications."
      },
        {
            name: "Responsive Web Design",
            yearsExp: 4,
            projects: 20,
            description: "Experienced in ensuring optimal user experiences across all devices and screen sizes through responsive design techniques that adapt layouts and components effectively."
        },
        
        
        
       
      {
          name: "SEO Optimization",
          yearsExp: 3,
          projects: 8,
          description: "Proficient in implementing SEO best practices to enhance website visibility and drive organic traffic through on-page optimization."
      },
        {
            name: "Agile Development Practices",
            yearsExp: 4,
            projects: 12,
            description: "Experienced in fostering collaboration and flexibility in project management through Agile development practices, promoting iterative progress and responsive changes to project requirements."
        }

    ]
    
    },
    {
      name: 'Backend Architecture',
      icon: '⚙️',
      bgColor: 'bg-[#1E1E24]',
      accentColor: 'bg-[#8EC38E]',
      experience: '4+',
      description: 'Designing and implementing robust backend systems with a strong emphasis on scalability, performance, and security best practices.',
    keyPoints: [
        'Innovative architectural solutions focused on scalability and maintainability',
        'Efficient database structures designed for optimal performance and reliability',
        'Comprehensive security measures to safeguard data integrity and privacy',
        'API designs that follow industry standards and enhance interoperability'
    ],
      skills: [
        { name: 'Python', yearsExp: 9, projects: 10, description: 'Experienced Python developer with expertise in backend development, data processing, automation, building APIs, optimizing performance, and handling large datasets.' },
        { name: "Next.js", yearsExp: 2, projects: 8, description: "Experienced in developing modern web applications using Next.js. Skilled in building flexible, scalable solutions with a focus on user experience and performance." },
        { name: 'Node.js', yearsExp: 2, projects: 12, description: 'Experienced in developing robust server-side applications with Node.js, leveraging its non-blocking architecture to create scalable and high-performance solutions.' },
        { name: "Flask", yearsExp: 4, projects: 14, description: 'Expert in building scalable web applications and RESTful APIs with Flask, leveraging its lightweight framework for rapid development and deployment.' },
        { name: 'Database Architecture', yearsExp: 4, projects: 15, description: 'Experienced in designing database structures that ensure data integrity and support complex queries, while leveraging best practices for security and efficiency.' },
        { name: "API's", yearsExp: 4, projects: 14, description: 'Experienced in building versatile and scalable APIs that enable communication between services, with an emphasis on design, security, and documentation for developers.' },
        { name: "SQL / NoSQL / MongoDB", yearsExp: 3, projects: 14, description: 'Proficient in designing and optimizing SQL and NoSQL databases to meet diverse data storage needs.' },
        { name: "Automated Testing", yearsExp: 3, projects: 14, description: 'Experienced in implementing automated testing strategies to ensure software quality and reliability. Proficient in creating test suites that reduce bugs, and streamline development.' },
        { name: "Data Visualization", yearsExp: 3, projects: 14, description: 'Specializing in crafting intuitive data dashboards and visual narratives that drive decision-making, utilizing matplotlib and pandas to transform complex data into clear, actionable insights.' },
        
      ]
    },
    {
      name: 'DevOps & Misc.',
      icon: '🚀',
      bgColor: 'bg-[#1E1E24]',
      accentColor: 'bg-[#8EC38E]',
      experience: '4+',
      description: 'Orchestrating deployment ecosystems with a focus on automation, reliability, and operational excellence.',
    keyPoints: [
        'Streamlined CI/CD pipelines that enhance software delivery speed',
        'Robust containerization and orchestration for scalable applications',
        'Comprehensive cloud architecture optimized for performance and cost-efficiency',
        'Effective monitoring and incident response strategies ensuring system reliability'
    ],
      "skills": [
        {
          name: "Artificial Intelligence",
          yearsExp: 3,
          projects: 15,
          description: "Expert in designing, developing, and deploying AI solutions, with hands-on experience in machine learning, deep learning, and natural language processing."
      },
      
    {
      name: "Advanced Automation",
      yearsExp: 6,
      projects: 12,
      description: "Skilled in automating workflows, testing, and deployments using scripting, CI/CD pipelines, and automation tools to improve efficiency and reduce manual effort."
  },
  {
    name: "Swift & Xcode",
    yearsExp: 1,
    projects: 3,
    description: "Proficient in developing iOS applications using Swift and Xcode, focusing on clean architecture, UI design, and performance optimization."
},  
        {
          name: 'Azure DevOps',
          yearsExp: 2,
          projects: 3,
          description: 'Skilled in leveraging Azure DevOps for project management, CI/CD pipelines, and collaboration, enhancing team productivity and software delivery.'
      },
        {
            name: 'AWS Architecture',
            yearsExp: 1,
            projects: 8,
            description: 'Experienced in designing robust cloud infrastructures on AWS, optimizing for performance, scalability, and cost-efficiency while ensuring high availability and security.'
        },
        {
            name: 'CI/CD Pipelines',
            yearsExp: 4,
            projects: 12,
            description: 'Skilled in implementing continuous integration and continuous deployment (CI/CD) pipelines that automate testing and deployment processes, ensuring high-quality software delivery.'
        },
        {
          name: "Unit & Automated Testing",
          yearsExp: 3,
          projects: 10,
          description: "Experienced in writing unit and automated tests using frameworks Pytest to ensure code reliability, maintainability, and bug-free deployments."
      },
      {
        name: "Local & Mobile Application Development",
        yearsExp: 5,
        projects: 10,
        description: "Experienced in building high-performance applications for both desktop and mobile platforms, delivering seamless user experiences on Windows and iOS."
    }
    ,
        {
          name: "CRM Software",
          yearsExp: 5,
          projects: 8,
          description: "Experienced in implementing and managing CRM systems to optimize customer relationships, automate workflows, and enhance business operations."
      },      
        {
          name: "Postman",
          yearsExp: 9,
          projects: 25,
          description: "Experienced in using Postman for API testing and development"
      },
      {
        name: "Data Analysis & Visualization",
        yearsExp: 4,
        projects: 12,
        description: "Proficient in using Pandas, NumPy, and Matplotlib for data manipulation, numerical computing, and visualization, enabling efficient analysis and insightful data representation."
    },
    {
      name: "CUDA & Multithreading",
      yearsExp: 2,
      projects: 6,
      description: "Experienced in parallel computing with CUDA and multithreading techniques to optimize performance, accelerate computations, and efficiently utilize GPU and CPU resources."
  }
  
  
    ]
    },
    
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
          <h2 className="text-5xl font-light text-[#E8E8E8] mb-6 tracking-wide">Professional Skills</h2>
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