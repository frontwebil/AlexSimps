export function AlertsCustomerCancelledRow({ el }) {
  return (
    <div className="list-container-card">
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        <div
          className={`customer-list-container-card-status-block ${el.status}`}
        >
          {el.status}
        </div>
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "5%" }}>
        {el.id}
      </div>
      <div className="list-container-card-text underline" style={{ maxWidth: "10%" }}>
        {el.company}
      </div>
      <div className="list-container-card-text underline" style={{ maxWidth: "15%" }}>
        {el.employee}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "15%" }}>
        {el.insuranceCompany}
      </div>
      <div className="list-container-card-text underline" style={{ maxWidth: "10%" }}>
        {el.agent}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
      {el.startDate}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        {el.endDate}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>

      </div>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>

      </div>
    </div>
  );
}
