import React from 'react';

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Vue.js", level: 70 },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 80 },
        { name: "Django", level: 70 },
        { name: "SQL", level: 75 },
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "GraphQL", level: 60 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{category.category}</h3>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;