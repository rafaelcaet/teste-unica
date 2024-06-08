import { IInfoCard } from "@/types/IInfoCard";
import Image from "next/image";

export const InfoCard: React.FC<IInfoCard> = ({ imageURL, infoText }) => {
  return (
    <div className="rounded-lg p-[2px] bg-gradient-to-r from-[#A68BFF]/100 to-[#7500FF00]/0 ">
      <div className="flex flex-col gap-[42px] py-[45px] pl-[34px] bg-black dark:bg-white dark:text-black rounded-lg text-white">
        <Image alt="info-card" src={imageURL} width={82} height={82} />
        <p className="text-[25px] font-bold leading-8">{infoText}</p>
      </div>
    </div>
  );
};
