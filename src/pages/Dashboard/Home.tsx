import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import BasicTables from "../Tables/BasicTables";

export default function Home() {
  return (
    <>
      <div className="g gap-4 md:gap-6 dark:bg-gray-900 ">
        <EcommerceMetrics />
        <BasicTables />
      </div>
    </>
  );
}
