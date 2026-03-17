import { useEffect, useRef, useState } from "react";
import iconCheckmark from "./assets/images/iconCheckmark.svg";
import unitSvg from "./assets/images/icon-units.svg";
import iconDropdown from "./assets/images/iconDropdown.svg";

/**
 * Displays the measurement system selector used by the app header.
 *
 * @param {object} props Component props.
 * @param {"metric"|"imperial"} props.measurementSystem Active unit system.
 * @param {(value: "metric"|"imperial") => void} props.onChange Callback invoked when the unit system changes.
 * @returns {JSX.Element} The units dropdown control.
 */
export default function UnitsDropdown({ measurementSystem, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const isMetric = measurementSystem === "metric";
  const switchLabel = isMetric ? "Switch to Imperial" : "Switch to Metric";

  /**
   * Toggles between metric and imperial measurements.
   *
   * @returns {void}
   */
  const handleToggleSystem = () => {
    onChange(isMetric ? "imperial" : "metric");
  };

  /**
   * Renders a single unit option row with an optional selected indicator.
   *
   * @param {string} label Label shown for the unit option.
   * @param {boolean} selected Whether the option is currently active.
   * @returns {JSX.Element} The unit option row.
   */
  const renderUnitOption = (label, selected) => (
    <div className={selected ? "unitOptionSelected" : "unitOption"}>
      <span>{label}</span>
      {selected ? <img src={iconCheckmark} alt="Selected" /> : null}
    </div>
  );

  useEffect(() => {
    /**
     * Closes the dropdown when the user clicks outside of it.
     *
     * @param {MouseEvent} event The mouse event fired by the document.
     * @returns {void}
     */
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
