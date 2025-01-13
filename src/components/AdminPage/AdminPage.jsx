import { HeaderAdminPage } from "../AdminPage/HeaderAdminPage";
import { Outlet } from "react-router-dom";

export function AdminPage() {
  return (
    <div className="nav-site">
      <HeaderAdminPage />
      <Outlet />
    </div>
  );
}