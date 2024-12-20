import React from "react";
import "./Blog.css";

const Blog = () => {
  const posts = [
    {
      title: "Ensino Bilíngue e o Futuro",
      description: "Como o ensino bilíngue prepara as crianças para um mundo globalizado.",
      date: "12 de Dezembro, 2024",
      image: "https://img.freepik.com/fotos-gratis/linda-femea-com-sorriso-lindo-sentado-em-pose-de-lotus-com-computador-prateado-nas-pernas-demonstrando-a-bandeira-americana-sobre-parede-cinza_171337-246.jpg?t=st=1734621071~exp=1734624671~hmac=52303883848329774899d8f57176697e60e80081610dc7fe0b19d4fb670fdd67&w=900",
    },
    {
      title: "Desenvolvimento Socioemocional",
      description: "A importância do aprendizado socioemocional na infância.",
      date: "10 de Dezembro, 2024",
      image: "https://img.freepik.com/fotos-gratis/mulher-europeia-encantadora-e-positiva-aperta-as-maos-contra-o-peito-expressa-gratidao-pelo-presente-agradece-a-ajuda-usa-oculos-redondos-e-camisa-branca_273609-39286.jpg?t=st=1734621099~exp=1734624699~hmac=c866b0c1883145b0d9b8a5ef6fd46685258dbbc4a01626dcd1625f553a234d71&w=900",
    },
    {
      title: "Valores Cristãos na Educação",
      description: "Como os valores cristãos moldam o caráter e a ética dos alunos.",
      date: "8 de Dezembro, 2024",
      image: "https://img.freepik.com/fotos-gratis/pessoa-orando-com-cruz-e-livro-sagrado_23-2148629970.jpg?t=st=1734621127~exp=1734624727~hmac=2212d77fc67c20d72d9678d023c2465e1d7b7452c0e618e6db1dfdea60598f74&w=900",
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
