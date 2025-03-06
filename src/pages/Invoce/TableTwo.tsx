import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

import Badge from "../../components/ui/badge/Badge";

interface Consulta {
  id: number;
  paciente: {
    imagem: string;
    nome: string;
    idade: string;
  };
  servico: string;
  preco: string;
}

// Dados da tabela
const consultas: Consulta[] = [
  {
    id: 1,
    paciente: {
      imagem: "/images/user/user-08.jpg",
      nome: "Mariana Silva",
      idade: "28 anos",
    },
    servico: "Consulta de Rotina",

    preco: "R$ 250,00",
  },
  {
    id: 2,
    paciente: {
      imagem: "/images/user/user-04.jpg",
      nome: "Carlos Mendes",
      idade: "35 anos",
    },
    servico: "Ortopedia",

    preco: "R$ 320,00",
  },
  {
    id: 3,
    paciente: {
      imagem: "/images/user/user-01.jpg",
      nome: "Fernanda Lima",
      idade: "42 anos",
    },
    servico: "Cardiologia",

    preco: "R$ 400,00",
  },
  {
    id: 4,
    paciente: {
      imagem: "/images/user/user-03.jpg",
      nome: "João Pereira",
      idade: "50 anos",
    },
    servico: "Cardiologia",
    preco: "R$ 280,00",
  },
];

export default function TableTwo() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[910px]">
          <Table>
            {/* Cabeçalho da Tabela */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Paciente
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Data
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Serviço
                </TableCell>

                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Preço
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Corpo da Tabela */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {consultas.map((consulta) => (
                <TableRow key={consulta.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 overflow-hidden rounded-full">
                        <img
                          width={40}
                          height={40}
                          src={consulta.paciente.imagem}
                          alt={consulta.paciente.nome}
                        />
                      </div>
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {consulta.paciente.nome}
                        </span>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {consulta.paciente.idade}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {consulta.servico}
                  </TableCell>

                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {consulta.preco}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
