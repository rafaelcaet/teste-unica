import { BannerSession } from "@/components/Sessions/BannerSession";
import { BlackBarSession } from "@/components/Sessions/BlackBarSession";
import { CarouselSession } from "@/components/Sessions/CarouselSession";
import { InfoSession } from "@/components/Sessions/InfoSession";
import { VideoSession } from "@/components/Sessions/VideoSession";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* <Image alt="rectangle" src="rectangle.svg" fill className="z-[-1]" /> */}
      <BannerSession />
      <BlackBarSession />
      <InfoSession />
      <VideoSession />
      <CarouselSession />
    </div>
  );
}
