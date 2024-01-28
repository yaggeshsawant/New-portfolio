import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import travel from "../../img/travel.png";
import temperature from "../../img/temperature.png";
import portfolio from "../../img/portfolio.png";
import chatApp from "../../img/chatApp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={travel} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={portfolio} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={chatApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={temperature} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
