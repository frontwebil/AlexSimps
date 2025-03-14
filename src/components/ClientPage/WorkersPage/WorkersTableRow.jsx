import { Link } from "react-router-dom";

export function WorkersTableRow({ el }) {
  return (
    <div className="table-row ">
      <div className="table-block block-site-inner" style={{ width: "5%" }}>
        {el.tax}
      </div>
      <div className="table-block " style={{ width: "5%" }}>
        <img src={el.photo} alt="" />
      </div>
      <div className="table-block name-inner underline" style={{ width: "15%" , color:'black' }}>
        {el.name}
      </div>
      <div className="table-block block-site-inner" style={{ width: "8%" }}>
        {el.passport}
      </div>
      <div className="table-block block-site-inner" style={{ width: "9%" }}>
        {el.phone}
      </div>
      <div className="table-block block-site-inner" style={{ width: "8%" }}>
        {el.manager}
      </div>
      <div className="table-block block-site-inner" style={{ width: "8%" }}>
        {el.customer}
      </div>
      <div className="table-block block-site-inner" style={{ width: "8%" }}>
        {el.country}
      </div>
      <div className="table-block block-site-inner" style={{ width: "5%" }}>
        {el.app}
      </div>
      <div
        className="table-block"
        style={{
          width: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className={`location ${el.insurance == "Enter" ? "enter" : ""} ${
            el.insurance == "Canceled" ? "canceled" : ""
          } ${el.insurance == "Pending" ? "pending" : ""} ${
            el.insurance == "Empty" ? "empty" : ""
          }`}
          style={{color:'black'}}
        >
          {el.insurance == "Empty" ? (
            <Link to="/add-insurance">{el.insurance}</Link>
          ) : (
            el.insurance
          )}
        </div>
      </div>
      <div className="table-block alertsButton-wrap center" style={{ width: "5%" }}>

          {el.alerts && (
            <img src="/icons/alert.png" alt="" className="alertsButton" />
          )}

      </div>
      <div className="table-block tableFlex-block" style={{ width: "8%" }}>
        <img src="/icons/location.png" alt="" className="location-button" />
        {el.realEstate}
      </div>
      <div className="table-block tableFlex-block center" style={{ width: "6%" }}>
        <Link to={`/workers/${el.tax}`}>
          <img src="/icons/info-icon.png" alt="" className="info-button" />
        </Link>
      </div>
    </div>
  );
}
