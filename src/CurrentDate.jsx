import iconFog from "./assets/images/iconFog.webp";
import iconSnow from "./assets/images/iconSnow.webp";
import iconStorm from "./assets/images/iconStorm.webp";
import iconDrizzle from "./assets/images/iconDrizzle.webp";
import iconOvercast from "./assets/images/iconOvercast.webp";
import iconPartlyCloudy from "./assets/images/iconPartlyCloudy.webp";
import iconRain from "./assets/images/iconRain.webp";
import iconSunny from "./assets/images/iconSunny.webp";
const ICONS_BY_WEATHER_CODE = {
  0: {
    src: iconSunny,
    alt: "icon representing sunny conditions",
  },
  2: {
    src: iconPartlyCloudy,
    alt: "icon representing partly cloudy conditions",
  },
  3: {
    src: iconOvercast,
    alt: "icon representing overcast conditions",
  },
  45: {
    src: iconFog,
    alt: "icon representing foggy conditions",
  },
  48: {
    src: iconFog,
    alt: "icon representing foggy conditions",
  },
  51: {
    src: iconDrizzle,
    alt: "icon representing drizzle conditions",
  },
  53: {
    src: iconDrizzle,
    alt: "icon representing drizzle conditions",
  },
  55: {
    src: iconDrizzle,
    alt: "icon representing drizzle conditions",
  },
  57: {
    src: iconDrizzle,
    alt: "icon representing drizzle conditions",
  },
  61: {
    src: iconRain,
    alt: "icon representing rainy conditions",
  },
  63: {
    src: iconRain,
    alt: "icon representing rainy conditions",
  },
  65: {
    src: iconRain,
    alt: "icon representing rainy conditions",
  },
  66: {
    src: iconRain,
    alt: "icon representing rainy conditions",
  },
  67: {
    src: iconRain,
    alt: "icon representing rainy conditions",
  },
  71: {
    src: iconSnow,
    alt: "icon representing snowy conditions",
  },
  73: {
    src: iconSnow,
    alt: "icon representing snowy conditions",
  },
  75: {
    src: iconSnow,
    alt: "icon representing snowy conditions",
  },
  77: {
    src: iconSnow,
    alt: "icon representing snowy conditions",
  },
  85: {
    src: iconSnow,
    alt: "icon representing snowy conditions",
  },
  86: {
    src: iconSnow,
    alt: "icon representing snowy conditions",
  },
  80: {
    src: iconStorm,
    alt: "icon representing stormy conditions",
  },
  81: {
    src: iconStorm,
    alt: "icon representing stormy conditions",
  },
  82: {
    src: iconStorm,
    alt: "icon representing stormy conditions",
  },
  95: {
    src: iconStorm,
    alt: "icon representing stormy conditions",
  },
  96: {
    src: iconStorm,
    alt: "icon representing stormy conditions",
  },
  99: {
    src: iconStorm,
    alt: "icon representing stormy conditions",
  },
};

const DEFAULT_ICON = {
  src: null,
  alt: null,
};

/**
 * Maps an Open-Meteo weather code to the matching icon metadata.
 *
 * @param {number} weatherCode Numeric weather code from the API.
 * @returns {{src: string | null, alt: string | null}} Icon metadata for the supplied code.
 */
export function getIcon(weatherCode) {
  return ICONS_BY_WEATHER_CODE[weatherCode] ?? DEFAULT_ICON;
}

/**
 * Displays the current location, date, condition icon, and temperature.
 *
 * @param {object} props Component props.
 * @param {string} props.country Country name for the selected location.
 * @param {string} props.cityName City name for the selected location.
 * @param {string} props.date Formatted current date string.
 * @param {number} props.temperatureCurrent Rounded current temperature.
 * @param {number} props.weatherCode Current weather code.
 * @returns {JSX.Element} The current conditions summary.
 */
export default function CurrentDate({
  country,
  cityName,
  date,
  temperatureCurrent,
  weatherCode,
}) {
  const icon = getIcon(weatherCode);
  return (
    <div className="currentdate">
      <div>
        <p className="textPreset4">
          {cityName}, {country}
        </p>
        <p className="textPreset6">{date}</p>
      </div>
      {icon?.src ? (
        <img className="iconCurrent" src={icon.src} alt={icon.alt} />
      ) : (
        <span />
      )}
      <div>
        <p className="textPreset1">{temperatureCurrent} &#176; </p>
      </div>
    </div>
  );
}
