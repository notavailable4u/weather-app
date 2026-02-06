import SearchForm from "./SearchForm";

export default function NoResultView({ search }) {
  return (
    <SearchForm search={search}>
      <div className="noResult">
        <span className="textPreset4">No search result found!</span>
      </div>
    </SearchForm>
  );
}
