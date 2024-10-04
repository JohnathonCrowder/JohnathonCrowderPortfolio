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

const InteractiveTimeline = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative"
          onHoverStart={() => setSelectedIndex(index)}
          onHoverEnd={() => setSelectedIndex(null)}
        >
          <motion.div
            className={`flex p-6 rounded-lg cursor-pointer ${selectedIndex === index ? 'bg-[#1C1C22]/50' : ''}`}
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mr-8">
              <div className="text-[#B8A04A] text-xl font-light">{item.year}</div>
            </div>
            <div>
              <h3 className="text-[#E8E8E8] text-xl font-light mb-2">{item.title}</h3>
              <p className="text-[#A0A0A8] leading-relaxed">{item.description}</p>
              
              <AnimatePresence>
                {selectedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 space-y-2"
                  >
                    {item.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center"
                      >
                        <span className="text-[#B8A04A] mr-2">✦</span>
                        <span className="text-[#A0A0A8]">{achievement}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

function About() {
  const [activeTab, setActiveTab] = useState('story');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experienceItems = [
    {
      year: '2021',
      title: 'Senior Software Engineer at TechCorp',
      description: 'Led development of enterprise-scale applications.',
      achievements: [
        'Improved system performance by 40%',
        'Led a team of 5 developers',
        'Implemented microservices architecture',
        'Reduced deployment time by 60%'
      ]
    },
    {
      year: '2019',
      title: 'Full Stack Developer at InnovateSoft',
      description: 'Architected and developed full-stack solutions.',
      achievements: [
        'Increased user engagement by 25%',
        'Developed a component library',
        'Optimized database queries',
        'Implemented CI/CD pipeline'
      ]
    },
    {
      year: '2017',
      title: 'Frontend Developer at WebPioneers',
      description: 'Crafted responsive, user-centric interfaces.',
      achievements: [
        'Created responsive design system',
        'Reduced load time by 30%',
        'Implemented A/B testing',
        'Improved accessibility compliance'
      ]
    },
  ];

  const tabContent = {
    story: <ExpandedStory />,
    experience: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <h3 className="text-2xl font-light text-[#E8E8E8] mb-6">Professional Journey</h3>
        <InteractiveTimeline items={experienceItems} />
      </motion.div>
    ),
  };

  return (
    <section id="about" className="relative py-32 bg-[#0B0B0F]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

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