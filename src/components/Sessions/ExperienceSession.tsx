import Image from "next/image";
import { ExperienceCarousel } from "../Carousels/ExperienceCarousel";
import { poppins } from "@/app/layout";

export const ExperienceSession = () => {
  return (
    <div
      className={`relative flex flex-col text-white dark:text-white w-full h-full min-h-[616px] ${poppins.className}`}
    >
      <div className="absolute bg-[#7500FF] w-full h-full min-h-[616px]" />
      <p className="font-normal text-xl text-center pb-12 leading-[22px] px-8 pt-[51px] z-[99]">
        Quem faz a escolha certa, não se arrepende
      </p>
      <Image
        src="purple-shape.svg"
        alt="purple-shape"
        width={0}
        height={0}
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "482px",
        }}
        className="absolute right-0 bottom-0 "
      />
      <Image
        src="blue-shape.svg"
        alt="blue-shape"
        width={0}
        height={0}
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "482px",
        }}
        className="absolute right-0 top-0"
      />
      <ExperienceCarousel />
    </div>
  );
};
