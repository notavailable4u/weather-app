import CurrentDate from "./CurrentDate";
import { useState } from "react";
import FeelLikeHumidity from "./FeelLikeHumidity";
import WindPrecipitation from "./WindPrecipitation";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";

export default function Search() {
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [temperatureCurrent, setTemperatureCurrent] = useState("");
  const [weatherCode, setWeatherCode] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [precipitation, setPrecipitation] = useState("");
  const [daysArray, setDaysArray] = useState("");
  const [dailyHighArray, setDailyHighArray] = useState([]);
  const [dailyLowArray, setDailyLowArray] = useState([]);
  const [dailyWeathercodeArray, setDailyWeathercodeArray] = useState([]);
  // const [hourlyHighArray, setHourlyHighArray] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function search(formData) {
    const query = formData.get("query");
    setLoading(true);
    setError(null);
    // setWeather(null);

    try {
      // Get geolocation from Open-Meteo Geocoding API
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=1&language=en&format=json`;
      const geoResponse = await fetch(geoUrl);
      const geoData = await geoResponse.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("Location not found");
      }

      const {
        latitude,
        longitude,
        timezone,
        name: cityName,
        country,
      } = geoData.results[0];

      console.log(
        "Geolocation:",
        latitude,
        longitude,
        timezone,
        cityName,
        country
      );

      // Use the coordinates to call the Open-Meteo Forecast API
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=wind_speed_10m,temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,rain,snowfall,showers&timezone=${timezone}&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`;

      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();
      console.log(weatherData);

      const date = weatherData.current.time;
      console.log(date);
      const temperatureCurrent = weatherData.current.temperature_2m;
      const weatherCode = weatherData.current.weather_code;
      const feelsLike = weatherData.current.apparent_temperature;
      console.log(feelsLike);
      const humidity = weatherData.current.relative_humidity_2m;
      const wind = weatherData.current.wind_speed_10m;
      const precipitation = weatherData.current.precipitation;
      const daysArray = weatherData.daily.time;
      console.log(daysArray);
      const dailyHighArray = weatherData.daily.temperature_2m_max;
      const dailyLowArray = weatherData.daily.temperature_2m_min;
      const dailyWeathercodeArray = weatherData.daily.weather_code;
      console.log(dailyWeathercodeArray);
      // const hourlyHighArray = weatherData.hourly.temperature_2m;

      function formatDate(isoString) {
        const date = new Date(isoString);
        return Intl.DateTimeFormat("en-US", {
          weekday: "long",
          month: "short",
          day: "numeric",
          year: "numeric",
        }).format(date);
      }

      //convert time to short day name for Daily Forecat (daysArray)
      function getShortDayName(isoString) {
        const date = new Date(isoString);
        return Intl.DateTimeFormat("en-US", {
          weekday: "short",
        }).format(date);
      }

      // Store results in state
      // setWeather({
      //   location: `${name}, ${country}`,
      //   latitude,
      //   longitude,
      //   timezone,
      //   current: weatherData.current,
      //   daily: weatherData.daily,
      // });

      setWeather(weatherData);
      console.log(weather);
      setCountry(country);
      setCityName(cityName);
      setDate(formatDate(date));
      setTemperatureCurrent(Math.round(temperatureCurrent));
      setWeatherCode(weatherCode);
      setFeelsLike(Math.round(feelsLike));
      console.log(feelsLike);
      setHumidity(humidity);
      setWind(Math.round(wind));
      setPrecipitation(precipitation);
      console.log(precipitation);
      setDaysArray(daysArray.map((isoString) => getShortDayName(isoString)));
      console.log(daysArray);
      setDailyHighArray(dailyHighArray);
      setDailyLowArray(dailyLowArray);
      setDailyWeathercodeArray(dailyWeathercodeArray);
      console.log(dailyWeathercodeArray);

      // setHourlyHighArray(hourlyHighArray);
      // console.log(hourlyHighArray);
    } catch (err) {
      console.error(`Error: ${err}`);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form action={search}>
        <div className="searchbar">
          <label>
            <input
              name="query"
              placeholder="Search for a city, e.g., New York"
            />
          </label>
          <button type="submit">Search</button>
        </div>
      </form>
      <CurrentDate
        country={country}
        cityName={cityName}
        date={date}
        temperatureCurrent={temperatureCurrent}
        weatherCode={weatherCode}
      />
      <FeelLikeHumidity feelsLike={feelsLike} humidity={humidity} />
      <WindPrecipitation wind={wind} precipitation={precipitation} />
      <DailyForecast
        daysArray={daysArray}
        dailyHighArray={dailyHighArray}
        dailyLowArray={dailyLowArray}
        dailyWeathercodeArray={dailyWeathercodeArray}
      />
      <HourlyForecast />
    </>
  );
}
