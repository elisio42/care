import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import DefaultInputs from "../../components/form/form-elements/DefaultInputs";
import InputGroup from "../../components/form/form-elements/InputGroup";
import SelectInputs from "../../components/form/form-elements/SelectInputs";
import Button from "../../components/ui/button/Button";

export default function FormElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Agendar" />
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <DefaultInputs />
          <SelectInputs />
        </div>
        <div className="space-y-6">
          <InputGroup />
          <div className="flex justify-end">
            <Button>Cadastrar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
