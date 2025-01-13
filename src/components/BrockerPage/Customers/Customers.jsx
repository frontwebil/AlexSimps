import { useState } from "react";
import { customersAgent } from "../../../../consts/customersAgent";
import { CustomersTabsTitle } from "./CustomersTabsTitle";
import { ControlsPanelBrockerPage } from "../ControlsPanelBrockerPage";
import { CustomersRowTitle } from "./CustomersRowTitle";
import { CustomerRow } from "./CustomersRow";
import { Search } from "../Search/Search";
import { SortFiltrButtons } from "../SortFiltrButtons.jsx/SortFiltrButtons";

export function Customers() {
  const [data, setData] = useState(customersAgent);
  const sortByButtons = ['task' , 'status' , 'lastUpdate' , 'annualTill']
  return (
    <div>
      <ControlsPanelBrockerPage />
      <Search data={data} setData={setData} defaultData={customersAgent} />
      <CustomersTabsTitle />
      <SortFiltrButtons data={data} setData={setData} sortByButtons={sortByButtons} defaultData={customersAgent}/>
      <div className="business-list">
        {/* <SortFiltrButtons data={data} setData={setData} sortByButtons={sortByButtons} defaultData={customersAdmin}/> */}
        <div className="business-list-container">
          <CustomersRowTitle />
          <div className="container-for-content" id="place-for-business-card">
            {data.map((el, i) => {
              return <CustomerRow el={el} i={i} key={i}/>
            })}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
