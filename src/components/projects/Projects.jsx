import './projects.scss';
import { DoneProjects } from '../../data';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Projects = () => {

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleRead = (index) => {
    setExpandedIndex(prevIndex => prevIndex === index ? null : index);
  };

  return (
    <section className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {DoneProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>

              <span onClick={() => toggleRead(index)} style={{ cursor: "pointer", color: "#38bdf8" }}>
                {expandedIndex === index ? (
                  <>Hide... <KeyboardArrowUpIcon /></>
                ) : (
                  <>Read... <KeyboardArrowDownIcon /></>
                )}
              </span>

              {expandedIndex === index && <p>{project.desc}</p>}

              <ul>
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  Live
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
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
