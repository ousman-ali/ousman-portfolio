import React from "react";
import "./featuredProjects.scss";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "Awesome React app.",
    image: "https://via.placeholder.com/300x180?text=Project+1",
    url: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Project Two",
    description: "Cool Node.js backend.",
    image: "https://via.placeholder.com/300x180?text=Project+2",
    url: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Project Three",
    description: "Mobile app demo.",
    image: "https://via.placeholder.com/300x180?text=Project+3",
    url: "#",
    featured: true,
  },
  // add more projects here
];

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(p => p.featured);

  // Duplicate the list for infinite scroll illusion
  const doubledProjects = [...featuredProjects, ...featuredProjects];

  return (
    <section className="featured-projects" id="projects">
      <h2>Featured Projects</h2>
      <div className="marquee">
        <div className="marquee__group">
          {doubledProjects.map(({ id, title, description, image, url }, idx) => (
            <a
              href={url}
              key={`${id}-${idx}`} // unique key for duplicated items
              className="project-card"
              target="_blank"
              rel="noreferrer"
            >
              <img src={image} alt={title} />
              <div className="project-info">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
