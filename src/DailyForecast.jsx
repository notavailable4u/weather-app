import { getIcon } from "./CurrentDate";

export default function DailyForecast({
  daysArray,
  dailyHighArray,
  dailyLowArray,
  dailyWeathercodeArray,
}) {
  console.log(dailyWeathercodeArray);
  const safeDaysArray = Array.isArray(daysArray) ? daysArray : [];
  const safeHighArray = Array.isArray(dailyHighArray) ? dailyHighArray : [];
  const safeLowArray = Array.isArray(dailyLowArray) ? dailyLowArray : [];
  const safeWeatherCodes = Array.isArray(dailyWeathercodeArray)
    ? dailyWeathercodeArray
    : [];
  console.log(daysArray);
  const roundedHighTemp = safeHighArray.map((number) => Math.round(number));
  const roundedLowTemp = safeLowArray.map((number) => Math.round(number));
  const dailyIcons = safeWeatherCodes.map((code) => getIcon(code));

  return (
    <>
      <div className="days">
        <p>Daily Forecast</p>
        <div className="sevenDayContainer">
          {safeDaysArray.map((day, index) => {
            const icon = dailyIcons[index];
            return (
              <div className="dayContainer" key={`${day}-${index}`}>
                <span className="textPreset6">{day}</span>
                {icon?.src ? (
                  <img className="iconDaily" src={icon.src} alt={icon.alt} />
                ) : (
                  <span />
                )}
                <div className="dailyHighLow">
                  <span>{roundedHighTemp[index]}</span>{" "}
                  <span>{roundedLowTemp[index]}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
