import React, { useState } from "react";

import "./Carousel.css";

import Slide from "./Slide/Slide.jsx";

function Carousel(props) {
  const dark = props.isDark;

  const data = props.data;
  const n = data.length;

  const [pageNo, setPageNo] = useState(0);

  const prevSlide = () => {
    setPageNo(pageNo === 0 ? n - 1 : pageNo - 1);
  };
  const nextSlide = () => {
    setPageNo(pageNo === n - 1 ? 0 : pageNo + 1);
  };

  return (
    <div className={`allContainer ${dark ? "dark" : ""}`}>
      <div className="CarouselContainer">
        <div className={`arrow left ${dark? "dark":""}`} onClick={prevSlide}></div>
        {data.map((obj, idx) => {
          return pageNo === idx && <Slide key={idx} obj={obj} idx={idx} />;
        })}
        <div className={`arrow right ${dark? "dark":""}`} onClick={nextSlide}></div>
      </div>
      <div className="slideButton">
        {data.map((ele, idx) => {
          return (
            <div
              key={idx}
              className={`SlideBtn ${pageNo === idx ? "active" : ""} ${
                dark ? "dark" : ""
              }`}
              onClick={() => setPageNo(idx)}
            />
          );
        })}
      </div>
      <div className={`Goleft ${pageNo === 0 ? "indicatoractive" : ""}`}>
        <span>GO LEFT</span>
        <div className={`line ${dark ? "dark" : ""}`}></div>
      </div>
    </div>
  );
}

export default Carousel;
