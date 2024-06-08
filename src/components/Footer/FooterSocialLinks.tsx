import Image from "next/image";
import Link from "next/link";

interface ISocialLinksItem {
  image: string;
  url: string;
}

const downloadAppsItems: ISocialLinksItem[] = [
  {
    image: "facebook-icon.svg",
    url: "/",
  },
  {
    image: "instagram-icon.svg",
    url: "/",
  },
  {
    image: "youtube-icon.svg",
    url: "/",
  },
];
export const FooterSocialLinks = () => {
  return (
    <div className="flex flex-col gap-[9.74px] leading-[22.32px] px-8 pb-[39.77px]">
      <p className="font-bold text-xs">Siga nossa faculdade:</p>
      <div className="flex gap-[5.38px] dark:bg-black/30  w-full max-w-[65px]">
        {downloadAppsItems.map((item, index) => (
          <Link href={item.url} key={index}>
            <Image
              alt={item.url}
              src={item.image}
              width={17.48}
              height={17.48}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
