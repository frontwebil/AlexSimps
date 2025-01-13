import { Footer } from "../../Footer";
import { ControlsPanelSettings } from "./ControlsPanelSettings";
import { Swiper } from "./Swiper/Swiper";

export function Settings() {
  return (
    <div className="settings-section">
      <ControlsPanelSettings/>
      <Swiper />
      <Footer />
    </div>
  );
}
