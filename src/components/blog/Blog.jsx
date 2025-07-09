import "./blog.scss";
import { blogPosts } from "../../data";

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
