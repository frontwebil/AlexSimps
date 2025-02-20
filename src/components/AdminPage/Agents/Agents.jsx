import { useState } from "react";
import { AgentsData } from "../../../../consts/agents";
import { ControlsPanelAdminPage } from "../ControlsPanelAdminPage";
import { Search } from "../Search/Search";
import { SortFiltrButtons } from "../SortFiltrButtons.jsx/SortFiltrButtons";
import { AgentsRowTitle } from "./AgentsRowTitle";
import { AgentsRow } from "./AgentsRow";
import { TabsHeader } from "../TabsHeader/TabsHeader";

export function Agents() {
  const [data, setData] = useState(AgentsData);
  const sortByButtons = ["customers", "trends" , "status", "city", "role"];
  const filtrBy = [];
  return (
    <div>
      <ControlsPanelAdminPage />
      <Search data={data} setData={setData} defaultData={AgentsData} />
      <TabsHeader/>
      <div className="business-list">
        <SortFiltrButtons
          data={data}
          setData={setData}
          sortByButtons={sortByButtons}
          defaultData={AgentsData}
          filtrBy={filtrBy}
        />
        <div className="business-list-container">
          <AgentsRowTitle />
          <div className="container-for-content" id="place-for-business-card">
            {data.map((el, i) => {
              return <AgentsRow key={i} el={el} i={i} />;
            })}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
