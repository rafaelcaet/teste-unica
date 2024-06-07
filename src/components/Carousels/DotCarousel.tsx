"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../app/globals.css";

const rectangleCarouselImages = [
  "rectangle1-dot-carousel.svg",
  "rectangle2-dot-carousel.svg",
  "rectangle3-dot-carousel.svg",
  "rectangle4-dot-carousel.svg",
];

export const DotCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1, // Changed to 1 for smoother navigation
    arrows: false,
    afterChange: (current: number) => setCurrentSlide(current),
    customPaging: (index: number) => (
      <div className={index === currentSlide ? "bg-red-500" : "bg-gray-500"}>
        <div className="w-3 h-3 rounded-full mx-1"></div>
      </div>
    ),
    dots: true,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center p-2">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="slider-container">
      <Slider {...settings} ref={sliderRef}>
        {rectangleCarouselImages.map((image, index) => (
          <div key={index} className="h-[200px] w-[300px]">
            <img
              src={image}
              className="h-full w-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
