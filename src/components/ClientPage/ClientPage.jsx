import { Outlet } from "react-router-dom";
import { HeaderClientPage } from "./HeaderClientPage";

export function ClientPage() {
  console.log('aboba')
  return (
    <div className="nav-site">
      <HeaderClientPage />
      <Outlet />
    </div>
  );
}