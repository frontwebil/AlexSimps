// import { Footer } from "../../Footer";
import { ControlsPanelAdminPage } from "../ControlsPanelAdminPage";
import { Search } from "../Search/Search";
import { SortFiltrButtons } from "../SortFiltrButtons.jsx/SortFiltrButtons";
import { businessAll } from "../../../../consts/business";
import { BusinessRow } from "./BusinessRow";
import { BusinessRowTitle } from "./BusinessRowTitle";
import { useState } from "react";
import { TabsHeader } from "../TabsHeader/TabsHeader";
import { Link } from "react-router-dom";

export function Business() {
  const [data, setData] = useState(businessAll);
  const sortByButtons = ['polices' , 'request' , 'employees' , 'notes' , 'alerts']
  const toogleOptionLink = () => (
      <div className="" style={{display:'flex' , alignItems:'center'}}>
        <Link to={'/business'}
          className={`sortFiltrButtons-button active`}
          style={{ borderRadius: "20px 0 0 20px" }}
        >
          Business
        </Link>
        <Link to={'/customers'}
          className={`sortFiltrButtons-button `}
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
      <Search data={data} setData={setData} defaultData={businessAll}/>
      <TabsHeader/>
      <div className="business-list">
        <SortFiltrButtons data={data} setData={setData} sortByButtons={sortByButtons} defaultData={businessAll} toggleLink={toogleOptionLink} additionalOptions={additionalOptions}/>
        <div className="business-list-container">
          <BusinessRowTitle />
          <div className="container-for-content" id="place-for-business-card">
            {data.map((el, i) => {
              return <BusinessRow key={i} el={el} i={i} />;
            })}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
