export default function FeelLikeHumidity({ feelsLike, humidity }) {
  return (
    <>
      <div className="feelhumid">
        <div className="weatherDetail">
          <p>Feels Like</p>
          <p>{feelsLike}&#176;</p>
        </div>
        <div className="weatherDetail">
          <p>Humidity</p>
          <p>{humidity}%</p>
        </div>
      </div>
    </>
  );
}
