export function AlertCustomersRow({ el }) {
  return (
    <div className="list-container-titles">
      <div className="list-container-card-text" style={{ maxWidth: "5%" }}>
        {el.tax}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "11%" }}>
        {el.name}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "10%" }}>
        {el.company}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "8%" }}>
        {el.agent}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "8%" }}>
        {el.status === "Active" ? (
          <div
            className={`customer-list-container-card-status-block ${el.status}`}
          >
            {el.status}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "8%" }}>
      {el.status === "Canceled" ? (
          <div
            className={`customer-list-container-card-status-block ${el.status}`}
          >
            {el.status}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="list-container-card-text" style={{ maxWidth: "8%" }}>
      {el.status === "Pending" ? (
          <div
            className={`customer-list-container-card-status-block ${el.status}`}
          >
            {el.status}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="list-container-card-text center" style={{ maxWidth: "7%" }}>
        {el.pendingToOpen ? "🔵" : ""}
      </div>
      <div className="list-container-card-text center" style={{ maxWidth: "7%" }}>
        {el.pendingToRenew ? "🟢" : ""}
      </div>
      <div className="list-container-card-text center" style={{ maxWidth: "7%" }}>
        {el.pendingToUpdate ? "🟢" : ""}
      </div>
      <div className="list-container-card-text center" style={{ maxWidth: "7%" }}>
        {el.employeeNUpdate ? "🔵" : ""}
      </div>
      <div className="list-container-card-text center" style={{ maxWidth: "7%" }}>
        {el.pendingToCancel ? "⚠️" : ""}
      </div>
      <div className="list-container-card-text center" style={{ maxWidth: "7%" }}>
        {el.rejectedPolicies ? "❌" : ""}
      </div>
    </div>
  );
}
