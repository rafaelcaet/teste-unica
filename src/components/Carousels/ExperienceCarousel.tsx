"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../app/globals.css";
import { IUserExperience } from "@/types/IUserExperience";
import { ExperienceCard } from "../InfoCard/ExperienceCard";
import { poppins } from "@/app/layout";

const userExperienceItems: IUserExperience[] = [
  {
    image: "user-image.svg",
    name: "John Doe",
    role: "Software Engineer",
    attest:
      "“A minha experiência como aluno da Faculdade Única foi maravilhosa, pois me possibilitou ter outra graduação superior (Licenciatura em Física) além de todo o arcabouço de conhecimento adquirido durante o curso, ajudando-me a estar bem preparado para o mercado de trabalho. Atualmente estou cursando outra segunda graduação (Licenciatura em Educação Física) e não tenho dúvida que será novamente uma experiência incrível. Além disso, a instituição de ensino é nota máxima no MEC e desejo que até o final desse curso ela alcance a etapa de ser Centro Universitário. Então só gratidão a toda a equipe da faculdade”",
    rating: "google-rating.svg",
  },
  {
    image: "user-image.svg",
    name: "Jane Doe",
    role: "Product Manager",
    attest:
      "“A minha experiência como aluno da Faculdade Única foi maravilhosa, pois me possibilitou ter outra graduação superior (Licenciatura em Física) além de todo o arcabouço de conhecimento adquirido durante o curso, ajudando-me a estar bem preparado para o mercado de trabalho. Atualmente estou cursando outra segunda graduação (Licenciatura em Educação Física) e não tenho dúvida que será novamente uma experiência incrível. Além disso, a instituição de ensino é nota máxima no MEC e desejo que até o final desse curso ela alcance a etapa de ser Centro Universitário. Então só gratidão a toda a equipe da faculdade”",
    rating: "google-rating.svg",
  },
  {
    image: "user-image.svg",
    name: "John Smith",
    role: "Data Analyst",
    attest:
      "“A minha experiência como aluno da Faculdade Única foi maravilhosa, pois me possibilitou ter outra graduação superior (Licenciatura em Física) além de todo o arcabouço de conhecimento adquirido durante o curso, ajudando-me a estar bem preparado para o mercado de trabalho. Atualmente estou cursando outra segunda graduação (Licenciatura em Educação Física) e não tenho dúvida que será novamente uma experiência incrível. Além disso, a instituição de ensino é nota máxima no MEC e desejo que até o final desse curso ela alcance a etapa de ser Centro Universitário. Então só gratidão a toda a equipe da faculdade”",
    rating: "google-rating.svg",
  },
  {
    image: "user-image.svg",
    name: "Jane Smith",
    role: "UX Designer",
    attest:
      "“A minha experiência como aluno da Faculdade Única foi maravilhosa, pois me possibilitou ter outra graduação superior (Licenciatura em Física) além de todo o arcabouço de conhecimento adquirido durante o curso, ajudando-me a estar bem preparado para o mercado de trabalho. Atualmente estou cursando outra segunda graduação (Licenciatura em Educação Física) e não tenho dúvida que será novamente uma experiência incrível. Além disso, a instituição de ensino é nota máxima no MEC e desejo que até o final desse curso ela alcance a etapa de ser Centro Universitário. Então só gratidão a toda a equipe da faculdade”",
    rating: "google-rating.svg",
  },
];

export const ExperienceCarousel = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="px-8">
      <Slider {...settings} ref={sliderRef}>
        {userExperienceItems.map((attest, index) => (
          <ExperienceCard userExperience={attest} key={+index} />
        ))}
      </Slider>
    </div>
  );
};
