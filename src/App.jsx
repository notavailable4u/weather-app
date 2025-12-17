import { useState } from "react";
import logoSvg from "./assets/images/logo.svg";
import Search from "./Search";
import UnitsDropdown from "./UnitsDropdown";

function App() {
  const [measurementSystem, setMeasurementSystem] = useState("imperial");

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
        <Search measurementSystem={measurementSystem} />
      </main>
      {/*  */}
    </>
  );
}
export default App;
