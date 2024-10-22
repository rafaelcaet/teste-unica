import { GraduationCard } from "../InfoCard/GraduationCard";
import { poppins } from "@/app/layout";

const graduationBannerItems = [
  {
    imageURL: "graduation-banner-2.svg",
    infoText: "GRADUAÇÃO",
  },
  {
    imageURL: "graduation-banner-3.svg",
    infoText: "PÓS ONLINE",
  },
  {
    imageURL: "graduation-banner-4.svg",
    infoText: "SEGUNDA GRADUAÇÃO",
  },
  {
    imageURL: "graduation-banner-1.svg",
    infoText: "DISCIPLINAS ISOLADAS",
  },
];

export const GraduationSession = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="text-center flex text-white dark:text-black flex-col gap-1 ">
        <p className="font-normal text-xl  leading-[26px]">
          Sua jornada é Única
        </p>
        <p className={`font-normal text-[15px] leading-6 ${poppins.className}`}>
          Escolha a melhor modalidade para você!
        </p>
      </div>
      <div className="grid grid-cols-2 md:flex pt-12">
        {graduationBannerItems.map((graduationBanner, index) => (
          <GraduationCard
            key={+index}
            imageURL={graduationBanner.imageURL}
            infoText={graduationBanner.infoText}
          />
        ))}
      </div>
    </div>
  );
};
