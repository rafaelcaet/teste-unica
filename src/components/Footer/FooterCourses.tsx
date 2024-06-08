import Link from "next/link";

const footerCoursesItems = [
  "Administração",
  "Análise e Desenvolvimento de Sistemas",
  "Artes Visuais",
  "Arquitetura e Urbanismo",
  "Biblioteconomia",
  "Ciência da Computação",
  "Ciências Biológicas",
  "Ciências Contábeis",
  "Ciências Sociais",
  "Educação Especial",
  "Bacharelado em Educação Física",
  "Licenciatura em Educação Física",
  "Ensino Religioso",
  "Empreendedorismo",
  "Engenharia Ambiental e Sanitária",
  "Engenharia Civil",
  "Engenharia de Controle e Automação",
  "Engenharia de Produção",
  "Engenharia Elétrica",
  "Engenharia Mecânica",
  "Filosofia",
  "Física",
  "Geografia",
  "Geoprocessamento",
  "Gestão Ambiental",
  "Gestão de Cidades Inteligentes",
  "Gestão de Recursos Humanos",
  "Gestão Financeira",
  "Gestão Pública",
  "História",
  "Bacharelado em Letras-Libras",
  "Licenciatura em Letras-Libras",
  "Letras-Português",
  "Letras-Português e Espanhol",
  "Letras-Português e Inglês",
  "Logística",
  "Marketing",
  "Matemática",
  "Pedagogia",
  "Processos Gerenciais",
  "Psicopedagogia",
  "Publicidade e Propaganda",
  "Química",
  "Segurança no Trabalho",
  "Serviço Social",
  "Serviços Jurídicos e Notariais",
  "Sistemas de Telecomunicações",
  "Sistemas para Internet",
  "Sistemas de Informação",
  "Teologia",
];

//TODO: Adjust component
export const FooterCourses = () => {
  return (
    <div className="flex flex-col text-white dark:text-black text-[10px] gap-[22px] leading-[22.32px] px-8 py-[22px]">
      <p className="font-bold text-xs">Graduação</p>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-4">
        {footerCoursesItems.map((course, index) => (
          <Link
            href="/"
            key={+index}
            className="max-w-[154px] font-medium text-[10px]"
          >
            {course}
          </Link>
        ))}
      </div>
    </div>
  );
};
