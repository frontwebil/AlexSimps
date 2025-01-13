import { IoIosInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export function BusinessRow({ el, i }) {
  return (
    <div className="list-container-card" key={i}>
      <div className="list-container-card-text" style={{maxWidth:'14%'}}>{el.idCompany}</div>
      <div className="list-container-card-text" style={{maxWidth:'13%'}}>{el.companyName}</div>
      <div className="list-container-card-text" style={{maxWidth:'11%'}}>{el.polices}</div>
      <div className="list-container-card-text" style={{maxWidth:'11%'}}>{el.request}</div>
      <div className="list-container-card-text" style={{maxWidth:'11%'}}>{el.employees}</div>
      <div className="list-container-card-text underline" style={{maxWidth:'11%'}}>
        {el.notes}
      </div>
      <div className="list-container-card-text underline" style={{maxWidth:'11%'}}>
        {el.alerts}
      </div>
      <div className="list-container-card-text underline" style={{maxWidth:'11%'}}>
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
