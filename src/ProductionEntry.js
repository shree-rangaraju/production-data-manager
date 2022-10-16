import "./index.css";
import machineData from "./machineData";
import partsData from "./partsData";
import operatorData from "./operatorData";

export default function ProductionEntry() {
  const machineList = machineData.Data.map((machine) => {
    return <option value={`${machine}`}>{machine}</option>;
  });
  const operatorList = operatorData.Name.map((operator) => {
    return <option value={`${operator}`}>{operator}</option>;
  });
  const partsList = partsData.Parts.map((parts) => {
    return <option value={`${parts}`}>{parts}</option>;
  });
  const operationsList = partsData.Operations.map((operation) => {
    return <option value={`${operation}`}>{operation}</option>;
  });
  return (
    <>
      <nav className="navBar">
        <h1>Production Data Entry</h1>
      </nav>
      <div className="productionDisplay">
        <div className="table">
          <div className="tableHeader">
            <div className="tableHeaderElements">
              <h4>Date</h4>
            </div>
            <div className="tableHeaderElements">
              <h4>Machine</h4>
            </div>
            <div className="tableHeaderElements">
              <h4>Shift</h4>
            </div>
            <div className="tableHeaderElements">
              <h4>Operator</h4>
            </div>
            <div className="tableHeaderElements">
              <h4>Working Hours</h4>
            </div>
            <div className="tableHeaderElements">
              <h4>Part</h4>
            </div>
            <div className="tableHeaderElements">
              <h4>Operation</h4>
            </div>
            <div className="tableHeaderElements">
              <h4>Produced Nos/Hours</h4>
            </div>
            <div className="tableHeaderElements">
              <h4>Production Time</h4>
            </div>
            <div className="tableHeaderElements">
              <h4>Idle Time</h4>
            </div>
            <div className="tableHeaderElements">
              <h4>Efficiency</h4>
            </div>
          </div>
          <div>
            {/* data elements comes here */}
            <form className="tableContents" id="submitData">
              <div className="tableContentElements">
                <input type="date"></input>
              </div>
              <div className="tableContentElements">
                <select id="machine">
                  <option value="">-Select-</option>
                  {machineList}
                </select>
              </div>
              <div className="tableContentElements">
                <select id="shift">
                  <option value="">-Select-</option>
                  <option value="1st">1st</option>
                  <option value="2nd">2nd</option>
                  <option value="3rd">3rd</option>
                </select>
              </div>
              <div className="tableContentElements">
                <select id="operator">
                  <option value="">-Select-</option>
                  {operatorList}
                </select>
              </div>
              <div className="tableContentElements">
                <input type="text"></input>
              </div>
              <div className="tableContentElements">
                <div className="newOperation">
                  <button className="addNewOperation">+</button>
                  <select id="part" style={{ width: "70px", margin: "4px" }}>
                    <option value="">-Select-</option>
                    {partsList}
                  </select>
                </div>
              </div>
              <div className="tableContentElements">
                <select id="operations">
                  <option value="">-Select-</option>
                  {operationsList}
                </select>
              </div>
              <div className="tableContentElements">
                <input type="text"></input>
              </div>
              <div className="tableContentElements"></div>
              <div className="tableContentElements"></div>
              <div className="tableContentElements"></div>
            </form>
          </div>
        </div>
        <button type="submit" form="submitData">
          Submit
        </button>
      </div>
    </>
  );
}
