import SearchForm from "./SearchForm";

/**
 * Renders the empty-state view shown when a location search returns no results.
 *
 * @param {object} props Component props.
 * @param {(formData: FormData) => void | Promise<void>} props.search Search action handler.
 * @returns {JSX.Element} The no-results state.
 */
export default function NoResultView({ search }) {
  return (
    <SearchForm search={search}>
      <div className="noResult">
        <span className="textPreset4">No search result found!</span>
      </div>
    </SearchForm>
  );
}
