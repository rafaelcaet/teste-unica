import Link from "next/link";

interface IFooterMenuItem {
  title: string;
  url: string;
}

const footerMenuItems: IFooterMenuItem[] = [
  {
    title: "Teste vocacional",
    url: "/",
  },
  {
    title: "Seja um embaixador",
    url: "/",
  },
  {
    title: "Fale com a gente",
    url: "/",
  },
  {
    title: "Quem somos",
    url: "/",
  },
  {
    title: "Privacidade",
    url: "/",
  },
  {
    title: "Termos de Uso",
    url: "/",
  },
  {
    title: "Trabalhe Conosco",
    url: "/",
  },
];
export const FooterMenu = () => {
  return (
    <div className="flex flex-col text-[10px] font-medium leading-[22.32px] px-8 py-[19px]">
      {footerMenuItems.map((item, index) => (
        <Link key={index} href={item.url}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};
