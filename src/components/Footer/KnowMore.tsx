import Link from "next/link";

interface IFooterMenuItem {
  title: string;
  url: string;
}

const footerMenuItems: IFooterMenuItem[] = [
  {
    title: "Pós-Graduação",
    url: "/",
  },
  {
    title: "Segunda Graduação",
    url: "/",
  },
  {
    title: "Disciplinas Isoladas",
    url: "/",
  },
  {
    title: "Cursos Livres",
    url: "/",
  },
];
export const KnowMore = () => {
  return (
    <div className="flex flex-col text-[10px] gap-[22px] leading-[22.32px] px-8 py-[22px]">
      <p className="font-bold text-xs">Saiba mais da Faculdade Única</p>
      <div className="flex flex-col md:flex-row gap-[22px]">
        {footerMenuItems.map((item, index) => (
          <div className="flex flex-col gap-1.5" key={index}>
            <p className="font-bold text-xs ">{item.title}</p>
            <Link className="font-medium text-[10px]" href={item.url}>
              Ver nossos cursos
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
