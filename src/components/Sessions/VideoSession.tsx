import { poppins } from "@/app/layout";
import Image from "next/image";

export const VideoSession = () => {
  return (
    <div className="flex flex-col  w-full px-8 h-full items-center xl:justify-center xl:flex-row gap-[34px] pb-12">
      <div className="text-center flex flex-col md:items-start gap-[26px] ">
        <p className="text-xl xl:max-w-[587px] xl:text-start xl:text-[32px] xl:leading-[41.6px] font-normal leading-[26px]">
          Construa seu amanhã conosco
        </p>
        <p
          className={`font-medium text-[15px] xl:text-[22px] xl:leading-7 md:text-left md:w-full md:max-w-[586px] leading-5 ${poppins.className}`}
        >
          Com foco em inovação e qualidade, seja nos cursos presenciais ou
          online, utilizamos as mais modernas tecnologias para uma comunicação
          mais eficiente e eficaz entre professor e aluno, destinados à formação
          de profissionais qualificados, capazes de transformar a realidade
          socioeconômica do país.
        </p>
      </div>
      <div className="md:w-full md:max-w-[582px]">
        <Image
          src="notebook-image.svg"
          alt="notebook-image"
          width={1000}
          height={500}
        />
      </div>
    </div>
  );
};
