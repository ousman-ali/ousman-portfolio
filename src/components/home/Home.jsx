import React, { useState, useEffect } from 'react';
import './home.scss';

const skills = ["React", "Node.js", "MongoDB", "Express", "Tailwind", "TypeScript"];

const Home = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2000); // change center word every 2s

    return () => clearInterval(interval);
  }, []);

  return (
    <section id='home' className="home-section">
      <div className="circle-container">
        <div className="center-skill">{skills[currentSkillIndex]}</div>

        <div className="circle">
          {skills.map((skill, index) => (
            <div key={index} className={`circle-item item-${index}`}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
