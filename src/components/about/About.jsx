import React from 'react';
import './about.scss';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm <strong>Ousman Ali</strong>, an Electrical Engineering graduate and self-taught software developer with a strong passion
          for building digital solutions. I specialize in developing web applications using the <strong>MERN stack</strong> and 
          creating mobile apps with <strong>Flutter</strong>. For over a year, I've been consistently working on personal projects 
          to enhance my skills and deepen my understanding. I'm a dedicated, detail-oriented developer who’s always eager to learn 
          and grow in the tech space.
        </p>

        <p>
          I enjoy working on both <strong>frontend</strong> and <strong>backend</strong> development,
           and I'm always exploring new technologies and tools to improve the user experience and development process.
          Beyond coding, I enjoy learning, sharing knowledge, 
          and collaborating with others to bring ideas to life.
        </p>
      </div>
    </section>
  );
};

export default About;
