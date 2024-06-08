import Image from "next/image";
import { SearchInput } from "../Inputs/SearchInput";
import Link from "next/link";
const subMenuHeader = [
  { url: " /", name: "Vidas Transformadas" },
  { url: "/", name: "Blog" },
  { url: "/", name: "FAQ" },
];

export const SearchBar = () => {
  return (
    <div className="bg-[#49494966] opacity-40 flex gap-[15px] px-[123px] pr-8 py-[13px]">
      <Image alt="logo" src="logo.svg" width={71.58} height={22} />
      <SearchInput placeholder="Pesquise por um curso" />
      <div className="flex gap-[19px] items-center">
        <select className="bg-transparent text-white">
          <option className="bg-transparent text-white" value="Graduação">
            Nossas Áreas
          </option>
        </select>
        {subMenuHeader.map((item, index) => (
          <Link
            className="text-white text-[17px] leading-5"
            key={index}
            href={item.url}
          >
            {item.name}
          </Link>
        ))}
        <button className="text-[10px] px-[22px] text-white leading-3 py-1.5 border h-max w-max border-white rounded-[3px]">
          JÁ SOU ALUNO
        </button>
      </div>
    </div>
  );
};
