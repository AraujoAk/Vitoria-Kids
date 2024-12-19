import React from "react";
import "./Blog.css";

const Blog = () => {
  const posts = [
    {
      title: "Ensino Bilíngue e o Futuro",
      description: "Como o ensino bilíngue prepara as crianças para um mundo globalizado.",
      date: "12 de Dezembro, 2024",
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Desenvolvimento Socioemocional",
      description: "A importância do aprendizado socioemocional na infância.",
      date: "10 de Dezembro, 2024",
      image: "https://via.placeholder.com/400x200",
    },
    {
      title: "Valores Cristãos na Educação",
      description: "Como os valores cristãos moldam o caráter e a ética dos alunos.",
      date: "8 de Dezembro, 2024",
      image: "https://via.placeholder.com/400x200",
    },
  ];

  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <h2 className="blog-title">Últimos <span>Posts do Blog</span></h2>
        <p className="blog-subtitle">
          Acompanhe nossos artigos e novidades sobre educação.
        </p>

        <div className="blog-posts">
          {posts.map((post, index) => (
            <div key={index} className="blog-post">
              <img src={post.image} alt={post.title} className="blog-post-image" />
              <div className="blog-post-content">
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-post-description">{post.description}</p>
                <p className="blog-post-date">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
