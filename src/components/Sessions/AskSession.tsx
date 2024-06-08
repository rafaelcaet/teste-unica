const askSessionItems = [
  {
    title: "O que é Graduação?",
  },
  {
    title: "Como funciona a Graduação EaD?",
  },
  {
    title: "Por que fazer o EaD?",
  },
  {
    title: "Qual faculdade EaD escolher?",
  },
  {
    title: "Qual curso EaD fazer?",
  },
  {
    title: "Quem faz EaD pode fazer mestrado?",
  },
  {
    title: "Quem faz faculdade EaD tem formatura?",
  },
];

export const AskSession = () => {
  return (
    <div className="flex flex-col w-full h-full px-8 pt-12">
      <div className="text-center flex flex-col gap-[26px] ">
        <p className="text-[32px] font-normal leading-[26px]">
          Perguntas frequentes
        </p>
      </div>
      <div className="flex flex-col gap-9 pt-12 pb-[45px]">
        {askSessionItems.map((askSessionItem, index) => (
          <div key={index} className="flex flex-col gap-4">
            <div className="flex flex-row justify-between">
              <p className="text-white dark:text-black font-normal text-lg leading-[24.55px]">
                {askSessionItem.title}
              </p>
              <p className="border dark:border-black w-5 text-xl px-1 font-normal">
                X
              </p>
            </div>
            <div className="h-px w-full bg-white dark:bg-black" />
          </div>
        ))}
      </div>
    </div>
  );
};
