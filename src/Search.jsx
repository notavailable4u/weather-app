import CurrentDate from "./CurrentDate";
import { useState } from "react";
import FeelLikeHumidity from "./FeelLikeHumidity";
import WindPrecipitation from "./WindPrecipitation";
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import NoResultView from "./NoResultView";
import SearchForm from "./SearchForm";

export default function Search({ measurementSystem }) {
  const [weather, setWeather] = useState(null);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");
  const [temperatureCurrent, setTemperatureCurrent] = useState("");
  const [weatherCode, setWeatherCode] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [windMeasure, setWindMeasure] = useState("");
  const [precipitation, setPrecipitation] = useState("");
  const [precipitationMeasure, setPrecipitationMeasure] = useState("");
  const [daysArray, setDaysArray] = useState("");
  const [dailyHighArray, setDailyHighArray] = useState([]);
  const [dailyLowArray, setDailyLowArray] = useState([]);
  const [dailyWeathercodeArray, setDailyWeathercodeArray] = useState([]);
  const [dayNamesArray, setDayNamesArray] = useState([]);
  const [hourlyTimes, setHourlyTimes] = useState([]);
  const [hourlyTemps, setHourlyTemps] = useState([]);
  const [hourlyWeatherCodes, setHourlyWeatherCodes] = useState([]);
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

      const usingImperial = measurementSystem !== "metric";
      const unitParams = usingImperial
        ? "&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch"
        : "&wind_speed_unit=kmh&temperature_unit=celsius&precipitation_unit=mm";

      // Use the coordinates to call the Open-Meteo Forecast API
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=wind_speed_10m,temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,rain,snowfall,showers&timezone=${timezone}${unitParams}`;

      console.log("Weather URL:", weatherUrl);

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
      const windMeasure = weatherData.current_units.wind_speed_10m;
      console.log(windMeasure);
      const precipitation = weatherData.current.precipitation;
      const precipitationMeasure = weatherData.current_units.precipitation;
      console.log(precipitation);
      const daysArray = weatherData.daily.time;
      console.log(daysArray);
      const dailyHighArray = weatherData.daily.temperature_2m_max;
      const dailyLowArray = weatherData.daily.temperature_2m_min;
      const dailyWeathercodeArray = weatherData.daily.weather_code;
      console.log(dailyWeathercodeArray);
      const hourlyDateArray = weatherData.hourly.time;
      const hourlyTempArray = weatherData.hourly.temperature_2m;
      const hourlyWeatherCodeArray = weatherData.hourly.weather_code;

      // Hourly Forecast conversions
       const safeHourlyDates = Array.isArray(hourlyDateArray) ? hourlyDateArray : [];
  const dayOne24Hours = safeHourlyDates.slice(0, 24);
  const dayTwo24Hours = safeHourlyDates.slice(24, 48);
  const dayThree24Hours = safeHourlyDates.slice(48, 72);
  const dayFour24Hours = safeHourlyDates.slice(72, 96);
  const dayFive24Hours = safeHourlyDates.slice(96, 120);
  const daySix24Hours = safeHourlyDates.slice(120, 144);
  const daySeven24Hours = safeHourlyDates.slice(144, 168);

  function getLongDayName(isoString) {
  const date = new Date(isoString);
  return Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);
}

  const dayOneName = getLongDayName(dayOne24Hours[0]);
  const dayTwoName = getLongDayName(dayTwo24Hours[0]);
  const dayThreeName = getLongDayName(dayThree24Hours[0]);
  const dayFourName = getLongDayName(dayFour24Hours[0]);
  const dayFiveName = getLongDayName(dayFive24Hours[0]);
  const daySixName = getLongDayName(daySix24Hours[0]);
  const daySevenName = getLongDayName(daySeven24Hours[0]);

  const dayNamesArray = [
    dayOneName,
    dayTwoName,
    dayThreeName,
    dayFourName,
    dayFiveName,
    daySixName,
    daySevenName,
  ];

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
      setWindMeasure(windMeasure);
      setPrecipitation(precipitation);
      console.log(precipitation);
      setPrecipitationMeasure(precipitationMeasure);
      setDaysArray(daysArray.map((isoString) => getShortDayName(isoString)));
      console.log(daysArray);
      setDailyHighArray(dailyHighArray);
      setDailyLowArray(dailyLowArray);
      setDailyWeathercodeArray(dailyWeathercodeArray);
      setDayNamesArray(dayNamesArray);
      setHourlyTimes(hourlyDateArray);
      setHourlyTemps(hourlyTempArray);
      setHourlyWeatherCodes(hourlyWeatherCodeArray);
      console.log(dayNamesArray);

      // setHourlyHighArray(hourlyHighArray);
      // console.log(hourlyHighArray);
    } catch (err) {
      console.error(`Error: ${err}`);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (error === "Location not found") {
    return <NoResultView search={search} />;
  }

  return (
    <>
      <SearchForm search={search} />
      <CurrentDate
        country={country}
        cityName={cityName}
        date={date}
        temperatureCurrent={temperatureCurrent}
        weatherCode={weatherCode}
      />
      <FeelLikeHumidity feelsLike={feelsLike} humidity={humidity} />
      <WindPrecipitation
        wind={wind}
        precipitation={precipitation}
        precipitationMeasure={precipitationMeasure}
        windMeasure={windMeasure}
      />
      <DailyForecast
        daysArray={daysArray}
        dailyHighArray={dailyHighArray}
        dailyLowArray={dailyLowArray}
        dailyWeathercodeArray={dailyWeathercodeArray}
      />
      <HourlyForecast
        dayNamesArray={dayNamesArray}
        hourlyTimes={hourlyTimes}
        hourlyTemps={hourlyTemps}
        hourlyWeatherCodes={hourlyWeatherCodes}
      />
    </>
  );
}
