import { getIcon } from "./CurrentDate";

/**
 * Renders the seven-day forecast overview.
 *
 * @param {object} props Component props.
 * @param {string[]} props.daysArray Short day labels.
 * @param {number[]} props.dailyHighArray Daily high temperatures.
 * @param {number[]} props.dailyLowArray Daily low temperatures.
 * @param {number[]} props.dailyWeathercodeArray Daily weather codes.
 * @returns {JSX.Element} The daily forecast card.
 */
export default function DailyForecast({
  daysArray,
  dailyHighArray,
  dailyLowArray,
  dailyWeathercodeArray,
}) {
  const safeDaysArray = Array.isArray(daysArray) ? daysArray : [];
  const safeHighArray = Array.isArray(dailyHighArray) ? dailyHighArray : [];
  const safeLowArray = Array.isArray(dailyLowArray) ? dailyLowArray : [];
  const safeWeatherCodes = Array.isArray(dailyWeathercodeArray)
    ? dailyWeathercodeArray
    : [];

  const roundedHighTemp = safeHighArray.map((number) => Math.round(number));
  const roundedLowTemp = safeLowArray.map((number) => Math.round(number));
  const dailyIcons = safeWeatherCodes.map((code) => getIcon(code));

  /**
   * Formats a temperature value for display.
   *
   * @param {number} temp Temperature value to format.
   * @returns {string} Formatted temperature or a fallback placeholder.
   */
  const formatTemp = (temp) => (Number.isFinite(temp) ? `${temp}°` : "--");

  return (
    <div className="days">
      <p className="textPreset5">Daily Forecast</p>
      <div className="sevenDayContainer">
        {safeDaysArray.map((day, index) => {
          const icon = dailyIcons[index];
          return (
            <div className="dayContainer" key={`${day || "day"}-${index}`}>
              <span className="textPreset6">{day || "--"}</span>
              {icon?.src ? (
                <img
                  className="iconDaily"
                  src={icon.src}
                  alt={icon.alt || ""}
                />
              ) : (
                <span className="iconDaily" aria-hidden="true" />
              )}
              <div className="dailyHighLow">
                <span>{formatTemp(roundedHighTemp[index])}</span>{" "}
                <span>{formatTemp(roundedLowTemp[index])}</span>
              </div>
            </div>
          );
        })}
        {safeDaysArray.length === 0 && (
          <div className="dayContainer">
            <span className="textPreset6">No forecast data</span>
          </div>
        )}
      </div>
    </div>
  );
}
