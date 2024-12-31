import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./Hero.css";

// Importação dos vídeos
import video1 from "./carrosel.mp4";
import video2 from "./carrossel1.mp4";
import video3 from "./carrossel2.mp4";
import video4 from "./carrossel3.mp4";
import video5 from "./carrossel4.mp4";

const Hero = () => {
  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const videos = [video1, video2, video3, video4, video5]; // Lista dos vídeos

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevButtonRef.current;
      swiperInstance.params.navigation.nextEl = nextButtonRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <section className="hero">
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="hero-swiper"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index} className="hero-slide">
            <video
              src={video}
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;