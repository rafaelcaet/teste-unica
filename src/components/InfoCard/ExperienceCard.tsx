"use client";
import { IUserExperience } from "@/types/IUserExperience";
import Image from "next/image";

interface IExperienceCard {
  userExperience: IUserExperience;
}

export const ExperienceCard: React.FC<IExperienceCard> = ({
  userExperience,
}) => {
  return (
    <div
      className={`flex flex-col gap-[51.66px] justify-center px-[38.65px] items-center xl:w-[384px] w-[300px] rounded-md shadow-[10px_10px_#000000]/20  bg-[#A68BFF66]/40 h-full min-h-[416.41px]`}
    >
      <p className="text-[9px] text-center h-[160px] font-light leading-[13.5px] ">
        {userExperience.attest}
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex gap-5">
          <Image
            className="rounded-full "
            alt="user-image"
            src={userExperience.image}
            width={54}
            height={54}
          />
          <div className="flex flex-col pt-2 gap-[9.13px]">
            <p className="text-10 font-semibold leading-3">
              {userExperience.name}
            </p>
            <p className="text-[7px] font-normal leading-[8.4px]">
              {userExperience.role}
            </p>
          </div>
        </div>
        <Image
          className="rounded-full"
          alt="google-rating"
          src={userExperience.rating}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};
