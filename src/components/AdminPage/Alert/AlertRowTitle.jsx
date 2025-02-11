export function AlertRowTitle({isTag}) {
  return (
    <div className="list-container-titles">
      {isTag && (
        <div className="list-container-title" style={{maxWidth:'4%'}}>Tag</div>
      )}
      <div className="list-container-title" style={{maxWidth:'10%'}}>ID Company</div>
      <div className="list-container-title" style={{maxWidth:'13%'}}>Company Name</div>
      <div className="list-container-title" style={{maxWidth:'9%'}}>Polices</div>
      <div className="list-container-title" style={{maxWidth:'9%'}}>Request</div>
      <div className="list-container-title" style={{maxWidth:'9%'}}>Employees</div>
      <div className="list-container-title" style={{maxWidth:'10%'}}>Date</div>
      <div className="list-container-title" style={{maxWidth:'9%'}}>Notes</div>
      <div className="list-container-title" style={{maxWidth:'9%'}}>Alerts</div>
      <div className="list-container-title" style={{maxWidth:'11%'}}>Agent</div>
      <div className="list-container-title" style={{maxWidth:'6%'}}>Details</div>
    </div>
  );
}
