import { IoIosInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export function BusinessCustomersInfoRow({ el, i }) {
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
      <div className="list-container-card-text" style={{ maxWidth: "8%" }}>
        {el.country}
      </div>
      <div
        className="list-container-card-text"
        style={{
          maxWidth: "22%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "3px",
        }}
      >
        <div
          className={`customer-list-container-card-status-block ${el.status}`}
        >
          {el.status}
        </div>
        <div
          className="statusActionButton"
          style={{
            width: "80%",
            backgroundColor:
              el.status === "Active"
                ? "#ff4d4d"
                : el.status === "Pending"
                ? "#ffd700"
                : el.status === "Empty"
                ? "#4682b4"
                : "#4CAF50",
          }}
        >
          {el.status === "Active" && "Cancel"}
          {el.status === "Pending" && "Notice"}
          {el.status === "Empty" && "Document Package Status"}
          {el.status === "Canceled" && "Activate"}
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
        to={{
          pathname: `/customers/${el.tax}`,
          search: `?filter=aboba`,
        }}
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
