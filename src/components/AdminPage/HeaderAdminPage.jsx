import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";

export function HeaderAdminPage() {
  const { setCurrentUser } = useUser();
  const location = useLocation().pathname;

  const navigate = useNavigate();
  const handleLogout = () => {
    setCurrentUser("");
    navigate("/");
  };
  return (
    <div className="header">
      <Link to="/">
        <h2 className="header-logo-bold">
          ALEX<span className="fontWeight">CIMPS</span>
        </h2>
      </Link>
      <nav className="header-nav">
        <Link to="/agents">
          <p
            className={`nav-button ${
              location.slice(1).split("/")[0] == "agents" ? "focus" : ""
            }`}
          >
            Agents
          </p>
        </Link>
        {/* <Link to="/reports">
          <p className={`nav-button ${location == "/reports" ? "focus" : ""}`}>
            Reports
          </p>
        </Link> */}
        <Link to="/">
          <p className={`nav-button`}>Reports</p>
        </Link>

        <Link to="/settings">
          <p className={`nav-button ${location == "/settings" ? "focus" : ""}`}>
            Settings
          </p>
        </Link>
        <button className="log-out" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
}

{
  /* <Link to="/alert">
<p
  className={`nav-button ${
    location.slice(1).split("/")[0] == "alert" ? "focus" : ""
  }`}
>
  Alerts
</p>
</Link>
<Link to="/business">
<p
  className={`nav-button ${
    location.slice(1).split("/")[0] == "business" || location == "/" ? "focus" : ""
  }`}
>
  Business
</p>
</Link>

<Link to="/customers">
<p
  className={`nav-button ${location.slice(1).split("/")[0] == "customers" ? "focus" : ""}`}
>
  Customers
</p>
</Link> 

        <Link to="/">
          <p className={`nav-button`}>
          Task
          </p>
        </Link>
*/
}
