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
          <span className="textPreset6">Wind</span>
          <span className="textPreset3">
            {wind} {windMeasure}
          </span>
        </div>
        <div className="weatherDetail">
          <span className="textPreset6">Precipitation</span>
          <span className="textPreset3">{precipitation} {precipitationMeasure}</span>
        </div>
      </div>
    </>
  );
}
