import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

interface Relatorio {
  id: number;
  nome: string;
  idade: string;
  servico: string;
  preco: string;
}

// Dados do relatório
const relatorios: Relatorio[] = [
  {
    id: 1,
    nome: "Mariana Silva",
    idade: "28 anos",
    servico: "Consulta de Rotina",
    preco: "R$ 250,00",
  },
  {
    id: 2,
    nome: "Carlos Mendes",
    idade: "35 anos",
    servico: "Ortopedia",
    preco: "R$ 320,00",
  },
  {
    id: 3,
    nome: "Fernanda Lima",
    idade: "42 anos",
    servico: "Cardiologia",
    preco: "R$ 400,00",
  },
  {
    id: 4,
    nome: "João Pereira",
    idade: "50 anos",
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
                  ID
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Nome
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
              {relatorios.map((relatorio) => (
                <TableRow key={relatorio.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {relatorio.id}
                    </span>
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {relatorio.nome}
                      </span>
                      <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        {relatorio.idade}
                      </span>
                    </div>
                  </TableCell>

                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {relatorio.servico}
                    </span>
                  </TableCell>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {relatorio.preco}
                    </span>
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
