import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "./Hero.css";

const Hero = () => {
  const slides = [
    {
      image: "https://img.freepik.com/fotos-gratis/alunos-sabendo-a-resposta-certa_329181-14271.jpg?t=st=1734353841~exp=1734357441~hmac=d060232a0bd77948196af18c57a5f7599156c70fc0fcdbb5e0d368be5d8c4360&w=900",
      text: "Seu filho merece uma educação que ultrapassa barreiras culturais e eleva o aprendizado.",
    },
    {
      image: "https://img.freepik.com/fotos-gratis/grupo-de-criancas-brincando-com-brinquedos-rastejando-no-chao-no-jardim-de-infancia_839833-28001.jpg?t=st=1734353936~exp=1734357536~hmac=f583504f363f855c31aa565a070c8e19c7ee569bc3bf4956782b89d391f41a3d&w=900",
      text: "Educação Infantil, do Berçário ao 9º ano, com foco no desenvolvimento integral.",
    },
    {
      image: "https://img.freepik.com/fotos-premium/uma-colegial-com-um-livro-de-ingles-apoiou-a-mao-em-uma-pilha-de-livros-didaticos_222185-2854.jpg?w=900",
      text: "Projetos bilíngues, socioemocionais e robótica preparando seu filho para o futuro.",
    },
    {
      image: "https://img.freepik.com/fotos-premium/uma-familia-a-caminhar-por-um-caminho-num-parque_637279-6206.jpg?w=900",
      text: "Impacto positivo na vida das crianças e famílias, com valores cristãos e excelência.",
    },
  ];

  return (
    <section className="hero">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        effect="fade"
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="hero-slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="hero-image" />
            <div className="hero-text">{slide.text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;