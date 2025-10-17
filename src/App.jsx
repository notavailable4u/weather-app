import logoSvg from "./assets/images/logo.svg";
import unitSvg from "./assets/images/icon-units.svg";

function App() {
  return (
    <header>
      <div className="logoUtilityBanner">
        <img src={logoSvg} alt="Weather App Logo" />

        <label htmlFor="unitSelect"></label>
        <select name="units" id="unitSelect">
          <option value="">Utils:</option>
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
      </div>
      <h1>How's the sky looking today?</h1>
    </header>
  );
}

export default App;
