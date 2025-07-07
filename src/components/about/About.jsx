// src/components/About.jsx
import React from 'react';
import './about.scss';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm <strong>Ousman Ali</strong>, a passionate <strong>Full-Stack Developer</strong> with a focus on building fast, accessible, and modern web applications.
          I specialize in the <strong>MERN stack</strong> and love solving real-world problems through clean, scalable code.
        </p>

        <p>
          I enjoy working on both frontend and backend development, and I'm always exploring new technologies and tools to improve the user experience and development process.
        </p>

        <p>
          Beyond coding, I enjoy learning, sharing knowledge, and collaborating with others to bring ideas to life.
        </p>
      </div>
    </section>
  );
};

export default About;
