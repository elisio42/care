import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import Pacientes from "../../components/tables/BasicTables/Pacientes";

export default function TablePacientes() {
  return (
    <>
      <PageBreadcrumb pageTitle="Pacientes" />
      <div className="space-y-4">
        <ComponentCard title="Pacientes no sistema">
          <Pacientes />
        </ComponentCard>
      </div>
    </>
  );
}
