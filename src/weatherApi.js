export async function fetchWeatherByQuery(query, measurementSystem) {
  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`;
  const geoResponse = await fetch(geoUrl);

  if (!geoResponse.ok) {
    throw new Error(
      "We could not look up that location right now. Please try again.",
    );
  }

  const geoData = await geoResponse.json();
  if (!geoData.results || geoData.results.length === 0) {
    throw new Error("We could not find that location. Try another city.");
  }

  const { latitude, longitude, timezone, name, country } = geoData.results[0];
  const usingImperial = measurementSystem !== "metric";
  const unitParams = usingImperial
    ? "&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch"
    : "&wind_speed_unit=kmh&temperature_unit=celsius&precipitation_unit=mm";

  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=wind_speed_10m,temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,rain,snowfall,showers&timezone=${timezone}${unitParams}`;
  const weatherResponse = await fetch(weatherUrl);

  if (!weatherResponse.ok) {
    throw new Error(
      "Weather data is unavailable right now. Please try again in a moment.",
    );
  }

  const weatherData = await weatherResponse.json();
  if (!weatherData?.current || !weatherData?.daily || !weatherData?.hourly) {
    throw new Error(
      "We received an unexpected weather response. Please try again.",
    );
  }

  return {
    location: {
      cityName: name,
      country,
    },
    weatherData,
  };
}

function formatCurrentDate(isoString) {
  return Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(isoString));
}

function getShortDayName(isoString) {
  return Intl.DateTimeFormat("en-US", {
    weekday: "short",
  }).format(new Date(isoString));
}

function getLongDayName(isoString) {
  return Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(new Date(isoString));
}

export function mapWeatherResponse({ weatherData, location }) {
  const dailyTimes = Array.isArray(weatherData.daily.time) ? weatherData.daily.time : [];
  const hourlyTimes = Array.isArray(weatherData.hourly.time) ? weatherData.hourly.time : [];
  const hourlyTemps = Array.isArray(weatherData.hourly.temperature_2m)
    ? weatherData.hourly.temperature_2m
    : [];
  const hourlyWeatherCodes = Array.isArray(weatherData.hourly.weather_code)
    ? weatherData.hourly.weather_code
    : [];
  const hourlyForecastLength = Math.min(
    hourlyTimes.length,
    hourlyTemps.length,
    hourlyWeatherCodes.length,
  );
  const hourlyForecast = Array.from({ length: hourlyForecastLength }, (_, index) => ({
    time: hourlyTimes[index],
    temperature: hourlyTemps[index],
    weatherCode: hourlyWeatherCodes[index],
  }));

  return {
    cityName: location.cityName,
    country: location.country,
    date: formatCurrentDate(weatherData.current.time),
    temperatureCurrent: Math.round(weatherData.current.temperature_2m),
    weatherCode: weatherData.current.weather_code,
    feelsLike: Math.round(weatherData.current.apparent_temperature),
    humidity: weatherData.current.relative_humidity_2m,
    wind: Math.round(weatherData.current.wind_speed_10m),
    windMeasure: weatherData.current_units.wind_speed_10m,
    precipitation: weatherData.current.precipitation,
    precipitationMeasure: weatherData.current_units.precipitation,
    daysArray: dailyTimes.map((isoString) => getShortDayName(isoString)),
    dailyHighArray: weatherData.daily.temperature_2m_max,
    dailyLowArray: weatherData.daily.temperature_2m_min,
    dailyWeathercodeArray: weatherData.daily.weather_code,
    dayNamesArray: hourlyTimes
      .filter((_, index) => index % 24 === 0)
      .slice(0, 7)
      .map((isoString) => getLongDayName(isoString)),
    hourlyForecast,
  };
}
