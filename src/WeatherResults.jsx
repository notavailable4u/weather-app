import CurrentDate from "./CurrentDate";
import FeelLikeHumidity from "./FeelLikeHumidity";
import WindPrecipitation from "./WindPrecipitation";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

export default function WeatherResults({ weather }) {
  if (!weather) {
    return null;
  }

  return (
    <>
      <CurrentDate
        country={weather.country}
        cityName={weather.cityName}
        date={weather.date}
        temperatureCurrent={weather.temperatureCurrent}
        weatherCode={weather.weatherCode}
      />
      <FeelLikeHumidity
        feelsLike={weather.feelsLike}
        humidity={weather.humidity}
      />
      <WindPrecipitation
        wind={weather.wind}
        precipitation={weather.precipitation}
        precipitationMeasure={weather.precipitationMeasure}
        windMeasure={weather.windMeasure}
      />
      <DailyForecast
        daysArray={weather.daysArray}
        dailyHighArray={weather.dailyHighArray}
        dailyLowArray={weather.dailyLowArray}
        dailyWeathercodeArray={weather.dailyWeathercodeArray}
      />
      <HourlyForecast
        dayNamesArray={weather.dayNamesArray}
        hourlyForecast={weather.hourlyForecast}
      />
    </>
  );
}
