import { IoIosInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export function CustomerRow({ el, i , openRowId , setOpenRowId}) {
  const isOpen = openRowId === i;

  return (
    <div className="list-container-card" key={i}>
      <div className="list-container-card-text" style={{ maxWidth: "5%" }}>
        {el.tax}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "12%" }}>
        {el.name}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        {el.companyName}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "8%" }}>
        {el.passport}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        {el.phone}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        {el.country}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        <div
          className={`customer-list-container-card-status-block ${el.status}`}
        >
          {el.status}
        </div>
      </div>
      {/* <div
        className="list-container-card-text center"
        style={{ maxWidth: "5%" }}
      >
        {el.notes}
      </div> */}
      <div className="list-container-card-text underline" style={{ maxWidth: "8%" }}>
        <Link to={`/agents/${el.idAgent}`}>
        {el.agent}
        </Link>
      </div>
      <div
        className="list-container-card-text center"
        style={{ maxWidth: "7%" , display:'flex' , alignItems:'center',gap:'10px',justifyContent:'center'}}
        >
        {el.alerts}

        {i < 4 && (
          <img src="/icons/alert.png" alt="" className="alertsButton" />
        )}
      </div>

      <div
        className="list-container-card-text center"
        style={{ maxWidth: "8%" , position:'relative' }}
      >
               <button
          className="fast-action-btn"
          onClick={() => setOpenRowId(isOpen ? null : i)}
        >
          <img src="/icons/more.png" alt="" style={{width:'20px'}}/>
        </button>
        {isOpen && (
          <ul className="fast-actions-menu">
            <li className="fast-action-item">Cancel/Renew/Edit Insurance</li>
            <li className="fast-action-item">Open Quick Chat</li>
            <li className="fast-action-item">Tag</li>
            <li className="fast-action-item">Open Work Accident Form</li>
            <li className="fast-action-item">Documents</li>
            <li className="fast-action-item">Send Files BetLamed</li>
          </ul>
        )}
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
      <div className="list-container-card-text center" style={{ maxWidth: "7%" }}>
       <img src="/icons/editDate.png" alt="" className="edit-block" />
      </div>
    </div>
  );
}

{
  /* <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        {el.companyName}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        {el.member}
      </div>*/
}
