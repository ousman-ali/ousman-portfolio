import React, { useState, useEffect } from 'react';
import './home.scss';
import { AnimatedShapes } from '../animatedShapes/AnimatedShapes';

const skills = ["React", "Node.js", "MongoDB", "Tailwind", "Sass", "Flutter", "Dart"];
const logos = ["react.webp", "nodejs-logo.png", "mongoDB-logo.png", "tailwind-logo.png", "sass-logo.png", "flutter-logo.png", "Dart-logo.png"];

const Home = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
    }, 2000); // change center word every 2s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-section">
      <div className="circle-container">
        <div className="center-skill">{skills[currentSkillIndex]}</div>

        <div className="circle">
          {logos.map((logo, index) => (
            <div key={index} className={`circle-item item-${index}`}>
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
      </div>
      <AnimatedShapes />
    </section>
  );
};

export default Home;
