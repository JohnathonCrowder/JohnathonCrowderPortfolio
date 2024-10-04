import React from 'react';

function Projects() {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1', image: '/path-to-project1-image.jpg' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2', image: '/path-to-project2-image.jpg' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3', image: '/path-to-project3-image.jpg' },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;