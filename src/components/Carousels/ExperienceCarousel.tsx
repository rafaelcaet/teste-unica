"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../app/globals.css";
import { IUserExperience } from "@/types/IUserExperience";
import { ExperienceCard } from "../InfoCard/ExperienceCard";
import { useAttests } from "@/hooks/useAttests";

export const ExperienceCarousel = () => {
  const { experiences } = useAttests();
  console.log(experiences);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1415,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="xl:px-32 lg:px-32 md:px-48 px-9">
      <Slider {...settings} ref={sliderRef}>
        {experiences.map((attest, index) => (
          <ExperienceCard userExperience={attest} key={+index} />
        ))}
      </Slider>
    </div>
  );
};
