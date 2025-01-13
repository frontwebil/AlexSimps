import { LuNotepadText } from "react-icons/lu";
import { RiContactsBook2Line, RiInfoCardLine } from "react-icons/ri";

export function AgentInfoTableTitle() {
  return (
    <div className="InfoTableTitle">
      <div className="InfoTableTitle-container">
        <div className="InfoTableTitle-block">
          <RiInfoCardLine
            className="icons-title"
            style={{ background: "#00b8c3" }}
          />
          <p className="InfoTableTitle-block-text">Agent Details</p>
        </div>
        <div className="InfoTableTitle-block">
          <RiContactsBook2Line
            className="icons-title"
            style={{ background: "#ed7207" }}
          />
          <p className="InfoTableTitle-block-text">Customers</p>
        </div>
        <div className="InfoTableTitle-block">
          <LuNotepadText
            className="icons-title"
            style={{ background: "#c8e368" }}
          />
          <p className="InfoTableTitle-block-text">Notices and Task</p>
        </div>
      </div>
    </div>
  );
}
