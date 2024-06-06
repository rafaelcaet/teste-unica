import { BannerSession } from "@/components/Sessions/BannerSession";
import { BlackBarSession } from "@/components/Sessions/BlackBarSession";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <Image alt="rectangle" src="rectangle.svg" fill className="z-[-1]" /> */}
      <BannerSession />
    </div>
  );
}
