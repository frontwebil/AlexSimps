import { useParams } from "react-router-dom";
import { BusinessInfoTable } from "./СustomerDetails.jsxTable";
import { InnerTagEditButtons } from "./InnerTagButtons";
import { UsersData } from "../../../../../consts/UsersData";
import { Search } from "../../Search/Search";
import { ControlsPanelAdminPage } from "../../../AdminPage/ControlsPanelAdminPage";

export function CustomerDetails() {
  const { id } = useParams();
  const currentAgent = UsersData.find((item) => item.tax === id);

  return (
    <div>
      <ControlsPanelAdminPage />
      <Search current={currentAgent.name} />
      <InnerTagEditButtons/>
      <BusinessInfoTable currentAgent={currentAgent} />
    </div>
  );
}
