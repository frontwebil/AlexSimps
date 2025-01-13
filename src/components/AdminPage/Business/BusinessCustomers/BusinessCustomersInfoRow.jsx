import { IoIosInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export function BusinessCustomersInfoRow({el , i}) {
  return (
    <div className="list-container-card" key={i}>
    <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
      {el.passport}
    </div>
    <div className="list-container-card-text" style={{ maxWidth: "14%" }}>
      {el.name}
    </div>
    <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
      {el.member}
    </div>
    <div className="list-container-card-text" style={{ maxWidth: "7%" }}>
      {el.tax}
    </div>
    <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
      {el.phone}
    </div>
    <div className="list-container-card-text" style={{ maxWidth: "16%" }}>
      {el.country}
    </div>
    <div className="list-container-card-text" style={{ maxWidth: "14%" }}>
      <div
        className={`customer-list-container-card-status-block ${el.status}`}
      >
        {el.status}
      </div>
    </div>
    <div
      className="list-container-card-text center"
      style={{ maxWidth: "5%" }}
    >
      {el.notes}
    </div>
    <div
      className="list-container-card-text center"
      style={{ maxWidth: "5%" }}
    >
      {el.alerts}
    </div>
    <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
      {el.agent}
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
  )
}
