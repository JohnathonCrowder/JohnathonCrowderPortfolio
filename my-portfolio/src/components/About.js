import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


import AOS from 'aos';
import 'aos/dist/aos.css';
import profilePhoto from './assets/profilePhoto.png'; 
import resume from './assets/Johnathon_Crowder_Resume.pdf'; 




const LuxuryDivider = () => (
  <div className="flex items-center justify-center my-16">
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#8EC38E] to-transparent"></div>
    <div className="mx-4 text-[#8EC38E]">✦</div>
    <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#8EC38E] to-transparent"></div>
  </div>
);

const InteractiveImage = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="relative cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -5, 
        boxShadow: '0 10px 30px -15px rgba(142, 195, 142, 0.6)',
        transition: { duration: 0.3 }
      }}
    >
      <motion.div 
        className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden border border-[#32323A]"
        animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={profilePhoto} 
          alt="Johnathon Crowder"
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
            className="absolute inset-0 bg-[#8EC38E]/10 backdrop-blur-sm rounded-lg flex items-center justify-center"
          >
            <div className="text-center">
              <p className="text-[#E8E8E8] text-xl mb-4">Click to view resume</p>
              <a href= {resume} download>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#8EC38E] text-[#0B0B0F] rounded-lg"
                >
                  Download CV
                </motion.button>
              </a>
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
          className="text-center p-4 rounded-lg bg-[#1C1C22]/80 backdrop-blur-sm border border-[#32323A] cursor-pointer"
          whileHover={{ 
            y: -5, 
            boxShadow: '0 10px 30px -15px rgba(142, 195, 142, 0.6)',
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            className="text-2xl mb-2"
          >
            {stat.icon}
          </motion.div>
          <div className="text-[#8EC38E] text-2xl font-light mb-1">{stat.value}+</div>
          <div className="text-[#A0A0A8] text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

const StoryHighlight = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ 
      y: -5, 
      boxShadow: '0 10px 30px -15px rgba(142, 195, 142, 0.6)',
      transition: { duration: 0.3 }
    }}
    className="bg-[#1C1C22]/80 backdrop-blur-sm p-6 rounded-lg border border-[#32323A] hover:border-[#8EC38E] transition-colors duration-300"
  >
    <div className="text-[#8EC38E] text-2xl mb-4">{icon}</div>
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
        "Discovered programming through my highschool Robotics Team",
        "Worked with team to program robots using python",
        "Enrolled in two years of Software Engineering courses",
        "Developed individual projects using Python and Javascript"
      ]
    },
    {
      title: "Growth & Learning",
      year: "2018",
      description: "As my skills evolved, I embraced modern frameworks and deeper technical concepts, laying the foundation for more complex projects.",
      details: [
        "Mastered Python and Javascript",
        "Shifted focus from Robotics to Web Design",
        "Learned React and Flask for web development",
        "Learned cloud technologies for deployment"
      ]
    },
    {
      title: "Freelancing Journey",
      year: "2020",
      description: "With growing expertise, I transitioned into freelancing, where I embraced the opportunity to create innovative solutions and collaborate with diverse clients on impactful projects.",
      details: [
        "Launched my freelance career, expanding my professional skillset",
        "Developed full-stack applications tailored to client needs",
        "Mastered React and Node.js to deliver dynamic web applications",
        "Provided ongoing support and maintenance for clients’ projects"
      ]
    },
    {
      title: "Current Chapter",
      year: "2024",
      description: "Currently, I balance my role in testing AI models with a vibrant freelance career, allowing me to explore innovative solutions across different fields.",
      details: [
        "Conducting in-depth testing and evaluation of AI models",
        "Experimenting with emerging AI technologies",
        " Managing freelance projects that include web development, data analysis, and more",
        " Continuously expanding my skill set to stay ahead in both AI technologies and freelance development"
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
      description: "Constantly exploring new technologies and methodologies to push the boundaries of what's possible in Software Development."
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
              className={`relative px-4 py-2 flex-shrink-0 ${activePhase === index ? 'text-[#8EC38E]' : 'text-[#A0A0A8]'}`}
              whileHover={{ y: -2 }}
            >
              <span className="text-sm block mb-1">{phase.year}</span>
              <span className="block font-light">{phase.title}</span>
              {activePhase === index && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8EC38E]"
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
            className="bg-[#1C1C22]/30 p-6 rounded-lg border border-[#32323A]"
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
                  <span className="text-[#8EC38E] mr-2">✦</span>
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

      <div className="bg-[#1C1C22]/30 p-6 rounded-lg border border-[#32323A]">
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
      "company": "FIRST Robotics Team",
      "role": "Aspiring Programmer",
      "period": "2015 - 2018",
      "description": "Developed programming skills through hands-on experience in robotics, focusing on team collaboration and problem-solving.",
      "technologies": ["C++, Python", "LabView", "Arduino", "Git", "Computer Vision"],
      "achievements": [
        {
          "title": "Robotics Programming",
          "description": "Contributed to programming the robot's behavior, leading to a successful performance in regional competitions.",
          "icon": "🤖"
        },
        {
          "title": "Team Collaboration",
          "description": "Collaborated with a diverse team of students, fostering a spirit of innovation and teamwork to overcome challenges.",
          "icon": "👥"
        },
        {
          "title": "Code Efficiency",
          "description": "Refined existing code to improve execution speed by 25%, optimizing the robot's performance during critical tasks.",
          "icon": "⚡"
        },
        {
          "title": "Mentorship Initiative",
          "description": "Mentored junior team members in programming concepts and robotics fundamentals, fostering a culture of learning.",
          "icon": "👨‍🏫"
        }
      ],
      "keyProjects": [
        {
          "name": "Robot Control Interface",
          "description": "Developed an intuitive user interface for real-time control and monitoring of the robot's functions during competitions."
        },
        {
          "name": "Sensor Integration System",
          "description": "Designed a system to integrate various sensors, enabling enhanced decision-making capabilities for the robot."
        }
      ]
    },
    {
      "company": "Freelance Developer",
      "role": "Full Stack Developer",
      "period": "2019 - Present",
      "description": "Bringing ideas to life through custom web solutions, I specialize in crafting immersive websites and insightful dashboards that drive engagement and empower businesses.",
      "technologies": ["Python", "JavaScript", "HTML", "CSS", "Flask", "React"],
      "achievements": [
        {
          "title": "Tailored Web Solutions",
          "description": "Delivered 20+ custom websites that enhance client visibility and user interaction, helping businesses thrive in a competitive digital landscape.",
          "icon": "🚀"
        },
        {
          "title": "Data Visualization Expert",
          "description": "Designed interactive dashboards that convert complex datasets into clear, actionable insights, empowering clients to make strategic decisions.",
          "icon": "📊"
        },
        {
          "title": "Diverse Technical Skills",
          "description": "Applied a broad skill set in software development to create automation tools and analytical scripts, enhancing productivity and efficiency.",
          "icon": "🔧"
        },
        {
          "title": "Client-Focused Approach",
          "description": "Achieved a 95% client satisfaction rate through personalized solutions and a commitment to exceeding expectations.",
          "icon": "🤝"
        }
      ],
      "keyProjects": [
        {
          "name": "E-Commerce Transformation",
          "description": "Engineered a robust e-commerce platform that increased sales by 40% through enhanced user experience and streamlined checkout processes."
        },
        {
          "name": "Advanced Analytics Dashboard",
          "description": "Developed a sophisticated dashboard that aggregates and visualizes business metrics, enabling clients to track performance and identify growth opportunities."
        }
      ]
    },
    {
      "company": "DataAnnotation",
      "role": "AI Specialist",
      "period": "2023 - Present",
      "description": "Involved in strategic initiatives to enhance AI capabilities and performance across various applications, focusing on innovative training approaches.",
      "technologies": ["Python", "Machine Learning", "Data Processing", "Cloud Technologies"],
      "achievements": [
        {
          "title": "Performance Improvement",
          "description": "Played a key role in enhancing overall model effectiveness through targeted strategies and collaborative efforts.",
          "icon": "📈"
        },
        {
          "title": "Process Innovation",
          "description": "Contributed to the optimization of training processes, resulting in improved efficiency and project outcomes.",
          "icon": "🔄"
        },
        {
          "title": "Team Collaboration",
          "description": "Fostered collaboration with various teams to align AI initiatives with broader organizational goals.",
          "icon": "🤝"
        },
        {
          "title": "Data Quality Assurance",
          "description": "Implemented quality assurance measures to enhance the accuracy and reliability of training datasets.",
          "icon": "📚"
        }
      ],
      "keyProjects": [
        {
          "name": "AI Development Initiative",
          "description": "Engaged in an initiative aimed at advancing AI applications through innovative training methods."
        },
        {
          "name": "Performance Analysis",
          "description": "Contributed to the use of a framework for analyzing AI performance metrics, driving continuous improvement."
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
              className={`relative px-4 py-2 flex-shrink-0 ${activeCompany === index ? 'text-[#8EC38E]' : 'text-[#A0A0A8]'}`}
              whileHover={{ 
                y: -2,
                color: '#8EC38E',
                transition: { duration: 0.3 }
              }}
            >
              <span className="text-sm block mb-1">{exp.period}</span>
              <span className="block font-light">{exp.company}</span>
              {activeCompany === index && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8EC38E]"
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
            <motion.div 
              className="bg-[#1C1C22]/30 p-6 rounded-lg border border-[#32323A] mb-8"
              whileHover={{
                boxShadow: '0 10px 30px -15px rgba(142, 195, 142, 0.2)',
                borderColor: '#8EC38E',
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-2xl text-[#E8E8E8] font-light mb-2">{experiences[activeCompany].role}</h3>
              <p className="text-[#A0A0A8] mb-4">{experiences[activeCompany].description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {experiences[activeCompany].technologies.map((tech, index) => (
                  <motion.span 
                    key={index} 
                    className="px-3 py-1 bg-[#32323A] text-[#8EC38E] rounded-full text-sm"
                    whileHover={{
                      backgroundColor: '#8EC38E',
                      color: '#0B0B0F',
                      transition: { duration: 0.3 }
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {experiences[activeCompany].achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#1C1C22]/30 p-6 rounded-lg border border-[#32323A]"
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 30px -15px rgba(142, 195, 142, 0.6)',
                    borderColor: '#8EC38E',
                    transition: { duration: 0.3 }
                  }}
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
                  className="bg-[#1C1C22]/30 p-6 rounded-lg border border-[#32323A]"
                  whileHover={{
                    y: -5,
                    boxShadow: '0 10px 30px -15px rgba(142, 195, 142, 0.6)',
                    borderColor: '#8EC38E',
                    transition: { duration: 0.3 }
                  }}
                >
                  <h5 className="text-[#8EC38E] text-lg mb-2">{project.name}</h5>
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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  const tabContent = {
    story: <ExpandedStory />,
    experience: <InteractiveTimeline />,
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
          <h2 className="text-5xl font-light text-center text-[#E8E8E8] mb-6 tracking-wide" data-aos="fade-up">About Me</h2>
          <LuxuryDivider />
          
          {/* Personal Info and Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div  data-aos="fade-right" data-aos-delay="200">
              <InteractiveImage />
            </div>
            <div className="flex flex-col justify-center" data-aos="fade-left" data-aos-delay="400">
              <h3 className="text-2xl font-light text-[#E8E8E8] mb-6">Johnathon Crowder</h3>
              <p className="text-[#A0A0A8] mb-8 leading-relaxed">
              As a full-stack developer with 5+ years of experience, I excel at creating comprehensive web applications that enhance user engagement and satisfaction. My proficiency in both front-end and back-end technologies allows me to craft solutions that are not only functional but also visually appealing. I am driven by a passion for innovation and a commitment to quality, always seeking to collaborate with others to produce exceptional outcomes.              </p>
              <InteractiveStats />
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="600">
            {Object.keys(tabContent).map((tab) => (
              <motion.button
                key={tab}
                className={`mx-4 px-6 py-2 rounded-lg ${activeTab === tab ? 'bg-[#8EC38E] text-[#0B0B0F]' : 'text-[#A0A0A8]'}`}
                whileHover={{ 
                  y: -2,
                  boxShadow: '0 5px 15px -5px rgba(142, 195, 142, 0.6)',
                }}
                whileTap={{ y: 0 }}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>
          
          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <div data-aos="fade-up" data-aos-delay="800">
              {tabContent[activeTab]}
            </div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
            data-aos="fade-up" data-aos-delay="1000"
          >
            <motion.a 
              href="#contact" 
              className="inline-block px-8 py-4 border border-[#8EC38E] text-[#8EC38E] hover:bg-[#8EC38E] hover:text-[#0B0B0F] transition-all duration-300 rounded-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px -15px rgba(142, 195, 142, 0.6)',
              }}
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
