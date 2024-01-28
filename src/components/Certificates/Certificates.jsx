import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Certificates.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import android from "../../img/androidcert.jpg";
import first from "../../img/firstyear.jpg";
import java from "../../img/javaCertificate.jpg";
import maths from "../../img/mathsquiz.jpg";
import science from "../../img/sciencequiz.jpg";
import webdesing from "../../img/webdesing.jpg";
import web from "../../img/web.png";

const Certificates = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="certificate" id="certificate">
    {/* heading */}
    <span style={{color: darkMode?'white': ''}}>My Academics</span>
    <span>Certificates</span>

    {/* slider */}
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className="portfolio-slider"
    >
      <SwiperSlide>
        <img src={android} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={java} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={web} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={first} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={webdesing} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={maths} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={science} alt="" />
      </SwiperSlide>
    </Swiper>
  </div>
  );
};

export default Certificates;
