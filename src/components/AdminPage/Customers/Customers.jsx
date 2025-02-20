import { useState } from "react";
import { ControlsPanelAdminPage } from "../ControlsPanelAdminPage";
import { Search } from "../Search/Search";
import { SortFiltrButtons } from "../SortFiltrButtons.jsx/SortFiltrButtons";
import { CustomersRowTitle } from "./CustomersRowTitle";
import { CustomerRow } from "./CustomersRow";
import { customersAdmin } from "../../../../consts/customersAdmin";
import { TabsHeader } from "../TabsHeader/TabsHeader";

export function Customers() {
  const [data, setData] = useState(customersAdmin);
  const sortByButtons = [
    "tax",
    "notes",
    "alerts",
    "status",
    "country",
    "companyName",
    "agent",
  ];
  const [openRowId, setOpenRowId] = useState(null);

  return (
    <div>
      <ControlsPanelAdminPage />
      <Search data={data} setData={setData} defaultData={customersAdmin} />
        <TabsHeader/>
      <div className="business-list">
        <SortFiltrButtons
          data={data}
          setData={setData}
          sortByButtons={sortByButtons}
          defaultData={customersAdmin}
          addCustomers={true}
        />
        <div className="business-list-container">
          <CustomersRowTitle />
          <div className="container-for-content" id="place-for-business-card">
            {data.map((el, i) => {
              return <CustomerRow key={i} el={el} i={i} openRowId={openRowId}
              setOpenRowId={setOpenRowId}/>;
            })}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
