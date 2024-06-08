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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current: number) => setCurrentSlide(current),
    customPaging: (index: number) => (
      <div
        className={
          index === currentSlide
            ? "bg-[#7500FF] rounded-full w-3"
            : "bg-gray-500  rounded-full w-3"
        }
      >
        <div className="w-3 h-3 rounded-full gap-[7px]"></div>
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
          <div key={index} className="xl:px-3">
            <img
              src={image}
              className="h-full w-full object-cover max-w-[154px] sm:max-w-full xl:max-w-[284px] xl:h-[349px]"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
