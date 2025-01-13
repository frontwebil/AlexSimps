import { useEffect, useState } from "react";
import { ControlsPanelAdminPage } from "../../ControlsPanelAdminPage";
import { Search } from "../../Search/Search";
import { SortFiltrButtons } from "../../SortFiltrButtons.jsx/SortFiltrButtons";
import { BusinessCustomersInfoRow } from "./BusinessCustomersInfoRow";
import { BusinessCustomerInfoRowTitle } from "./BusinessCustomersInfoRowTitle";
import { useParams } from "react-router-dom";
import { businessAll } from "../../../../../consts/business";
import { customersAdmin } from "../../../../../consts/customersAdmin";

export function BusinessCustomersInfo() {
  const {id} = useParams()
  const currentCompany = businessAll.find((el)=>el.idCompany === id).companyName;
  const [defaultCustomers, setDefaultCustomers] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const filteredCustomers = customersAdmin.filter(
      (el) => el.companyName === currentCompany
    );
    setDefaultCustomers(filteredCustomers);
    setData(filteredCustomers);
  }, [currentCompany]);
  const sortByButtons = ["tax", "notes", "alerts", "status", "country"];
  return (
    <div>
      <ControlsPanelAdminPage />
      <Search data={data} setData={setData} defaultData={defaultCustomers} current={currentCompany}/>
      <div className="business-list">
        <SortFiltrButtons
          data={data}
          setData={setData}
          sortByButtons={sortByButtons}
          defaultData={defaultCustomers}
        />
        <div className="business-list-container">
          <BusinessCustomerInfoRowTitle />
          <div className="container-for-content" id="place-for-business-card">
            {data.map((el, i) => {
              return <BusinessCustomersInfoRow key={i} el={el} i={i} />;
            })}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
