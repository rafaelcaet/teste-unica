import { IInfoCard } from "@/types/IInfoCard";
import Image from "next/image";

export const InfoCard: React.FC<IInfoCard> = ({ imageURL, infoText }) => {
  return (
    <div className="rounded-lg p-[2px] max-w-[384px] bg-gradient-to-r from-[#A68BFF]/100 to-[#7500FF00]/0 ">
      <div className="flex flex-col gap-[29px] pt-[45px] h-[273px] xl:max-w-[384px] max-w-[327px]  pl-[34px] bg-black dark:bg-white dark:text-black rounded-lg text-white">
        <Image alt="info-card" src={imageURL} width={82} height={82} />
        <p className="xl:text-[28px] text-[22px] font-bold leading-8">
          {infoText}
        </p>
      </div>
    </div>
  );
};
