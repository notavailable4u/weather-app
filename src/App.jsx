import logoSvg from "./assets/images/logo.svg";
import unitSvg from "./assets/images/icon-units.svg";
import Search from "./Search";

function App() {
  return (
    <>
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
      <main>
        <Search />
        <div className="currentdate">current date</div>
        <div className="feelhumid">Feel | Humidity</div>
        <div className="windpercip">Wind | Precipitation</div>
        <div className="days">
          day1 | day 2 |day 3| day4| day5 | day6 | day 7|
        </div>
        <div className="hourly">Hour forecast and button</div>
      </main>
    </>
  );
}

export default App;
