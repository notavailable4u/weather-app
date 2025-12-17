import { useState } from "react";
import iconCheckmark from "./assets/images/iconCheckmark.svg";
import unitSvg from "./assets/images/icon-units.svg";
import iconDropdown from "./assets/images/iconDropdown.svg"

export default function UnitsDropdown({ measurementSystem, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const isMetric = measurementSystem === "metric";
  const switchLabel = isMetric ? "Switch to Imperial" : "Switch to Metric";

  const handleToggleSystem = () => {
    onChange(isMetric ? "imperial" : "metric");
  };

  const renderUnitOption = (label, selected) => (
    <div className="unitOption">
      <span>{label}</span>
      {selected ? <img src={iconCheckmark} alt="Selected" /> : null}
    </div>
  );

  return (
    <div className="dropDown">
      <div className="unitSelect" onClick={() => setIsOpen((open) => !open)}>
        <img src={unitSvg} alt="icon representing units measurements" /> Units
         <img src={iconDropdown} alt="icon representing dropdown arrow"/>
      </div>

      {isOpen && (
        <div className="unitsMenu">
          <div className="unitLabel textPreset7" onClick={handleToggleSystem}>
            {switchLabel}
          </div>

          <div className="unitSelections">
            <span className="unitVariables">Temperature</span>
            {renderUnitOption("Celsius (\u00b0C) ", isMetric)}
            {renderUnitOption("Fahrenheit (\u00b0F) ", !isMetric)}
          </div>
          <div className="divider"></div>

          <div className="unitSelections">
            <span className="unitVariables">Wind Speed</span>
            {renderUnitOption("km/h ", isMetric)}
            {renderUnitOption("mph ", !isMetric)}
          </div>
          <div className="divider"></div>
          <div className="unitSelections">
            <span className="unitVariables">Precipitation</span>
            {renderUnitOption("Millimeters (mm) ", isMetric)}
            {renderUnitOption("Inches (in) ", !isMetric)}
          </div>
        </div>
      )}
    </div>
  );
}
