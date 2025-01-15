import { ControlsPanelBrockerPage } from "../ControlsPanelBrockerPage";
import { Search } from "../Search/Search";
import { CustomersTabsTitle } from "../Customers/CustomersTabsTitle";

export function MyMeetings() {
  // const [data, setData] = useState(customersAgent);
  return (
    <div>
      <ControlsPanelBrockerPage />
      <Search current={'My Meetings'}/>
      <CustomersTabsTitle />
      <div className="business-list">
        <div className="business-list-container">
          <div className="container-for-content" id="place-for-business-card">

          </div>
        </div>
      </div>
    </div>
  );
}
