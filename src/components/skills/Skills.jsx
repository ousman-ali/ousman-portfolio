// src/components/Skills.jsx
import React from 'react';
import './skills.scss';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>My Skills</h2>

      <div className="skills-grid">
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5</li>
            <li>CSS3 / Sass</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>REST APIs</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Tools & Others</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Vite</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>Netlify / Vercel</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
