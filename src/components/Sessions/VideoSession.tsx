import Image from "next/image";

export const VideoSession = () => {
  return (
    <div className="flex flex-col bg-black w-full px-8 h-full gap-[34px] pb-12">
      <div className="text-center flex flex-col gap-[26px] ">
        <p className="text-xl font-normal leading-[26px]">
          Construa seu amanhã conosco
        </p>
        <p className="font-medium text-[15px] leading-5">
          Com foco em inovação e qualidade, seja nos cursos presenciais ou
          online, utilizamos as mais modernas tecnologias para uma comunicação
          mais eficiente e eficaz entre professor e aluno, destinados à formação
          de profissionais qualificados, capazes de transformar a realidade
          socioeconômica do país.
        </p>
      </div>
      <div>
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
