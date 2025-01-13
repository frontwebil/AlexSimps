import { Outlet } from "react-router-dom";
import { HeaderBrockerPage } from "./HeaderBrockerPage";

export function BrockerPage() {
  return (
    <div className="nav-site">
      <HeaderBrockerPage />
      <Outlet />
    </div>
  );
}