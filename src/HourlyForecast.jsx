import { useMemo, useState } from "react";
import { getIcon } from "./CurrentDate";

export default function HourlyForecast({
  dayNamesArray,
  hourlyForecast,
}) {
  const safeDayNames = Array.isArray(dayNamesArray) ? dayNamesArray : [];
  const safeHourlyForecast = Array.isArray(hourlyForecast) ? hourlyForecast : [];

  const [selectedDayIndex, setSelectedDayIndex] = useState(0);

  const hourlyForSelectedDay = useMemo(() => {
    if (!safeHourlyForecast.length) {
      return [];
    }

    const startIndex = selectedDayIndex * 24;
    const endIndex = startIndex + 24;
    const now = Date.now();

    const results = [];
    for (let i = startIndex; i < endIndex && i < safeHourlyForecast.length; i++) {
      const hour = safeHourlyForecast[i];

      if (!hour?.time) {
        continue;
      }

      if (selectedDayIndex === 0 && Date.parse(hour.time) <= now) {
        continue;
      }
      results.push(hour);
    }

    return results;
  }, [safeHourlyForecast, selectedDayIndex]);

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
