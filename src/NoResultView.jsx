export default function NoResultView({ search }) {
  return (
    <>
      <form action={search}>
        <div className="searchbar">
          <label>
            <input
              name="query"
              placeholder="Search for a city, e.g., New York"
            />
          </label>
          <button type="submit">Search</button>
        </div>
        <div className="noResult">
          <span className="textPreset4">No search result found.</span>
        </div>
      </form>
    </>
  );
}
