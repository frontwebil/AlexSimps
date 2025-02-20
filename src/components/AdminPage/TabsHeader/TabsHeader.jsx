import { Link, useLocation } from "react-router-dom";

export function TabsHeader() {
  const location = useLocation();
  return (
    <div className="reports-tabs">
      <div className="reports-tabs-titles">
        <Link to='/business' className={`reports-tabs-title-button reports-tabs-title-brocker ${location.pathname === '/business' || location.pathname==='/customers' || location.pathname==='/' ? 'active' : ''}`}>
          Customers
        </Link>
        <Link to='/alerts/customers' className={`reports-tabs-title-button reports-tabs-title-brocker ${location.pathname === '' || location.pathname==='/alerts/customers' ? 'active' : ''}`}>
          Alerts
        </Link>
        <p className={`reports-tabs-title-button reports-tabs-title-brocker`}>
          Tasks
        </p>
        <p className={`reports-tabs-title-button reports-tabs-title-brocker`}>
          Meetings
        </p>
        <Link to={'/alerts'} className={`reports-tabs-title-button reports-tabs-title-brocker ${location.pathname === '/alerts' ? 'active' : ''}`}>
          Companies
        </Link>
      </div>
    </div>
  );
}
