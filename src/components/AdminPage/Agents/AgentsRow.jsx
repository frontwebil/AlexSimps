import { IoIosInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export function AgentsRow({ el, i }) {
  return (
    <div className="list-container-card" key={i}>
      <div className="list-container-card-text"style={{maxWidth:'11%'}}>{el.user}</div>
      <div className="list-container-card-text"style={{maxWidth:'11%'}}>{el.role}</div>
      <div className="list-container-card-text"style={{maxWidth:'11%'}}>{el.phone}</div>
      <div className="list-container-card-text"style={{maxWidth:'11%'}}>{el.additional}</div>
      <div className="list-container-card-text center" style={{maxWidth:'11%'}}>
        <div className={`statusBlock ${el.status === 'Active' ? 'active' : 'empty' }`}>{el.status}</div>
      </div>
      <div className="list-container-card-text center" style={{maxWidth:'11%'}}>{el.customers}</div>
      <div className="list-container-card-text center" style={{maxWidth:'11%'}}>{el.city}</div>
      <div className="list-container-card-text center" style={{maxWidth:'11%'}}>
        <p className={`${el.trends > 0 ? "green" : "red"}`}>{el.trends} %</p>
      </div>
      <Link to={`/agents/${el.id}`} className="list-container-card-text center" style={{maxWidth:'11%'}}>
              <IoIosInformationCircle
                style={{ color: "#2894f4" }}
                className="info-button"
              />
      </Link>
    </div>
  );
}
