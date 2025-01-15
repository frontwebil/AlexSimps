import { Link, useLocation } from "react-router-dom";

export function CustomersTabsTitle() {
  const location = useLocation();
  const locationCurrent = location.pathname.split('/')[2];
  return (
    <div className="reports-tabs">
      <div className="reports-tabs-titles">
        <Link to='/customers/myCustomers' className={`reports-tabs-title-button reports-tabs-title-brocker ${locationCurrent === '' || locationCurrent==='myCustomers' ? 'active' : ''}`}>
          My Customer
        </Link>
        <Link to='/customers/myMeetings' className={`reports-tabs-title-button reports-tabs-title-brocker ${locationCurrent === '' || locationCurrent==='myMeetings' ? 'active' : ''}`}>
          My Meetings
        </Link>
        <p className={`reports-tabs-title-button reports-tabs-title-brocker`}>
          Alerts
        </p>
        <p className={`reports-tabs-title-button reports-tabs-title-brocker`}>
          Company Updates
        </p>
        <p className={`reports-tabs-title-button reports-tabs-title-brocker`}>
          Policies Updates
        </p>
        <p className={`reports-tabs-title-button reports-tabs-title-brocker`}>
          Revenue Analytics
        </p>
      </div>
    </div>
  );
}
