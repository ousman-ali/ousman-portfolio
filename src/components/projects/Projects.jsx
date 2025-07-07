// src/components/Projects.jsx
import React from 'react';
import './projects.scss';

const projects = [
  {
    title: "Social Media App",
    description:
      "A full-stack social media platform with user authentication, real-time chat, and media uploads.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    image: "/images/social-app.png", // replace with your own image path
    live: "https://yoursocialapp.vercel.app",
    code: "https://github.com/yourusername/social-app",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built with React and Vite, showcasing my work and skills.",
    technologies: ["React", "Vite", "Sass"],
    image: "/images/portfolio.png",
    live: "https://yourportfolio.com",
    code: "https://github.com/yourusername/portfolio",
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live
                </a>
                <a href={project.code} target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
