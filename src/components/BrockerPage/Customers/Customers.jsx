import { useState } from "react";
import { customersAgent } from "../../../../consts/customersAgent";
import { CustomersTabsTitle } from "./CustomersTabsTitle";
import { ControlsPanelBrockerPage } from "../ControlsPanelBrockerPage";
import { Search } from "../../AdminPage/Search/Search";
import { CustomersRowTitle } from "./CustomersRowTitle";
import { CustomerRow } from "./CustomersRow";

export function Customers() {
  const [data, setData] = useState(customersAgent);
  // const sortByButtons = ['tax' , 'notes' , 'alerts' , 'status' , 'country']
  return (
    <div>
      <ControlsPanelBrockerPage />
      <Search data={data} setData={setData} defaultData={customersAgent} />
      <CustomersTabsTitle />
      <div className="business-list">
        {/* <SortFiltrButtons data={data} setData={setData} sortByButtons={sortByButtons} defaultData={customersAdmin}/> */}
        <div className="business-list-container">
          <CustomersRowTitle />
          <div className="container-for-content" id="place-for-business-card">
            {data.map((el, i) => {
              return <CustomerRow el={el} i={i} />
            })}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
