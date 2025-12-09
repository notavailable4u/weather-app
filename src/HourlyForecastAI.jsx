import { useHourlyForecastFromNow } from "../hooks/useHourlyForecastFromNow";

function HourlyForecast({ weatherData }) {
  const hours = useHourlyForecastFromNow(weatherData);

  if (!hours.length) {
    return <p>No hourly data available.</p>;
  }

  return (
    <div>
      <h2>Hourly Forecast (from now)</h2>
      <ul>
        {hours.map((hour) => {
          const date = new Date(hour.time);
          const label = date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          });

          return (
            <li key={hour.time}>
              <strong>{label}</strong> – {hour.temperature.toFixed(1)}°F
            </li>
          );
        })}
      </ul>
    </div>
  );
}
