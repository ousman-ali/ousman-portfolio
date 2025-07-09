import { useState } from 'react';
import './navbar.scss';

const Navbar = ({ isMobile }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        {'Ousman Ali'.split('').map((letter, i) => (
          <span
            key={i}
            style={{ marginRight: letter === ' ' ? '0.5rem' : '0' }} // Add margin if it's a space
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </div>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li><a href={ isMobile ? "#homeSidebar" : "#home"  } onClick={() => setOpen(false)} >Home</a></li>
        <li><a href="#about" onClick={() => setOpen(false)} >About</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)} >Skills</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)} >Projects</a></li>
        <li><a href="#resume" onClick={() => setOpen(false)} >Resume</a></li>
        <li><a href="#blog" onClick={() => setOpen(false)} >Blog</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)} >Contact</a></li>
      </ul>

      <div
        className={`hamburger ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
