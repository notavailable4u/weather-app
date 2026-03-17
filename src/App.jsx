import { useState } from "react";
import logoSvg from "./assets/images/logo.svg";
import Search from "./Search";
import UnitsDropdown from "./UnitsDropdown";

/**
 * Renders the main weather application shell and tracks shared UI state.
 *
 * @returns {JSX.Element} The application layout.
 */
function App() {
  const [measurementSystem, setMeasurementSystem] = useState("imperial");
  const [apiErrorMessage, setApiErrorMessage] = useState("");
  return (
    <>
      <header>
        <div className="logoUtilityBanner">
          <img src={logoSvg} alt="Weather App Logo" />
          <UnitsDropdown
            measurementSystem={measurementSystem}
            onChange={setMeasurementSystem}
          />
        </div>
        <h1>How's the sky looking today?</h1>
      </header>
      <main>
        <Search
          measurementSystem={measurementSystem}
          onApiError={setApiErrorMessage}
        />
        {apiErrorMessage ? (
          <p className="textPreset5" role="alert">
            {apiErrorMessage}
          </p>
        ) : null}
      </main>
    </>
  );
}
export default App;
