import { poppins } from "@/app/layout";
import Image from "next/image";

export const BlackBarSession = () => {
  return (
    <div className="flex flex-col text-white items-center justify-center h-full max-h-[134px] w-full relative">
      <Image
        alt="black-bar"
        src="black-bar-1.svg"
        fill
        objectFit="cover"
        className="w-full h-full z-[-1]"
      />
      <p className={`text-xl font-semibold ${poppins.className}`}>
        CRIANDO HOJE O SEU AMANHÃ!
      </p>
    </div>
  );
};
