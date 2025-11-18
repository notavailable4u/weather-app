export default function DailyForecast({
  daysArray,
  dailyHighArray,
  dailyLowArray,
}) {
  const [day1, day2, day3, day4, day5, day6, day7] = daysArray;
  const [day1High, day2High, day3High, day4High, day5High, day6High, day7High] =
    dailyHighArray;
  const [day1Low, day2Low, day3Low, day4Low, day5Low, day6Low, day7Low] =
    dailyLowArray;
  return (
    <>
      <div className="days">
        <div className="dayContainer">
          {day1}
          <span>{day1High}</span> <span>{day1Low}</span>
        </div>
        <div className="dayContainer">
          {day2}
          <span>{day2High}</span> <span>{day2Low}</span>
        </div>
        <div className="dayContainer">
          {day3}
          <span>{day3High}</span> <span>{day3Low}</span>
        </div>
        <div className="dayContainer">
          {day4}
          <span>{day4High}</span> <span>{day4Low}</span>
        </div>
        <div className="dayContainer">
          {day5}
          <span>{day5High}</span> <span>{day5Low}</span>
        </div>
        <div className="dayContainer">
          {day6}
          <span>{day6High}</span> <span>{day6Low}</span>
        </div>
        <div className="dayContainer">
          {day7}
          <span>{day7High}</span> <span>{day7Low}</span>
        </div>
      </div>
    </>
  );
}
