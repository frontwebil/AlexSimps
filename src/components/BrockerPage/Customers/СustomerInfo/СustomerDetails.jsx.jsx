import { useParams } from "react-router-dom";
import { Search } from "../../Search/Search";
import { BusinessInfoTable } from "./СustomerDetails.jsxTable";
import { ControlsPanelBrockerPage } from "../../ControlsPanelBrockerPage";
import { customersAgent } from "../../../../../consts/customersAgent";

export function CustomerDetails() {
  const { id } = useParams();
  const currentAgent = customersAgent.find((item) => item.tax === id);

  return (
    <div>
      <ControlsPanelBrockerPage />
      <Search current={currentAgent.name} />
      <BusinessInfoTable currentAgent={currentAgent} />
    </div>
  );
}
