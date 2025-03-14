// import { Footer } from "../../Footer";
import { alertsAll } from "../../../../consts/alerts";
import { ControlsPanelAdminPage } from "../ControlsPanelAdminPage";
import { Search } from "../Search/Search";
import { useState } from "react";
import { AlertRowTitle } from "./AlertRowTitle";
import { SortFiltrTagButtons } from "./sortFiltrTagButtons";
import { AlertRow } from "./AlertRow";
import { TabsHeader } from "../TabsHeader/TabsHeader";

export function Alert() {
  const [data, setData] = useState(alertsAll);
  const sortByButtons = ['polices' , 'request' , 'employees' , 'notes' , 'alerts' , 'agent'];
  const [isTag , setIsTag] = useState(false);
  const additionalOptions = () => (
    <div className="additionalOptions flex">
      <button className="filter-button active">All</button>
      <button className="filter-button">New Request</button>
      <button className="filter-button">Active</button>
      <button className="filter-button">Pending</button>
      <button className="filter-button">Cancelled</button>
      <button className="filter-button">Change Request</button>
    </div>
  );
  return (
    <div>
      <ControlsPanelAdminPage />
      <Search data={data} setData={setData} defaultData={alertsAll}/>
      <TabsHeader/>
      <div className="business-list">
        <SortFiltrTagButtons data={data} setData={setData} sortByButtons={sortByButtons} defaultData={alertsAll} isTag={isTag} setIsTag={setIsTag} additionalOptions={additionalOptions}/>
        <div className="business-list-container">
          <AlertRowTitle isTag={isTag}/>
          <div className="container-for-content" id="place-for-business-card">
            {data.map((el, i) => {
              return <AlertRow key={i} el={el} i={i} isTag={isTag} data={data} setData={setData}/>;
            })}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
