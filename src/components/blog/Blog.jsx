// src/components/Blog.jsx
import "./blog.scss";

const blogPosts = [
  {
    title: "Understanding the MERN Stack",
    summary: "A beginner-friendly guide to building full-stack web apps with MongoDB, Express, React, and Node.js.",
    date: "June 25, 2025",
    link: "https://yourblog.com/mern-stack-guide",
  },
  {
    title: "Why You Should Learn React in 2025",
    summary: "Explore why React is still one of the top choices for front-end developers and how to get started.",
    date: "May 14, 2025",
    link: "https://yourblog.com/why-learn-react",
  },
  {
    title: "Deploying Full-Stack Apps on Vercel",
    summary: "Step-by-step tutorial on deploying your MERN stack project using Vercel’s free hosting platform.",
    date: "April 2, 2025",
    link: "https://yourblog.com/deploy-vercel",
  },
];

const Blog = () => {
  return (
    <section className="blog-section" id="blog">
      <h2>Latest Blog Posts</h2>
      <div className="blog-list">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-info">
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <span>{post.date}</span>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
