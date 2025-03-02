import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import StockTable from "../../components/tables/BasicTables/StockTable";
import { Add } from "iconsax-react";

export default function StockPage() {
  return (
    <>
      <PageBreadcrumb pageTitle="Stock" />

      <div className="space-y-4">
        <ComponentCard
          title="Stock de medicamentos"
          btn={<Add size={20} color={"#fff"} />}
        >
          <StockTable />
        </ComponentCard>
      </div>
    </>
  );
}
