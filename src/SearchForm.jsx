export default function SearchForm({ search, children }) {
  return (
    <form action={search}>
      <div className="searchbar">
        <label>
          <input name="query" placeholder="Search for a city, e.g., New York" />
        </label>
        <button type="submit">Search</button>
      </div>
      {children}
    </form>
  );
}
