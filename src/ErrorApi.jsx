import iconError from "./assets/icon-error.svg";

/**
 * Renders a retryable API error state.
 *
 * @param {object} props Component props.
 * @param {() => void} props.search Retry callback.
 * @param {string} props.error Error details to display.
 * @returns {JSX.Element} The API error view.
 */
export default function ErrorApi({ search, error }) {
  return (
    <div className="errorApi">
      <img src={iconError} alt="icon representing an error" />
      <span className="textPreset2">Something went wrong</span>
      <p className="textPreset5">
        We couldn't connect to the server: {error} Please try again in a few
        minutes.
      </p>
      <button onClick={() => search()} className="btnRetry textPreset7">
        Retry
      </button>
    </div>
  );
}
