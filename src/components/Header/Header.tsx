"use client";
import useColorMode from "@/hooks/useColorMode";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { SearchBar } from "./SearchBar";
export const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <div>
      <div className="bg-black opacity-70 flex justify-between px-8 items-center h-[35px]">
        <IoIosArrowDown className="text-white w-[9.13px] h-[14px]" />
        <Image alt="logo" src="logo.svg" width={71.58} height={22} />
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
