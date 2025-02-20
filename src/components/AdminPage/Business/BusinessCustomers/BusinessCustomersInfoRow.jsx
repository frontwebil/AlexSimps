import { IoIosInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export function BusinessCustomersInfoRow({ el, i }) {
  return (
    <div className="list-container-card" key={i}>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        {el.passport}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "12%" }}>
        {el.name}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        {el.member}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "5%" }}>
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
                ? "#f4d1d1"
                : el.status === "Pending"
                ? "#f6ebb5"
                : el.status === "Empty"
                ? "#4682b4"
                : "#d8ecbc",
          }}
        >
          {el.status === "Active" && "Cancel"}
          {el.status === "Pending" && "Notice"}
          {el.status === "Empty" && "D Status"}
          {el.status === "Canceled" && "Activate"}
        </div>
      </div>
      <div
        className="list-container-card-text center"
        style={{ maxWidth: "6%" }}
      >
        <img src="/icons/documentStatus.png" alt="" style={{width:'30px'}}/>
      </div>
      <div
        className="list-container-card-text center"
        style={{ maxWidth: "4%" }}
      >
        {el.notes}
      </div>
      <div
        className="list-container-card-text center"
        style={{ maxWidth: "4%" }}
      >
        {el.alerts}
      </div>
      <div className="list-container-card-text underline" style={{ maxWidth: "10%" }}>
        <Link to={el.idAgent ? `/agents/${el.idAgent}` : '/agents'}>{el.agent}</Link>
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
