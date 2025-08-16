import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Header = () => (
  <header style={{ position: "relative" }}>
    <div
      style={{
        position: "absolute",
        zIndex: 10,
        color: "black",
        padding: "10%",
        borderRadius: "8px",
      }}
    >
      <h1 style={{ margin: 0 }}>Dominus</h1>
      <p style={{ margin: 0 }}>Onde a modernidade encontra o conforto</p>
    </div>

    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      style={{ width: "100%", height: "700px" }}
    >
      <SwiperSlide>
        <img
          src="/img/image1.png"
          alt="Slide 1"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/img/image2.png"
          alt="Slide 2"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/img/image3.png"
          alt="Slide 3"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </SwiperSlide>
    </Swiper>
  </header>
);

export default Header;