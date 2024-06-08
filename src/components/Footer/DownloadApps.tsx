import Image from "next/image";
import Link from "next/link";

interface IDownloadAppsItem {
  image: string;
  url: string;
}

const downloadAppsItems: IDownloadAppsItem[] = [
  {
    image: "play-store.svg",
    url: "/",
  },
  {
    image: "apple-store.svg",
    url: "/",
  },
];
export const DownloadApps = () => {
  return (
    <div className="flex flex-col gap-[12px] leading-[22.32px] px-8 pb-[41.15px]">
      <p className="font-bold text-xs">Baixe nosso App:</p>
      <div className="flex gap-[5.38px]">
        {downloadAppsItems.map((item, index) => (
          <Link href={item.url} key={index}>
            <Image alt={item.url} src={item.image} width={79} height={131} />
          </Link>
        ))}
      </div>
    </div>
  );
};
