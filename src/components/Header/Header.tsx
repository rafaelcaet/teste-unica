"use client";
import useColorMode from "@/hooks/useColorMode";
import Image from "next/image";
import { SearchBar } from "./SearchBar";
import Link from "next/link";

const menuHeader = [
  { url: " /", name: "Gradução" },
  { url: "/", name: "Segunda Graduação" },
  { url: "/", name: "Pós-graduação" },
  { url: "/", name: "Disciplinas Isoladas" },
  { url: "/", name: "Cursos Grátis" },
  { url: "/", name: "Bolsas de Estudo" },
];

export const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div className="hidden xl:flex flex-col">
      <div className=" bg-black flex opacity-70 justify-between py-6 px-[123px] items-center h-[35px]">
        {menuHeader.map((item, index) => (
          <Link
            className="text-white text-[17px] leading-5"
            key={index}
            href={item.url}
          >
            {item.name}
          </Link>
        ))}
        <button
          onClick={() => {
            if (typeof setColorMode === "function")
              setColorMode(colorMode === "light" ? "dark" : "light");
          }}
        >
          <Image
            alt="dark-mode"
            src="dark-mode-icon.svg"
            width={22}
            height={22}
          />
        </button>
      </div>
      <SearchBar />
    </div>
  );
};
