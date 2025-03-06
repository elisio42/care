import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import DefaultInputs from "../../components/form/form-elements/DefaultInputs";
import InputGroup from "../../components/form/form-elements/InputGroup";
import SelectInputs from "../../components/form/form-elements/SelectInputs";
import Button from "../../components/ui/button/Button";

export default function FormElements() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Agendar" />
      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-6">
          <DefaultInputs />
          <SelectInputs />
          <InputGroup />
          <div className="flex justify-end">
            <Button>Cadastrar</Button>
          </div>
        </div>

      </div>
    </div>
  );
}
