/**
 * Shows secondary current-condition metrics for feels-like temperature and humidity.
 *
 * @param {object} props Component props.
 * @param {number} props.feelsLike Rounded apparent temperature.
 * @param {number} props.humidity Relative humidity percentage.
 * @returns {JSX.Element} The feels-like and humidity card.
 */
export default function FeelLikeHumidity({ feelsLike, humidity }) {
  return (
    <>
      <div className="feelhumid">
        <div className="weatherDetail">
          <span className="textPreset6">Feels Like</span>
          <span className="textPreset3">{feelsLike} &#176;</span>
        </div>
        <div className="weatherDetail">
          <span className="textPreset6">Humidity</span>
          <span className="textPreset3">{humidity}%</span>
        </div>
      </div>
    </>
  );
}
