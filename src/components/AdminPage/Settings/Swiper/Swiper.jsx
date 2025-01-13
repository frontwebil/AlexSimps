import { useState } from "react";
import { SwiperSlides } from "./SwiperSlides";

export function Swiper() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function HandleNextSlide() {
    if (currentSlide === SwiperSlides.length - 1) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide(currentSlide + 1);
  }

  function HandlePrevSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(SwiperSlides.length - 1);
      return;
    }
    setCurrentSlide(currentSlide - 1);
  }

  return (
    <div className="settings-swiper">
      <div
        className="contols-admin-button-swiper-left"
        onClick={HandlePrevSlide}
      >
        <img
          src="image/icons/button-swiper-prev.svg"
          alt=""
          className="contols-button-swiper-image"
        />
        <p className="control-text-swiper">Back</p>
      </div>
      <div className="swiper-wrapper">{SwiperSlides[currentSlide]}</div>
      <div
        className="contols-admin-button-swiper-right"
        onClick={HandleNextSlide}
      >
        <img
          src="image/icons/button-swiper-next.svg"
          alt=""
          className="contols-button-swiper-image"
        />
        <p className="control-text-swiper">Next</p>
      </div>
    </div>
  );
}
