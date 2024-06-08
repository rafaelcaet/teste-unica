import Image from "next/image";

export const Emec = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 px-8 pb-[33px]">
      <p className="w-[147px] font-bold text-xs leading-[18px]">
        Consulte aqui o cadastro da Instituição no Sistema e-MEC
      </p>
      <Image alt="emec-qrcode" src="emec-qrcode.svg" width={79} height={131} />
    </div>
  );
};
