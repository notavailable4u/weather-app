export default function Search() {
  return (
    <>
    <div className="searchbar">
      <label>
        <input
          name="searchbar"
          placeholder="Search for a city, e.g., New York"
        />
      </label>
    </div>
          <div className="searchbutton">
        <button type="submit">Search</button>
      </div>
      </>
  );
}
