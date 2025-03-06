export default function InvoceCard() {
  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
              Informações
            </h4>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-7 2xl:gap-x-32">
              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Nome
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  Mendes Julho Cezar
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Data
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  12/04/2025
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Hora
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  17:30
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  Pacientes atendidos
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  130
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
