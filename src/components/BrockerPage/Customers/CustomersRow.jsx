import { IoIosInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export function CustomerRow({ el, i }) {
  return (
    <div className="list-container-card" key={i}>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        {el.idCustomer}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "15%" }}>
        {el.customerName}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "13%" }}>
        {el.polica}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "12%" }}>
        {el.lastUpdate}
      </div>
      <div className="list-container-card-text center" style={{ maxWidth: "20%" }}>
        Annual Till : {el.annualTill}
      </div>
      <div className="list-container-card-text center" style={{ maxWidth: "10%" }}>
        {el.status}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        {el.phone}
      </div>
      <div className="list-container-card-text center underline" style={{ maxWidth: "5%" }}>
        {el.task}
      </div>
      <Link
        to={`/customers/${el.tax}`}
        className="list-container-card-text center"
        style={{ maxWidth: "5%" }}
      >
        <IoIosInformationCircle
          style={{ color: "#2894f4" }}
          className="info-button"
        />
      </Link>
    </div>
  );
}
