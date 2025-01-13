import { Footer } from "../../Footer";
import { ControlsPanelSettings } from "./ControlsPanelSettings";
import { Swiper } from "./Swiper/Swiper";

export function SettingsBrocker() {
  return (
    <div className="settings-section">
      <ControlsPanelSettings/>
      <Swiper />
      <Footer />
    </div>
  );
}
