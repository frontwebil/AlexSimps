// import { Footer } from "../../Footer";
import { ControlsPanelAdminPage } from "../ControlsPanelAdminPage";
import { Search } from "../Search/Search";
import { SortFiltrButtons } from "../SortFiltrButtons.jsx/SortFiltrButtons";
import { businessAll } from "../../../../consts/business";
import { BusinessRow } from "./BusinessRow";
import { BusinessRowTitle } from "./BusinessRowTitle";
import { useState } from "react";
import { TabsHeader } from "../TabsHeader/TabsHeader";

export function Business() {
  const [data, setData] = useState(businessAll);
  const sortByButtons = ['polices' , 'request' , 'employees' , 'notes' , 'alerts']
  return (
    <div>
      <ControlsPanelAdminPage />
      <Search data={data} setData={setData} defaultData={businessAll}/>
      <TabsHeader/>
      <div className="business-list">
        <SortFiltrButtons data={data} setData={setData} sortByButtons={sortByButtons} defaultData={businessAll}/>
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
