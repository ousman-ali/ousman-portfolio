import './sidebar.scss';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import { useState } from 'react';

const Sidebar = () => {

  const [showOpen, setShowOpen] = useState(false);

  return (
    <aside className="sidebar">
      <div className="profile">
        <img src="/coder-profile-image.jpg" className="profile-pic" />
        <p className="bio">
          Hi, I'm <span>Ousman Ali</span>, a passionate full stack web and mobile app developer.
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

      <div className="breakLine">
        <hr className='divider' />
          { showOpen ?
            <button onClick={()=>setShowOpen(!showOpen)} className="showButton"><span>Show Less</span><ArrowDropUpOutlinedIcon /></button>
            :<button onClick={()=>setShowOpen(!showOpen)} className="showButton"><span>Show More</span><ArrowDropDownOutlinedIcon /></button>
          }
        <hr className='divider' />
      </div>
      
      { showOpen &&
        <>
        <div className="connectLinks">
        <div className="connectIcon">
          <EmailOutlinedIcon className='icon'/>
          <span>oasgerbalhl@gmail.com</span>
        </div>
        <div className="connectIcon">
          <PhoneInTalkOutlinedIcon className='icon' />
          <span>+251963649826</span>
        </div>
        <div className="connectIcon">
          <LocationOnOutlinedIcon className='icon' />
          <span>Bole | Addis Ababa | ET</span>
        </div>
      </div>

      <hr className='divider' />

      <nav className="social-links">
        <h2>CONNECT WITH ME</h2>
        <div className="socials">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub className='icon'/>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin className='icon' style={{color: "#0077B5"}}/>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaInstagram className='icon' style={{color: "#E4405F"}}/>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" aria-label="Twitter">
            <FaTelegram className='icon' style={{color: "#0088CC"}}/>
          </a>
        </div>
      </nav>
      <footer className="sidebar-footer">
        <div className='footer'>
          <CopyrightOutlinedIcon className='icon' /> {new Date().getFullYear()} 
         <span>Ousman Ali</span> 
        </div>
      </footer>
      </>
      }
    </aside>
  );
};

export default Sidebar;
