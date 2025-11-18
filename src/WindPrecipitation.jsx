export default function WindPrecipitation({ wind, precipitation }) {
  return (
    <>
      <div className="windprecipitation">
        <div className="weatherDetail">
          <p>Wind</p>
          <p>{wind}</p>
        </div>
        <div className="weatherDetail">
          <p>Precipitation</p>
          <p>{precipitation}</p>
        </div>
      </div>
    </>
  );
}
