import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import "./App.css";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import { useEffect, useState } from "react";


function App() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app">
      <Navbar isMobile={isMobile} />
      <div className="layout">
        {!isMobile && (
          <div className="leftLayout">
            <Sidebar />
          </div>
        )}  
        <div className="rightLayout">
          {isMobile ? (
          <div className="mobileSidebar" id="homeSidebar" >
            <Sidebar />
          </div>
          ) : (
            <div id="home" >
              <Home />
            </div>
            
          )}
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Blog />
          <Contact />
        </div>   
      </div>
    </div>
  )
}

export default App
