import "./resume.scss";

const Resume = () => {
  return (
    <section className="resume-section" id="resume">
      <h2>Resume</h2>

      <div className="resume-content">
        <div className="resume-block">
          <h3>Experience</h3>
          <div className="item">
            <h4>Graduation Project</h4>
            <span>Bus Booking System |May 2024 - Jul</span>
            <p>
              Developed a full stack booking web app for the first time which
              incorporates User and Admin page. The project earned an A+ grade.
            </p>
          </div>
          <div className="item">
            <h4>Web Developer Intern | Online</h4>
            <span>Prodigy InfoTech | Jun 2024 | 1 Month</span>
            <p>
              I have developed four different UIs using react which earned me a
              cirtificate and recommendation letter.
            </p>
          </div>
        </div>

        <div className="verticalLine" />

        <div className="resume-block">
          <h3>Education</h3>
          <div className="item">
            <h4>Bachelor of Electrical Engineering</h4>
            <span>Bahir Dar University | 2019 - 2024</span>
            <p>
              I was trying to master both hardware and software engineering. but
              ended up focusing on software engineering and web development.
            </p>
          </div>
        </div>

        <hr className="mobile-divider" />

        <div className="resume-block">
          <h3>Technical-Skills</h3>
          <ul className="skills-list">
            <li>ReactJS / JavaScript (ES6+)</li>
            <li>HTML5 / CSS3 / Sass</li>
            <li>Node.js / ExpressJS</li>
            <li>Git / GitHub</li>
            <li>REST APIs / MongoDB</li>
            <li>Flutter & Dart</li>
            <li>Laravel & php</li>
            <li>Next.js</li>
          </ul>
        </div>

        <div className="verticalLine" />

        <div className="resume-block" style={{ height: "100px" }}>
          <h3>Soft-Skills</h3>
          <ul className="skills-list">
            <li>Communication</li>
            <li>Team Work</li>
            <li>Problem Solving</li>
            <li>Leadership</li>
          </ul>
        </div>
      </div>

      <a
        href="oas-pro-cv.pdf"
        download
        className="btn-download"
        aria-label="Download Resume"
      >
        Download Full Resume
      </a>
    </section>
  );
};

export default Resume;
