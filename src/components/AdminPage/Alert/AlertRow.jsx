import { IoIosInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export function AlertRow({ el, i, isTag, data, setData }) {
  const findObject = (index) => {
    const updatedData = [...data];
    
    updatedData[index] = {
      ...updatedData[index],
      isTag: !updatedData[index].isTag
    };

    setData(updatedData);
  }

  return (
    <div className={`list-container-card ${el.isTag ? "alarm" : ""}`} key={i}>
      {isTag && (
        <div
          className="list-container-card-text center"
          style={{ maxWidth: "4%" }}
        >
          <input
            type="checkbox"
            checked={el.isTag}
            onChange={() => findObject(i)}
          />
        </div>
      )}
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        {el.idCompany}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "13%" }}>
        {el.companyName}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "9%" }}>
        {el.polices}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "9%" }}>
        {el.request}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "9%" }}>
        {el.employees}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        {el.date}
      </div>
      <div
        className="list-container-card-text underline"
        style={{ maxWidth: "9%" }}
      >
        {el.notes}
      </div>
      <div
        className="list-container-card-text underline"
        style={{ maxWidth: "9%" }}
      >
        {el.alerts}
      </div>
      <div
        className="list-container-card-text underline"
        style={{ maxWidth: "11%" }}
      >
        {el.agent}
      </div>
      <Link
        to={`/business/${el.idCompany}`}
        className="list-container-card-text center"
        style={{ maxWidth: "6%" }}
      >
        <IoIosInformationCircle
          style={{ color: "#2894f4" }}
          className="info-button"
        />
      </Link>
    </div>
  );
}
