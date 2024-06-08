import { poppins } from "@/app/layout";
import { DownloadApps } from "./DownloadApps";
import { Emec } from "./EMec";
import { FooterCourses } from "./FooterCourses";
import { FooterMenu } from "./FooterMenu";
import { FooterSocialLinks } from "./FooterSocialLinks";
import { KnowMore } from "./KnowMore";
import { AskSession } from "../Sessions/AskSession";
export const Footer = () => {
  return (
    <div
      className={`flex flex-col  bg-black text-white dark:bg-white dark:text-black ${poppins.className}`}
    >
      <AskSession />
      <FooterCourses />
      <div className="flex flex-col xl:flex-row  w-full">
        <FooterSocialLinks />
        <DownloadApps />
        <Emec />
      </div>
      <div className="h-px w-full bg-white dark:bg-black" />
      <KnowMore />
      <div className="h-px w-full bg-white dark:bg-black" />
      <FooterMenu />
      <div className="flex flex-col items-center leading-[22.32px] justify-center px-[63px] py-[14px] bg-[#7500FF] text-white font-medium text-[8px]">
        Copyright © 2023 – Desenvolvido por Grupo Prominas
      </div>
    </div>
  );
};
