import './sidebar.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="" alt="Ousman Ali" className="profile-pic" />
        <p className="bio">
          Hi, I'm Ousman Ali, a passionate web developer specializing in React and modern web technologies.
        </p>
        <a
          href="/resume.pdf"
          download
          className="btn"
          aria-label="Download Resume"
        >
          Download Resume
        </a>
      </div>

      <nav className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" aria-label="GitHub">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          LinkedIn
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" aria-label="Twitter">
          Twitter
        </a>
      </nav>

      <div className="special">
        <p>🌟 Special Projects & Highlights</p>
        {/* Add any special content here */}
      </div>
    </aside>
  );
};

export default Sidebar;
