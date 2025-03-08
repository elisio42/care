import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";

interface Medicine {
  id: number;
  name: string;
  price: string;
  quantity: number;
  category: string;
}

// Table data
const medicines: Medicine[] = [
  {
    id: 1,
    name: "Paracetamol",
    price: "R$ 15,00",
    quantity: 50,
    category: "Analgesico",
  },
  {
    id: 2,
    name: "Ibuprofen",
    price: "R$ 22,00",
    quantity: 30,
    category: "Anti-inflamatorio",
  },
  {
    id: 3,
    name: "Omeprazole",
    price: "R$ 18,50",
    quantity: 0,
    category: "Gastroprotetor",
  },
  {
    id: 4,
    name: "Amoxicillina",
    price: "R$ 45,00",
    quantity: 20,
    category: "Antibiotico",
  },
];

export default function StockTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[600px]">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
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
                  Preco
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Unidades
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Categoria
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {medicines.map((medicine) => (
                <TableRow key={medicine.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start text-gray-800 text-theme-sm dark:text-white/90">
                    {medicine.name}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {medicine.price}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {medicine.quantity}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {medicine.category}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    <Badge
                      size="sm"
                      color={medicine.quantity !== 0 ? "success" : "error"}
                    >
                      {medicine.quantity === 0 ? "Sem stock" : "Disponivel"}
                    </Badge>
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
