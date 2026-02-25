import { useState } from "react";
import NoResultView from "./NoResultView";
import SearchForm from "./SearchForm";
import Loading from "./Loading";
import WeatherResults from "./WeatherResults";
import { fetchWeatherByQuery, mapWeatherResponse } from "./weatherApi";

const NOT_FOUND_ERROR = "We could not find that location. Try another city.";

export default function Search({ measurementSystem, onApiError }) {
  const [weather, setWeather] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function search(formData) {
    const query = formData.get("query");

    setHasSearched(true);
    setLoading(true);
    setError(null);
    onApiError?.("");

    try {
      const apiResponse = await fetchWeatherByQuery(query, measurementSystem);
      setWeather(mapWeatherResponse(apiResponse));
    } catch (err) {
      const message =
        err?.message || "Something went wrong while loading the weather data.";
      setError(message);
      if (message === NOT_FOUND_ERROR) {
        onApiError?.("");
      } else {
        onApiError?.(message);
      }
    } finally {
      setLoading(false);
    }
  }

  if (!hasSearched) {
    return <SearchForm search={search} />;
  }

  if (error === NOT_FOUND_ERROR) {
    return <NoResultView search={search} />;
  }

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <SearchForm search={search} />;
  }

  return (
    <>
      <SearchForm search={search} />
      <WeatherResults weather={weather} />
    </>
  );
}
