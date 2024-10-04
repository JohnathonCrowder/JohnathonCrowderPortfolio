import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LuxuryDivider = () => (
  <div className="flex items-center justify-center my-16">
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#B8A04A] to-transparent"></div>
    <div className="mx-4 text-[#B8A04A]">✦</div>
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#B8A04A] to-transparent"></div>
  </div>
);

const InteractiveImage = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div 
        className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden border border-[#B8A04A]/30"
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src="https://via.placeholder.com/400x500" 
          alt="John Doe"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent"></div>
      </motion.div>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#B8A04A]/10 backdrop-blur-sm rounded-lg flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-[#E8E8E8] text-xl mb-4">Click to view resume</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-[#B8A04A] text-[#0B0B0F] rounded-lg"
              >
                Download CV
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const InteractiveStats = () => {
  const stats = [
    { label: 'Years of Experience', value: 5, icon: '🚀' },
    { label: 'Projects Completed', value: 50, icon: '💼' },
    { label: 'Happy Clients', value: 20, icon: '😊' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="text-center p-4 rounded-lg hover:bg-[#1C1C22]/50 cursor-pointer"
          whileHover={{ y: -5 }}
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            className="text-2xl mb-2"
          >
            {stat.icon}
          </motion.div>
          <div className="text-[#B8A04A] text-2xl font-light mb-1">{stat.value}+</div>
          <div className="text-[#A0A0A8] text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

const StoryHighlight = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-[#1C1C22]/50 p-6 rounded-lg border border-[#B8A04A]/20 hover:border-[#B8A04A]/50 transition-colors duration-300"
  >
    <div className="text-[#B8A04A] text-2xl mb-4">{icon}</div>
    <h4 className="text-[#E8E8E8] text-lg font-light mb-2">{title}</h4>
    <p className="text-[#A0A0A8] text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const ExpandedStory = () => {
  const [activePhase, setActivePhase] = useState(0);
  
  const journeyPhases = [
    {
      title: "The Beginning",
      year: "2015",
      description: "My journey in software development began with a simple 'Hello, World!' program, igniting a passion that would define my career.",
      details: [
        "Discovered programming through web development",
        "Built my first website using HTML and CSS",
        "Learned JavaScript fundamentals",
        "Contributed to open-source projects"
      ]
    },
    {
      title: "Growth & Learning",
      year: "2017",
      description: "As my skills evolved, I embraced modern frameworks and deeper technical concepts, laying the foundation for more complex projects.",
      details: [
        "Mastered React and Node.js",
        "Developed full-stack applications",
        "Attended tech conferences and workshops",
        "Started mentoring junior developers"
      ]
    },
    {
      title: "Professional Excellence",
      year: "2019",
      description: "With experience came the ability to architect sophisticated solutions and lead teams to successful project completions.",
      details: [
        "Led development of enterprise applications",
        "Implemented microservices architecture",
        "Optimized performance and scalability",
        "Presented at tech meetups and events"
      ]
    },
    {
      title: "Current Chapter",
      year: "2021",
      description: "Today, I continue to push boundaries, embracing new technologies and methodologies while sharing knowledge with the community.",
      details: [
        "Specializing in cloud-native solutions",
        "Contributing to technical publications",
        "Developing innovative side projects",
        "Exploring emerging technologies"
      ]
    }
  ];

  const highlights = [
    {
      icon: "🎯",
      title: "Problem Solver",
      description: "Passionate about finding elegant solutions to complex technical challenges, always with a focus on user experience and performance."
    },
    {
      icon: "🔮",
      title: "Innovator",
      description: "Constantly exploring new technologies and methodologies to push the boundaries of what's possible in web development."
    },
    {
      icon: "🤝",
      title: "Team Player",
      description: "Believing in the power of collaboration, I thrive in environments where knowledge sharing and collective growth are valued."
    },
    {
      icon: "📚",
      title: "Lifelong Learner",
      description: "Committed to continuous improvement, staying current with industry trends and best practices."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h3 className="text-2xl font-light text-[#E8E8E8] mb-6">My Journey</h3>
      
      <div className="mb-12">
        <div className="flex justify-between mb-8 overflow-x-auto">
          {journeyPhases.map((phase, index) => (
            <motion.button
              key={index}
              onClick={() => setActivePhase(index)}
              className={`relative px-4 py-2 flex-shrink-0 ${activePhase === index ? 'text-[#B8A04A]' : 'text-[#A0A0A8]'}`}
              whileHover={{ y: -2 }}
            >
              <span className="text-sm block mb-1">{phase.year}</span>
              <span className="block font-light">{phase.title}</span>
              {activePhase === index && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8A04A]"
                  layoutId="underline"
                />
              )}
            </motion.button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#1C1C22]/30 p-6 rounded-lg border border-[#B8A04A]/20"
          >
            <h4 className="text-xl text-[#E8E8E8] mb-4">{journeyPhases[activePhase].title}</h4>
            <p className="text-[#A0A0A8] mb-6">{journeyPhases[activePhase].description}</p>
            <div className="grid grid-cols-2 gap-4">
              {journeyPhases[activePhase].details.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <span className="text-[#B8A04A] mr-2">✦</span>
                  <span className="text-[#A0A0A8] text-sm">{detail}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <h3 className="text-2xl font-light text-[#E8E8E8] mb-6">What Drives Me</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {highlights.map((highlight, index) => (
          <StoryHighlight key={index} {...highlight} />
        ))}
      </div>

      <div className="bg-[#1C1C22]/30 p-6 rounded-lg border border-[#B8A04A]/20">
        <h4 className="text-xl text-[#E8E8E8] mb-4">Philosophy</h4>
        <p className="text-[#A0A0A8] mb-4 leading-relaxed">
          I believe that great software is not just about writing code; it's about creating experiences that make a difference. Every line of code I write is guided by principles of user-centricity, performance, and maintainability.
        </p>
        <p className="text-[#A0A0A8] leading-relaxed">
          My approach combines technical expertise with creative problem-solving, always striving to find the perfect balance between innovation and reliability.
        </p>
      </div>
    </motion.div>
  );
};

const InteractiveTimeline = () => {
  const [activeCompany, setActiveCompany] = useState(0);
  
  const experiences = [
    {
      company: "TechCorp",
      role: "Senior Software Engineer",
      period: "2021 - Present",
      description: "Leading innovative solutions for enterprise-scale applications, focusing on cloud-native architectures and team leadership.",
      technologies: ["React", "Node.js", "AWS", "Kubernetes"],
      achievements: [
        {
          title: "Performance Optimization",
          description: "Improved system performance by 40% through innovative caching strategies and code optimization.",
          icon: "📈"
        },
        {
          title: "Team Leadership",
          description: "Led and mentored a team of 5 developers, implementing agile methodologies and best practices.",
          icon: "👥"
        },
        {
          title: "Architecture Modernization",
          description: "Spearheaded the transition to a microservices architecture, enhancing scalability and maintainability.",
          icon: "🏗️"
        },
        {
          title: "DevOps Enhancement",
          description: "Reduced deployment time by 60% by implementing automated CI/CD pipelines and infrastructure as code.",
          icon: "⚡"
        }
      ],
      keyProjects: [
        {
          name: "Enterprise Dashboard",
          description: "Led the development of a real-time analytics dashboard processing millions of data points daily."
        },
        {
          name: "API Gateway",
          description: "Designed and implemented a centralized API gateway handling 1000+ requests per second."
        }
      ]
    },
    {
      company: "InnovateSoft",
      role: "Full Stack Developer",
      period: "2019 - 2021",
      description: "Architected and developed comprehensive full-stack solutions, focusing on scalability and user experience.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      achievements: [
        {
          title: "User Engagement",
          description: "Increased user engagement by 25% through UI/UX improvements and performance optimization.",
          icon: "🎯"
        },
        {
          title: "Component Library",
          description: "Developed a reusable component library, reducing development time for new features by 30%.",
          icon: "🏗️"
        },
        {
          title: "Database Optimization",
          description: "Optimized database queries, resulting in a 50% reduction in average response time.",
          icon: "⚡"
        },
        {
          title: "Automation",
          description: "Implemented CI/CD pipeline, reducing deployment errors by 75% and improving team efficiency.",
          icon: "🤖"
        }
      ],
      keyProjects: [
        {
          name: "E-commerce Platform",
          description: "Built a scalable e-commerce platform handling 10,000+ daily transactions."
        },
        {
          name: "CMS System",
          description: "Developed a custom CMS enabling non-technical users to manage complex content workflows."
        }
      ]
    },
    {
      company: "WebPioneers",
      role: "Frontend Developer",
      period: "2017 - 2019",
      description: "Specialized in crafting responsive, user-centric interfaces with a focus on accessibility and performance.",
      technologies: ["React", "TypeScript", "SASS", "Jest"],
      achievements: [
        {
          title: "Design System",
          description: "Created a comprehensive design system, improving consistency across multiple applications.",
          icon: "🎨"
        },
        {
          title: "Performance",
          description: "Reduced load time by 30% through code splitting and lazy loading implementation.",
          icon: "⚡"
        },
        {
          title: "A/B Testing",
          description: "Implemented A/B testing framework, leading to a 15% increase in conversion rates.",
          icon: "🔬"
        },
        {
          title: "Accessibility",
          description: "Improved accessibility compliance to WCAG 2.1 AA standards across all projects.",
          icon: "♿"
        }
      ],
      keyProjects: [
        {
          name: "Marketing Website",
          description: "Developed a high-performance marketing website with interactive data visualizations."
        },
        {
          name: "Progressive Web App",
          description: "Built a PWA achieving a 90+ Lighthouse score across all categories."
        }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="mb-12">
        <div className="flex justify-between mb-8 overflow-x-auto">
          {experiences.map((exp, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCompany(index)}
              className={`relative px-4 py-2 flex-shrink-0 ${activeCompany === index ? 'text-[#B8A04A]' : 'text-[#A0A0A8]'}`}
              whileHover={{ y: -2 }}
            >
              <span className="text-sm block mb-1">{exp.period}</span>
              <span className="block font-light">{exp.company}</span>
              {activeCompany === index && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B8A04A]"
                  layoutId="companyUnderline"
                />
              )}
            </motion.button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCompany}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#1C1C22]/30 p-6 rounded-lg border border-[#B8A04A]/20 mb-8">
              <h3 className="text-2xl text-[#E8E8E8] font-light mb-2">{experiences[activeCompany].role}</h3>
              <p className="text-[#A0A0A8] mb-4">{experiences[activeCompany].description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {experiences[activeCompany].technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-[#B8A04A]/10 text-[#B8A04A] rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {experiences[activeCompany].achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1C1C22]/30 p-6 rounded-lg border border-[#B8A04A]/20"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{achievement.icon}</span>
                    <h4 className="text-[#E8E8E8] text-lg font-light">{achievement.title}</h4>
                  </div>
                  <p className="text-[#A0A0A8] text-sm">{achievement.description}</p>
                </motion.div>
              ))}
            </div>

            <h4 className="text-xl text-[#E8E8E8] font-light mb-4">Key Projects</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiences[activeCompany].keyProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1C1C22]/30 p-6 rounded-lg border border-[#B8A04A]/20"
                >
                  <h5 className="text-[#B8A04A] text-lg mb-2">{project.name}</h5>
                  <p className="text-[#A0A0A8] text-sm">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

function About() {
  const [activeTab, setActiveTab] = useState('story');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tabContent = {
    story: <ExpandedStory />,
    experience: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <h3 className="text-2xl font-light text-[#E8E8E8] mb-6">Professional Journey</h3>
        <InteractiveTimeline />
      </motion.div>
    ),
  };

  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl font-light text-center text-[#E8E8E8] mb-6 tracking-wide">About Me</h2>
          <LuxuryDivider />
          
          {/* Personal Info and Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <InteractiveImage />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-light text-[#E8E8E8] mb-6">John Doe</h3>
              <p className="text-[#A0A0A8] mb-8 leading-relaxed">
                Passionate full-stack developer with 5+ years of experience in crafting innovative web solutions. Committed to pushing the boundaries of what's possible in web development while maintaining a focus on user experience and performance.
              </p>
              <InteractiveStats />
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            {Object.keys(tabContent).map((tab) => (
              <motion.button
                key={tab}
                className={`mx-4 px-6 py-2 rounded-lg ${activeTab === tab ? 'bg-[#B8A04A] text-[#0B0B0F]' : 'text-[#A0A0A8]'}`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>
          
          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {tabContent[activeTab]}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <motion.a 
              href="#contact" 
              className="inline-block px-8 py-4 border border-[#B8A04A] text-[#B8A04A] hover:bg-[#B8A04A] hover:text-[#0B0B0F] transition-all duration-300 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;