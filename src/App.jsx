import logoSvg from "./assets/images/logo.svg";
import unitSvg from "./assets/images/icon-units.svg";
import Search from "./Search";


function App() {
  return (
    <>
      <header>
        <div className="logoUtilityBanner">
          <img src={logoSvg} alt="Weather App Logo" />

          <label htmlFor="unitSelect">
            <select name="units" id="unitSelect">
              <option value="">Units:</option>
              <option value="metric">Metric</option>
              <option value="imperial">Imperial</option>
            </select>
          </label>
        </div>
        <h1>How's the sky looking today?</h1>
      </header>
      <main>
        <Search />
      </main>
      {/*  */}
    </>
  );
}
export default App;
