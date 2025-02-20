import { useState } from "react";
import { ControlsPanelAdminPage } from "../ControlsPanelAdminPage";
import { Search } from "../Search/Search";
import { SortFiltrButtons } from "../SortFiltrButtons.jsx/SortFiltrButtons";
import { CustomersRowTitle } from "./CustomersRowTitle";
import { CustomerRow } from "./CustomersRow";
import { customersAdmin } from "../../../../consts/customersAdmin";
import { TabsHeader } from "../TabsHeader/TabsHeader";
import { Link } from "react-router-dom";

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
  const toogleOptionLink = () => (
      <div className="" style={{display:'flex' , alignItems:'center'}}>
        <Link to={'/business'}
          className={`sortFiltrButtons-button`}
          style={{ borderRadius: "20px 0 0 20px" }}
        >
          Business
        </Link>
        <Link to={'/customers'}
          className={`sortFiltrButtons-button active`}
          style={{ borderRadius: "0 20px 20px 0" }}
        >
          Customers
        </Link>
      </div>
  );
  const additionalOptions = () => (
    <div className="additionalOptions flex">
      <button className="filter-button active">All</button>
      <button className="filter-button">New Request</button>
      <button className="filter-button">Active</button>
      <button className="filter-button">Pending</button>
      <button className="filter-button">Cancelled</button>
      <button className="filter-button">Empty</button>
    </div>
  );
  

  return (
    <div>
      <ControlsPanelAdminPage />
      <Search data={data} setData={setData} defaultData={customersAdmin} />
      <TabsHeader />
      <div className="business-list">
        <SortFiltrButtons
          data={data}
          setData={setData}
          sortByButtons={sortByButtons}
          defaultData={customersAdmin}
          addCustomers={true}
          toggleLink = {toogleOptionLink}
          additionalOptions={additionalOptions}
        />
        <div className="business-list-container">
          <CustomersRowTitle />
          <div className="container-for-content" id="place-for-business-card">
            {data.map((el, i) => {
              return (
                <CustomerRow
                  key={i}
                  el={el}
                  i={i}
                  openRowId={openRowId}
                  setOpenRowId={setOpenRowId}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
