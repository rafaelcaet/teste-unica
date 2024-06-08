import Image from "next/image";
import { BlackBarSession } from "./BlackBarSession";
import { kronaOne, poppins } from "@/app/layout";

export const BannerSession = () => {
  return (
    <div className="flex flex-col items-center h-[524px] text-white justify-end py-[113px]">
      <div>
        <Image
          src="/test.svg"
          alt="banner-session"
          layout="fill"
          objectFit="cover"
          className="z-[-4]"
        />
      </div>
      <div className="flex flex-col w-full xl:pl-[126px] max-w-[316px] xl:max-w-full ">
        <p className="text-2xl xl:text-[60px] font-normal xl:leading-[75px] xl:max-w-[747px]">
          CONHEÇA A FACULDADE ÚNICA
        </p>
        <p
          className={`flex xl:hidden text-[22px] font-normal ${poppins.className}`}
        >
          Criando hoje o seu amanhã.
        </p>
      </div>
    </div>
  );
};
