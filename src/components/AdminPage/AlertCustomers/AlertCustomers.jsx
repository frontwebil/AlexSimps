// import { Footer } from "../../Footer";
import { useState } from "react";
import { ControlsPanelAdminPage } from "../ControlsPanelAdminPage";
import { TabsHeader } from "../TabsHeader/TabsHeader";
import { SortFiltrTagButtons } from "../Alert/sortFiltrTagButtons";
import { Search } from "../Search/Search";
import { alertsCustomer } from "../../../../consts/alertsCustomer";
import { AlertCustomersTitle } from "./AlertCustomersTitle";
import { AlertCustomersRow } from "./AlertCustomersRow";
import {insuranceDataActive} from "../../../../consts/insuranceDataActive"
import { AlertsCustomerActivePendingRow } from "./AlertsCustomerActivePending.jsx/AlertsCustomerActivePendingRow";
import { AlertsCustomerActivePendingTitleRow } from "./AlertsCustomerActivePending.jsx/AlertsCustomerActivePendingTitleRow";
import { insuranceDataPending } from "../../../../consts/insuranceDataPending";

export function AlertCustomers() {
  const [data, setData] = useState(alertsCustomer);
  const sortByButtons = [
    "polices",
    "request",
    "employees",
    "notes",
    "alerts",
    "agent",
  ];
  const [isTag, setIsTag] = useState(false);
  const [activeOptions, setActiveOptions] = useState("All");
  const additionalOptions = () => (
    <div className="additionalOptions flex">
      <button
        className={`filter-button ${activeOptions === "All" ? "active" : ""}`}
        onClick={() => {
          setActiveOptions("All");
        }}
      >
        All
      </button>
      <button
        className={`filter-button ${activeOptions === "New" ? "active" : ""}`}
        onClick={() => {
          setActiveOptions("New");
        }}
      >
        New Request
      </button>
      <button
        className={`filter-button ${
          activeOptions === "Active" ? "active" : ""
        }`}
        onClick={() => {
          setActiveOptions("Active");
        }}
      >
        Active
      </button>
      <button
        className={`filter-button ${
          activeOptions === "Pending" ? "active" : ""
        }`}
        onClick={() => {
          setActiveOptions("Pending");
        }}
      >
        Pending
      </button>
      <button
        className={`filter-button ${
          activeOptions === "Cancelled" ? "active" : ""
        }`}
        onClick={() => {
          setActiveOptions("Cancelled");
        }}
      >
        Cancelled
      </button>
      <button
        className={`filter-button ${
          activeOptions === "Change" ? "active" : ""
        }`}
        onClick={() => {
          setActiveOptions("Change");
        }}
      >
        Change Request
      </button>
    </div>
  );
  return (
    <div>
      <ControlsPanelAdminPage />
      <Search data={data} setData={setData} defaultData={alertsCustomer} />
      <TabsHeader />
      <div className="business-list">
        <SortFiltrTagButtons
          data={data}
          setData={setData}
          sortByButtons={sortByButtons}
          defaultData={alertsCustomer}
          isTag={isTag}
          setIsTag={setIsTag}
          additionalOptions={additionalOptions}
        />
        <div className="business-list-container">
          {activeOptions === "All" ? (
            <>
              {" "}
              <AlertCustomersTitle />
              <div
                className="container-for-content"
                id="place-for-business-card"
              >
                {data.map((el, i) => {
                  return <AlertCustomersRow key={i} el={el} i={i} />;
                })}
              </div>
            </>
          ) : (
            ""
          )}
          {activeOptions === "Active" ? (
            <>
              {" "}
              <AlertsCustomerActivePendingTitleRow />
              <div
                className="container-for-content"
                id="place-for-business-card"
              >
                {insuranceDataActive.map((el, i) => {
                  return <AlertsCustomerActivePendingRow key={i} el={el} i={i} />;
                })}
              </div>
            </>
          ) : (
            ""
          )}
          {activeOptions === "Pending" ? (
            <>
              {" "}
              <AlertsCustomerActivePendingTitleRow />
              <div
                className="container-for-content"
                id="place-for-business-card"
              >
                {insuranceDataPending.map((el, i) => {
                  return <AlertsCustomerActivePendingRow key={i} el={el} i={i} />;
                })}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
