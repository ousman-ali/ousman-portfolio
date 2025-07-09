import './skills.scss';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li><img src="react.webp" />React</li>
            <li><img src="JavaScript-Logo.png" />JavaScript</li>
            <li><img src="tailwind-logo.png"  />Tailwind CSS</li>
            <li><img src="sass-logo.png" />Sass</li>
            <li><img src="flutter-logo.png" />Flutter-Mobile</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Backend</h3>
          <ul>
            <li><img src="nodejs-logo.png" />Node.js</li>
            <li><img src="express-logo.png"  />Express.js</li>
            <li><img src="mongoDB-logo.png" />MongoDB</li>
            <li><img src="rest-api-logo.png" />REST APIs</li>
          </ul>
        </div>

        <div className="skill-category">
          <h3>Tools & Others</h3>
          <ul>
            <li><img src="git.png" />Git & GitHub</li>
            <li><img src="postman.png" />Postman</li>
            <li><img src="vercel.png" />Vercel</li>
            <li><img src="docker-logo.png" />Docker</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
