import { useParams } from "react-router-dom";
import { ControlsPanelAdminPage } from "../../ControlsPanelAdminPage";
import { Search } from "../../Search/Search";
import { AgentsData } from "../../../../../consts/agents";
import { AgentInfoTable } from "./AgentInfoTable";

export function AgentInfo() {
  const { id } = useParams();
  const currentAgent = AgentsData.find((item)=>item.id === id);
  return (
    <div>
      <ControlsPanelAdminPage />
      <Search current={currentAgent.user}/>
      <AgentInfoTable currentAgent={currentAgent}/>
    </div>
  );
}
