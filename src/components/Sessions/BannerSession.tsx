import Image from "next/image";
import { BlackBarSession } from "./BlackBarSession";

export const BannerSession = () => {
  return (
    <div>
      <div>
        <Image
          src="/test.svg"
          alt="banner-session"
          layout="fill"
          objectFit="cover"
          className="absolute z-[-4]"
        />
      </div>
      <div>
        <Image
          src="image-bg-text.svg"
          alt="image-bg-text"
          width={316}
          height={78}
          className="pt-[333px] pl-8"
        />
      </div>
      <BlackBarSession />
    </div>
  );
};
