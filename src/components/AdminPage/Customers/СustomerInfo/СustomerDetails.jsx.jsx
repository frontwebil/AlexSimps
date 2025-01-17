import { useParams } from "react-router-dom";
import { ControlsPanelAdminPage } from "../../ControlsPanelAdminPage";
import { Search } from "../../Search/Search";
import { BusinessInfoTable } from "./СustomerDetails.jsxTable";
import { customersAdmin } from "../../../../../consts/customersAdmin";

export function CustomerDetails() {
  const { id } = useParams();
  const currentAgent = customersAdmin.find((item) => item.tax === id);

  return (
    <div>
      <ControlsPanelAdminPage />
      <Search current={currentAgent.name} />
      <BusinessInfoTable currentAgent={currentAgent} />
    </div>
  );
}
