import React from 'react';

function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 opacity-30 animate-pulse">
          <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMjEyMTIxIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMzYTNhM2EiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')"}}>
          </div>
        </div>
      </div>
      <div className="relative z-10 flex items-center justify-center min-h-screen w-full px-4 py-16 md:py-24">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left side - Content */}
            <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-blue-400">Your Name</span>
              </h1>
              <div className="h-12 overflow-hidden mb-4">
                <ul className="animate-slide text-2xl md:text-3xl font-semibold text-gray-300">
                  <li>Full Stack Developer</li>
                  <li>Software Engineer</li>
                  <li>Problem Solver</li>
                  <li>Tech Enthusiast</li>
                </ul>
              </div>
              <p className="text-lg md:text-xl text-gray-400 mb-8">
                Crafting elegant solutions to complex problems through code.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="#projects" 
                  className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-md transition duration-300 hover:bg-blue-600 hover:shadow-lg"
                >
                  View My Projects
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-3 bg-transparent text-blue-400 font-semibold rounded-md border-2 border-blue-400 transition duration-300 hover:bg-blue-400 hover:text-gray-900 hover:shadow-lg"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right side - Code Animation */}
            <div className="w-full md:w-1/2 md:pl-8">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg overflow-hidden">
                <pre className="text-sm md:text-base">
                  <code className="language-javascript">
                    {`function Developer() {
  const [skills, setSkills] = useState([
    'JavaScript', 'React', 'Node.js',
    'Python', 'SQL', 'Git'
  ]);

  const levelUp = () => {
    // Always learning and improving
    setSkills([...skills, 'New Skill']);
  };

  useEffect(() => {
    const interval = setInterval(levelUp, 86400000); // Every day
    return () => clearInterval(interval);
  }, []);

  return (
    <CodingMachine skills={skills} />
  );
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;