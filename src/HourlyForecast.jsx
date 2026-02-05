import { useMemo, useState } from "react";
import { getIcon } from "./CurrentDate";

export default function HourlyForecast({
  dayNamesArray,
  hourlyTimes,
  hourlyTemps,
  hourlyWeatherCodes,
}) {
  const safeDayNames = Array.isArray(dayNamesArray) ? dayNamesArray : [];
  const safeTimes = Array.isArray(hourlyTimes) ? hourlyTimes : [];
  const safeTemps = Array.isArray(hourlyTemps) ? hourlyTemps : [];
  const safeWeatherCodes = Array.isArray(hourlyWeatherCodes)
    ? hourlyWeatherCodes
    : [];

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const hourlyForSelectedDay = useMemo(() => {
    if (!safeTimes.length) {
      return [];
    }

    const startIndex = selectedDayIndex * 24;
    const endIndex = startIndex + 24;
    const now = Date.now();

    const results = [];
    for (let i = startIndex; i < endIndex && i < safeTimes.length; i++) {
      if (selectedDayIndex === 0 && Date.parse(safeTimes[i]) <= now) {
        continue;
      }
      results.push({
        time: safeTimes[i],
        temperature: safeTemps[i],
        weatherCode: safeWeatherCodes[i],
      });
    }

    return results;
  }, [safeTimes, safeTemps, safeWeatherCodes, selectedDayIndex]);

  return (
    <div className="hourly">
      <div className="hourHeading">
        <span className="textPreset5">Hourly Forecast</span>
        <select
          className="textPreset6"
          aria-label="Select forecast day"
          value={selectedDayIndex}
          onChange={(event) => setSelectedDayIndex(Number(event.target.value))}
        >
          {safeDayNames.map((dayName, index) => (
            <option key={`${dayName}-${index}`} value={index}>
              {dayName}
            </option>
          ))}
        </select>
      </div>
      <div className="hourList">
        {hourlyForSelectedDay.map((hour) => {
          const icon = getIcon(hour.weatherCode);
          const label = new Date(hour.time).toLocaleTimeString("en-US", {
            hour: "numeric",
          });

          return (
            <div className="hourContainer" key={hour.time}>
              {icon?.src ? (
                <img className="iconHourly" src={icon.src} alt={icon.alt} />
              ) : (
                <span />
              )}
              <span className="hourlyLabel">{label}</span>
              <span>{Math.round(hour.temperature)}&#176;</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
