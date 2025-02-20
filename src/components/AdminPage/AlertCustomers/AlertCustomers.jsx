// import { Footer } from "../../Footer";
import { useState } from "react";
import { ControlsPanelAdminPage } from "../ControlsPanelAdminPage";
import { TabsHeader } from "../TabsHeader/TabsHeader";
import { SortFiltrTagButtons } from "../Alert/sortFiltrTagButtons";
import { Search } from "../Search/Search";
import { alertsCustomer } from "../../../../consts/alertsCustomer";
import { AlertCustomersTitle } from "./AlertCustomersTitle";
import { AlertCustomersRow } from "./AlertCustomersRow";

export function AlertCustomers() {
  const [data, setData] = useState(alertsCustomer);
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
      <Search data={data} setData={setData} defaultData={alertsCustomer}/>
      <TabsHeader/>
      <div className="business-list">
        <SortFiltrTagButtons data={data} setData={setData} sortByButtons={sortByButtons} defaultData={alertsCustomer} isTag={isTag} setIsTag={setIsTag} additionalOptions={additionalOptions}/>
        <div className="business-list-container">
          <AlertCustomersTitle/>
          <div className="container-for-content" id="place-for-business-card">
            {data.map((el, i) => {
              return <AlertCustomersRow key={i} el={el} i={i}/>;
            })}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
