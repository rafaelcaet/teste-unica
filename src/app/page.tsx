import { BannerSession } from "@/components/Sessions/BannerSession";
import { BlackBarSession } from "@/components/Sessions/BlackBarSession";
import { BlueCardSession } from "@/components/Sessions/BlueCardSession";
import { CarouselSession } from "@/components/Sessions/CarouselSession";
import { ExperienceSession } from "@/components/Sessions/ExperienceSession";
import { GraduationSession } from "@/components/Sessions/GraduationSession";
import { InfoSession } from "@/components/Sessions/InfoSession";
import { VideoSession } from "@/components/Sessions/VideoSession";
import { AttestsProvider } from "../../context/AttestsContext";

export default function Home() {
  return (
    <div className="flex flex-col ">
      {/* <Image alt="rectangle" src="rectangle.svg" fill className="z-[-1]" /> */}
      <BannerSession />
      <BlackBarSession />
      <div className="flex flex-col dark:bg-white dark:text-black text-white bg-black">
        <InfoSession />
        <VideoSession />
        <CarouselSession />
        <BlueCardSession />
        <GraduationSession />
        <ExperienceSession />
      </div>
    </div>
  );
}
