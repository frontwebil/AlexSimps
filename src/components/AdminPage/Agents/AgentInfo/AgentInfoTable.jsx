import { AgentInfoTableTitle } from "./AgentInfoTableTitle";

export function AgentInfoTable({currentAgent}) {
  return (
    <div className="InfoTable">
      <AgentInfoTableTitle />
      
      <div className="">
        <div className="InfoTable-container">
          <div className="InfoTable-block" style={{ borderRight: "2px" }}>
            <div className="InfoTable-block-row">
              <div className="InfoTable-text">Name:</div>
              <div className="InfoTable-text">{currentAgent.user}</div>
            </div>
            <div className="InfoTable-block-row">
              <div className="InfoTable-text">Created:</div>
              <div className="InfoTable-text">01.09.2013</div>
            </div>
            <div className="InfoTable-block-row">
              <div className="InfoTable-text">Date of Birth:</div>
              <div className="InfoTable-text">28.11.1973 , 51 years</div>
            </div>
            <div className="InfoTable-block-row">
              <div className="InfoTable-text">Gender:</div>
              <div className="InfoTable-text">Female</div>
            </div>
            <div className="InfoTable-block-row">
              <div className="InfoTable-text">Email:</div>
              <div className="InfoTable-text">test@gmail.com</div>
            </div>
            <div className="InfoTable-block-row">
              <div className="InfoTable-text">Phone:</div>
              <div className="InfoTable-text">{currentAgent.phone}</div>
            </div>
            <div className="InfoTable-block-row">
              <div className="InfoTable-text">City:</div>
              <div className="InfoTable-text">{currentAgent.city}</div>
            </div>
          </div>
          <div className="InfoTable-block">
            <div className="InfoTable-block-row">
              <div className="InfoTable-text">Total:</div>
              <div className="InfoTable-text underline">{currentAgent.customers}</div>
            </div>
            <div className="InfoTable-block-row">
              <div className="InfoTable-text">Trends:</div>
              <div className="InfoTable-text green">
                <p className={`${currentAgent.trends > 0 ? "green" : "red"}`}>{currentAgent.trends} %</p>        
              </div>
            </div>
          </div>
          <div className="InfoTable-block" style={{ borderLeft: "2px" }}>
            <div className="InfoTable-block-row">
              <div className="InfoTable-text">Policy renewal:</div>
              <div className="InfoTable-text">Status</div>
            </div>
            <div className="InfoTable-block-row">
              <div className="InfoTable-text">Submission request:</div>
              <div className="InfoTable-text">None</div>
            </div>
            <div className="InfoTable-block-row">
              <div className="InfoTable-text">Permission:</div>
              <div className="InfoTable-text underline bold">{currentAgent.role}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
