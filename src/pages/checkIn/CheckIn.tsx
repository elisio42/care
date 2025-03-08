import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import Badge from "../../components/ui/badge/Badge";
import Button from "../../components/ui/button/Button";

type filaDeAtendimentoType = {
  nome: string;
  status: string;
  horaChegada: string;
  imagem: string;
  urgente?: boolean;
};

export default function CheckIn() {
  const filaDeAtendimento: filaDeAtendimentoType[] = [
    {
      nome: "Ariana Grande",
      status: "Aguardando",
      horaChegada: "09:00",
      imagem: "/images/user/user-04.jpg",
      urgente: true,
    },
    {
      nome: "Justin Bieber",
      status: "Aguardando",
      horaChegada: "19:15",
      imagem: "/images/user/user-05.jpg",
    },
    {
      nome: "Selena Gomez",
      status: "Aguardando",
      horaChegada: "09:30",
      imagem: "/images/user/user-09.jpg",
    },
    {
      nome: "The Weeknd",
      status: "Aguardando",
      horaChegada: "09:45",
      imagem: "/images/user/user-08.jpg",
      urgente: true
    },
    {
        nome: "Petter Parker",
        status: "Aguardando",
        horaChegada: "01:05",
        imagem: "/images/user/user-10.jpg",
      },
      {
        nome: "Nick Minaj",
        status: "Aguardando",
        horaChegada: "00:05",
        imagem: "/images/user/user-33.jpg",
      
      },
  ];

  const handleOrdenarFilaDeAtendimento = (fila: filaDeAtendimentoType[]) => {
    return [...fila].sort((a, b) => {
      if (a.urgente && !b.urgente) {
        return -1;
      }

      if (!a.urgente && b.urgente) {
        return 1;
      }

      return a.horaChegada.localeCompare(b.horaChegada);
    });
  };

  const filaOrdenada = handleOrdenarFilaDeAtendimento(filaDeAtendimento);
  return (
    <>
      <PageBreadcrumb pageTitle="Check-in" />
      <div className="rounded-2xl mb-6 border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <div className="flex">
          <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
            <img src="/images/user/owner.jpg" alt="User" />
          </span>
          <div>
            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              Mendes Julio Cezar
            </p>
            <div className="flex gap-2 items-center text-sm font-normal text-gray-800 dark:text-white/90">
              <p>Status :</p> <Badge color="success">Em atendimento</Badge>
            </div>
          </div>
        </div>
      </div>
      <ComponentCard title="Fila de Atendimento">
        {filaOrdenada.map((pessoa, index) => (
          <div
            key={pessoa.nome}
            className="rounded-2xl mb-6 border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6"
          >
            <div className={`flex justify-between items-center`}>
              <div className="flex items-center">
                <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
                  <img src={pessoa.imagem} alt="User" />
                </span>
                <div>
                  <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                    {pessoa.nome}
                  </p>
                  <div className="flex gap-2 items-center text-sm font-normal text-gray-800 dark:text-white/90">
                    <p>Status :</p>{" "}
                    {pessoa.urgente ? (
                      <Badge color="error">Urgente</Badge>
                    ) : (
                      <Badge color="warning">{pessoa.status}</Badge>
                    )}
                  </div>
                </div>
              </div>
              {index === 0 ? (
                <Button variant="outline">Próximo</Button>
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {pessoa.horaChegada}
                </p>
              )}
            </div>
          </div>
        ))}
      </ComponentCard>
    </>
  );
}
