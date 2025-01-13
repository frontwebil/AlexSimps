import { LuNotepadText } from "react-icons/lu";
import { RiContactsBook2Line, RiInfoCardLine } from "react-icons/ri";

export function BusinessInfoTableTitle() {
  return (
    <div className="InfoTableTitle">
      <div className="InfoTableTitle-container" style={{backgroundColor:'#484444'}}>
        <div className="InfoTableTitle-block">
          <RiInfoCardLine
            className="icons-title"
            style={{ background: "#00b8c3" }}
          />
          <p className="InfoTableTitle-block-text" style={{color: "#fff"}}>Policy Details</p>
        </div>
        <div className="InfoTableTitle-block">
          <RiContactsBook2Line
            className="icons-title"
            style={{ background: "#ed7207" }}
          />
          <p className="InfoTableTitle-block-text" style={{color: "#fff"}}>Customer Info</p>
        </div>
        <div className="InfoTableTitle-block">
          <LuNotepadText
            className="icons-title"
            style={{ background: "#c8e368" }}
          />
          <p className="InfoTableTitle-block-text" style={{color: "#fff"}}>Company Info</p>
        </div>
      </div>
    </div>
  );
}
