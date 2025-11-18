export default function CurrentDate({
  country,
  cityName,
  date,
  temperatureCurrent,
  weatherCode,
}) {
  console.log(country);

  return (
    <div className="currentdate">
      <h1>
        {cityName}, {country}
      </h1>
      <p>{date}</p>
      <p>Weather Code: {weatherCode}</p>
      <p>{temperatureCurrent}</p>
    </div>
  );
}
