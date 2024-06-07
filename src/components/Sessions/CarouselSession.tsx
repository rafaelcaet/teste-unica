import { DotCarousel } from "../Carousels/DotCarousel";

export const CarouselSession = () => {
  return (
    <div className="flex flex-col bg-black dark:bg-white w-full h-full px-8 py-12">
      <div className="text-center flex flex-col gap-[26px] ">
        <p className="text-xl font-normal leading-[26px]">
          Abra novas portas para o seu futuro
        </p>
      </div>
      <div className="flex flex-col gap-9 pt-12 pb-[45px]">
        <DotCarousel />
      </div>
    </div>
  );
};
