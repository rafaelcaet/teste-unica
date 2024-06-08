const blueCardItems = ["blue-card-1.svg", "blue-card-2.svg", "blue-card-3.svg"];

export const BlueCardSession = () => {
  return (
    <div className="flex flex-col gap-[52px]  w-full h-full p-8">
      <div className="text-center flex flex-col gap-[26px] ">
        <p className="font-normal text-xl text-white dark:text-black leading-[26px]">
          Mais que educação, uma transformação
        </p>
      </div>
      <div className="flex xl:flex-row xl:justify-center xl:gap-5 flex-col gap-12 pb-[45px]">
        {blueCardItems.map((blueCardItem, index) => (
          <div key={index}>
            <img
              src={blueCardItem}
              className="h-full w-full"
              alt={`${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
