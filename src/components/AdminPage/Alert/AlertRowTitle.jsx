export function AlertRowTitle({isTag}) {
  return (
    <div className="list-container-titles">
      {isTag && (
        <div className="list-container-title" style={{maxWidth:'4%'}}>Tag</div>
      )}
      <div className="list-container-title" style={{maxWidth:'8%'}}>ID</div>
      <div className="list-container-title" style={{maxWidth:'10%'}}>Company</div>
      <div className="list-container-title" style={{maxWidth:'8%'}}>Contact</div>
      <div className="list-container-title" style={{maxWidth:'10%'}}>Active Policies</div>
      <div className="list-container-title" style={{maxWidth:'8%'}}>Agent</div>
      <div className="list-container-title" style={{maxWidth:'10%'}}>Request for New Policies</div>
      <div className="list-container-title" style={{maxWidth:'10%'}}>Cancelled Policies</div>
      <div className="list-container-title" style={{maxWidth:'10%'}}>Renewal Applications</div>
      <div className="list-container-title" style={{maxWidth:'10%'}}>Passport change request</div>
      <div className="list-container-title" style={{maxWidth:'10%'}}>Request to change Employee nubmer</div>
      <div className="list-container-title" style={{maxWidth:'6%'}}>Details</div>
    </div>
  );
}
