import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import "./App.css";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import FeaturedProjects from "./components/featured/FeaturedProjects";


function App() {

  return (
    <div className="app">
      <Navbar />
      <div className="layout">
        <div className="leftLayout">
          <Sidebar />
        </div>  
        <div className="rightLayout">
          <Home />
          <FeaturedProjects />
          <About />
          <Skills />
          <Projects />
          <Blog />
          <Contact />
        </div>   
      </div>
    </div>
  )
}

export default App
