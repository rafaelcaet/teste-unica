import { poppins } from "@/app/layout";
import { InfoCard } from "../InfoCard/InfoCard";
import { IInfoCard } from "@/types/IInfoCard";

const infoItems: IInfoCard[] = [
  {
    infoText: "+ de 489 mil Alunos certificadoso",
    imageURL: "info-certified.svg",
  },
  {
    infoText: "+ de 250 Polos em todo Brasil",
    imageURL: "info-map.svg",
  },
  {
    infoText: "+ de 900 cursos em diversas modalidades de ensino",
    imageURL: "info-computer.svg",
  },
];

export const InfoSession = () => {
  return (
    <div className="flex flex-col dark:text-black w-full h-full p-8">
      <div className="text-center flex flex-col  xl:px-[158.5px] gap-[26px] ">
        <p className="xl:text-[32px] text-xl leading-[26px] xl:leading-[41.6 px]">
          Perfeita para você!
        </p>
        <p
          className={`font-medium text-[15px] xl:text-[22px] text-center leading-[19.5px] xl:leading-[28.6px] ${poppins.className}`}
        >
          Há mais de 22 anos, a Faculdade Única transforma vidas por meio da
          educação. Com base na ética e na responsabilidade social, com um preço
          justo e acessível, utilizamos a tecnologia e a inovação para ampliar
          as possibilidades de ensino de milhares de alunos espalhados por todo
          o país.
        </p>
      </div>
      <div
        className={`flex flex-col items-center xl:flex-row xl:justify-center gap-9 pt-12 pb-[45px] ${poppins.className}`}
      >
        {infoItems.map((infoItem, index) => (
          <InfoCard key={+index} {...infoItem} />
        ))}
      </div>
    </div>
  );
};
