/**
 * Shows wind speed and precipitation values for the current conditions.
 *
 * @param {object} props Component props.
 * @param {number} props.wind Current wind speed.
 * @param {number} props.precipitation Current precipitation value.
 * @param {string} props.windMeasure Display unit for wind speed.
 * @param {string} props.precipitationMeasure Display unit for precipitation.
 * @returns {JSX.Element} The wind and precipitation card.
 */
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
