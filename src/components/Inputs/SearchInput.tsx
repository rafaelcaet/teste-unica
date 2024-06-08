import Image from "next/image";
import { FaSearch } from "react-icons/fa";
interface ISearchInput {
  placeholder: string;
}
export const SearchInput: React.FC<ISearchInput> = ({ placeholder }) => {
  return (
    <div className="relative w-full xl:max-w-[355px]">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <Image
          alt="search-icon"
          src="search-icon.svg"
          width={12}
          height={11.54}
        />
      </span>
      <input
        type="text"
        className="border border-gray-300 rounded-sm w-full pl-[29px] pr-2 h-[22px] placeholder:text-[10px] placeholder:text-[#666464]"
        placeholder={placeholder}
      />
    </div>
  );
};
