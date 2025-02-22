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
      <div className="list-container-card-text" style={{ maxWidth: "8%" }}>
        {el.idCompany}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        {el.companyName}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "8%" }}>
        {el.contact}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        {el.polices}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "8%" }}>
        {el.agent}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        {el.requestNewPolices}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        {el.canceledPolicies}
      </div>
      <div
        className="list-container-card-text underline"
        style={{ maxWidth: "10%" }}
      >
        {el.renewalApplications}
      </div>
      <div
        className="list-container-card-text underline"
        style={{ maxWidth: "10%" }}
      >
        {el.passportChangeRequest}
      </div>
      <div
        className="list-container-card-text underline"
        style={{ maxWidth: "10%" }}
      >
        {el.requestToChangeEmployeeNumber}
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
