export default function WindPrecipitation({
  wind,
  precipitation,
  windMeasure,
  precipitationMeasure,
}) {
  console.log(windMeasure);
  return (
    <>
      <div className="windprecipitation">
        <div className="weatherDetail">
          <p>Wind</p>
          <p>
            {wind} {windMeasure}
          </p>
        </div>
        <div className="weatherDetail">
          <p>Precipitation</p>
          <p>{precipitation} {precipitationMeasure}</p>
        </div>
      </div>
    </>
  );
}
