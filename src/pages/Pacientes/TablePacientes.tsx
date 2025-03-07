import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne";

export default function TablePacientes() {
  return (
    <>
      <PageBreadcrumb pageTitle="Pacientes" />
      <div className="space-y-4">
        <ComponentCard title="Tabela de pacientes">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
