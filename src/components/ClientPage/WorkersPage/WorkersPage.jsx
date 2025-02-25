import { useState } from "react";
import { UsersData } from "../../../../consts/UsersData";
import { Search } from "../../ClientPage/Search/Search";
import { ControlsPanelAdminPage } from "../../AdminPage/ControlsPanelAdminPage";
import { SortFiltrButtons } from "../SortFiltrButtons.jsx/SortFiltrButtons";
import { EventLogWorkers } from "./EventLogWorkers";
import { WorkersTableRow } from "./WorkersTableRow";
// import { WorkersPageActions } from "./WorkersPageActions";

export function WorkersPage() {
  const [data] = useState(() => {
    return UsersData.map((el) => el.sitesEmployees).flat();
  });
  const [eventLog, setEventLog] = useState([]);
  const [allWorkersData, setAllWorkersData] = useState(data);
  const sortByButtons = [
    "realEstate",
    "country",
  ];
  const eventHandleClick = (event) => {
    if (event === "All") {
      setEventLog([]);
    }
    setEventLog((prevLog) => {
      if (prevLog.includes(event)) {
        return prevLog.filter((item) => item !== event);
      } else {
        return [...prevLog, event];
      }
    });
  };

  return (
    <div>
      <ControlsPanelAdminPage />
      <Search
        data={allWorkersData}
        setData={setAllWorkersData}
        defaultData={data}
      />

      <SortFiltrButtons
        data={allWorkersData}
        setData={setAllWorkersData}
        sortByButtons={sortByButtons}
        defaultData={data}
      />

      {/* <WorkersPageActions /> */}
      <EventLogWorkers
        eventLog={eventLog}
        setEventLog={setEventLog}
        eventHandleClick={eventHandleClick}
      />

      <div className="table-container">
        <div className="table">
          <div className="table-row nav">
            <div className="table-block nav" style={{ width: "5%" }}>
              Tax Id
            </div>
            <div className="table-block nav" style={{ width: "5%" }}>
              Photo
            </div>
            <div className="table-block nav" style={{ width: "15%" }}>
              Name
            </div>
            <div className="table-block nav" style={{ width: "8%" }}>
              Passport
            </div>
            <div className="table-block nav" style={{ width: "9%" }}>
              Phone
            </div>
            <div className="table-block nav" style={{ width: "8%" }}>
              Manager
            </div>
            <div className="table-block nav" style={{ width: "8%" }}>
              Customer
            </div>
            <div className="table-block nav" style={{ width: "8%" }}>
              Country
            </div>
            <div className="table-block nav" style={{ width: "5%" }}>
              APP
            </div>
            <div className="table-block nav" style={{ width: "10%" }}>
              Insurance
            </div>
            <div className="table-block nav" style={{ width: "5%" }}>
              Alerts
            </div>
            <div className="table-block nav" style={{ width: "8%" }}>
              <p>Real Estate</p>
            </div>
            <div className="table-block nav" style={{ width: "6%" }}>
              Info
            </div>
          </div>
          {allWorkersData.map((el, index) => {
            return (
              <WorkersTableRow key={index} el={el} i={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
