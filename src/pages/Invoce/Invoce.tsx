import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import Button from "../../components/ui/button/Button";
import InvoceCard from "./Header";



export default function Invoce() {
  return (
    <>
      <PageBreadcrumb pageTitle="Relatório" />
      <div className="rounded-2xl mb-6 border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <div className="flex">
          <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
            <img src="/images/user/owner.jpg" alt="User" />
          </span>
          <div>
            <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
              Mendes Julio Cezar
            </p>
            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
              ID: #658
            </p>
          </div>
        </div>
      </div>
      <ComponentCard title="Relatório" desc="ID: #658">
        <InvoceCard />
        <div className="flex justify-end border-t border-gray-200  pt-8 dark:border-gray-800">
          <Button variant="primary">Enviar relatório</Button>
        </div>
      </ComponentCard>
    </>
  );
}
