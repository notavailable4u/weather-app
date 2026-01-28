import { useEffect, useRef, useState } from "react";
import iconCheckmark from "./assets/images/iconCheckmark.svg";
import unitSvg from "./assets/images/icon-units.svg";
import iconDropdown from "./assets/images/iconDropdown.svg";

export default function UnitsDropdown({ measurementSystem, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isMetric = measurementSystem === "metric";
  const switchLabel = isMetric ? "Switch to Imperial" : "Switch to Metric";

  const handleToggleSystem = () => {
    onChange(isMetric ? "imperial" : "metric");
  };

  const renderUnitOption = (label, selected) => (
    <div className={selected ? "unitOptionSelected" : "unitOption"}>
      <span>{label}</span>
      {selected ? <img src={iconCheckmark} alt="Selected" /> : null}
    </div>
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!isOpen) return;
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="dropDown" ref={dropdownRef}>
      <div className="unitSelect" onClick={() => setIsOpen((open) => !open)}>
        <img src={unitSvg} alt="icon representing units measurements" /> Units
        <img src={iconDropdown} alt="icon representing dropdown arrow" />
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
            {renderUnitOption("mp/h ", !isMetric)}
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
