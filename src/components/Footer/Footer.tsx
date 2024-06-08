import { DownloadApps } from "./DownloadApps";
import { Emec } from "./EMec";
import { FooterCourses } from "./FooterCourses";
import { FooterMenu } from "./FooterMenu";
import { FooterSocialLinks } from "./FooterSocialLinks";
import { KnowMore } from "./KnowMore";
export const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-white dark:bg-white dark:text-black">
      <FooterCourses />
      <FooterSocialLinks />
      <DownloadApps />
      <Emec />
      <div className="h-px w-full bg-white" />
      <KnowMore />
      <div className="h-px w-full bg-white" />
      <FooterMenu />
      <div className="bg-[#7500FF] text-white">
        Copyright © 2023 – Desenvolvido por Grupo Prominas
      </div>
    </div>
  );
};
