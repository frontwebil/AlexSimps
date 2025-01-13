import { useUser } from "../../../UserContext";

export function ControlsPanelSettings() {
  const { currentUser } = useUser();
  console.log(currentUser)
  
  return (
    <div className="contols-panel">
      <div className="user-info">
        <img src={currentUser.imgUser} className="user-info-image admin-img" />
        <p className="user-info-text admin-name" id="admin-name">
          {currentUser.name}
        </p>
      </div>
    </div>
  );
}
