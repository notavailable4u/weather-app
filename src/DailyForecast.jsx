import { getIcon } from "./CurrentDate";
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
