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
    <div className="flex flex-col bg-black dark:bg-white w-full h-full p-8">
      <div className="text-center flex flex-col gap-[26px] ">
        <p className="text-xl font-normal leading-[26px]">
          Perfeita para você!
        </p>
        <p className="font-medium text-[15px] leading-5">
          Há mais de 22 anos, a Faculdade Única transforma vidas por meio da
          educação. Com base na ética e na responsabilidade social, com um preço
          justo e acessível, utilizamos a tecnologia e a inovação para ampliar
          as possibilidades de ensino de milhares de alunos espalhados por todo
          o país.
        </p>
      </div>
      <div className="flex flex-col gap-9 pt-12 pb-[45px]">
        {infoItems.map((infoItem, index) => (
          <InfoCard key={+index} {...infoItem} />
        ))}
      </div>
    </div>
  );
};