import TableTwo from "./TableTwo";

type InvoiceType = {
  name: string;
  place: string;
  date: string;
};

export default function InvoiceCard() {
  const invoices: InvoiceType[] = [
    {
      name: "Zain Geidt",
      place: "2560, Rua Amílcar Cabral, Benguela, Angola",
      date: "11 Março, 2027",
    },
    {
      name: "John Doe",
      place: "1280, Avenida Hoji Ya Henda, Luanda, Angola",
      date: "15 Março, 2027",
    },
  ];

  return (
    <>
      <div className="">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between mb-14">
          {invoices.map((invoice, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 gap-4 lg:flex lg:items-center lg:gap-7 2xl:gap-x-32">
                <div
                  className={`${index === 1 ? "lg:text-right" : "text-left"} `}
                >
                  <p className="mb-2 text-sm leading-normal text-gray-500 dark:text-gray-400">
                    {index === 0 ? "De" : "Para"}
                  </p>
                  <p
                    className={`text-md mb-2 font-medium text-gray-800 dark:text-white/90`}
                  >
                    {invoice.name}
                  </p>
                  <p className="mb-2 text-sm flex leading-normal text-gray-500 dark:text-gray-400">
                    {invoice.place}
                  </p>

                  <div>
                    <p className="text-sm leading-normal text-gray-500 dark:text-gray-400">
                      <span>Data: </span>
                      <p>{invoice.date}</p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>

          <div>
            <TableTwo />
            <div className="text-sm text-right pt-8 leading-normal text-gray-500 dark:text-gray-400">
             <div className="mb-2">
             <p>Sub Total amount: $3,098 </p>
             <p>Vat (10%): $312 </p>
             </div>
              <span className="text-xl mb-2 font-medium text-gray-800 dark:text-white/90">Total : $3,410 </span>
            </div>
        </div>
      </div>
    </>
  );
}
