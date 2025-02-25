import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../UserContext";

export function HeaderClientPage() {
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
        {/* <Link to="/">
          <p
            className={`nav-button ${
              location.slice(1).split("/")[0] == "business" ? "focus" : ""
            }`}
          >
            Business
          </p>
        </Link> */}

        <Link to="/workers">
          <p
            className={`nav-button ${location.slice(1).split("/")[0] == "workers" || location == "/"  ? "focus" : ""}`}
          >
            Workers
          </p>
        </Link>

        <Link to="/">
          <p className={`nav-button ${location == "/settings" ? "focus" : ""}`}>
            Alerts
          </p>
        </Link>
        <button className="log-out" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
}
