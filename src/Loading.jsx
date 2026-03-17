import SearchForm from "./SearchForm";
import iconLoading from "./assets/images/iconLoading.svg";

/**
 * Displays the loading state while weather data is being fetched.
 *
 * @param {object} props Component props.
 * @param {(formData: FormData) => void | Promise<void>} [props.search] Search action handler passed to the shared form.
 * @returns {JSX.Element} The loading view.
 */
export default function Loading({ search }) {
  return (
    <SearchForm search={search}>
      <div className="currentdate">
        <div>
          <img
            className="iconCurrent"
            src={iconLoading}
            alt="icon representing loading state"
          />
          <p className="textPreset6">Loading...</p>
          <p className="textPreset6"></p>
        </div>

        <div>
          <p className="textPreset1"></p>
        </div>
      </div>
    </SearchForm>
  );
}
