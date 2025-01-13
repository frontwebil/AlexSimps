import { Footer } from "../../Footer";
import { ControlsPanelAdminPage } from "../ControlsPanelAdminPage";

export function Reports({ currentUser }) {
  return (
    <>
      <ControlsPanelAdminPage currentUser={currentUser} />
      <Footer />
    </>
  );
}
