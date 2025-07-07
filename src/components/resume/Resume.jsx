import './resume.scss';

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <h2>My Resume</h2>

      <div className="resume-content">
        <div className="resume-block">
          <h3>Experience</h3>
          <div className="item">
            <h4>Frontend Developer</h4>
            <span>Company ABC | Jan 2022 - Present</span>
            <p>Developed responsive web apps with React, improving user experience and performance.</p>
          </div>
          <div className="item">
            <h4>Web Developer Intern</h4>
            <span>Company XYZ | Jun 2021 - Dec 2021</span>
            <p>Assisted in building company website features using HTML, CSS, and JavaScript.</p>
          </div>
        </div>

        <div className="resume-block">
          <h3>Education</h3>
          <div className="item">
            <h4>Bachelor of Computer Science</h4>
            <span>University of Somewhere | 2018 - 2022</span>
            <p>Focused on software engineering and web development.</p>
          </div>
        </div>

        <div className="resume-block">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li>React / JavaScript (ES6+)</li>
            <li>HTML5 / CSS3 / Sass</li>
            <li>Node.js / Express</li>
            <li>Git / GitHub</li>
            <li>REST APIs / MongoDB</li>
          </ul>
        </div>
      </div>

      <a href="/resume.pdf" download className="btn-download" aria-label="Download Resume">
        Download Full Resume
      </a>
    </section>
  );
};

export default Resume;
