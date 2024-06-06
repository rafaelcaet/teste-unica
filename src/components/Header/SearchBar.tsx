import Image from "next/image";
import { SearchInput } from "../Inputs/SearchInput";

export const SearchBar = () => {
  return (
    <div className="bg-[#49494966] opacity-40 flex gap-[15px] pl-[25px] pr-8 py-[13px]">
      <Image alt="menu" src="menu-icon.svg" width={22} height={10} />
      <SearchInput placeholder="Pesquise por um curso" />
    </div>
  );
};
