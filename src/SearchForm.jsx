/**
 * Renders the reusable search form wrapper used across search states.
 *
 * @param {object} props Component props.
 * @param {(formData: FormData) => void | Promise<void>} props.search Form action handler.
 * @param {React.ReactNode} [props.children] Optional content rendered below the input.
 * @returns {JSX.Element} The search form UI.
 */
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
