import iconError from "./assets/icon-error.svg";

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
