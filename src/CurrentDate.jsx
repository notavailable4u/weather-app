import iconFog from "./assets/images/iconFog.webp";
import iconSnow from "./assets/images/iconSnow.webp";
import iconStorm from "./assets/images/iconStorm.webp";
import iconDrizzle from "./assets/images/iconDrizzle.webp";
import iconOvercast from "./assets/images/iconOvercast.webp";
import iconPartlyCloudy from "./assets/images/iconPartlyCloudy.webp";
import iconRain from "./assets/images/iconRain.webp";
import iconSunny from "./assets/images/iconSunny.webp";

export function getIcon(weatherCode) {
  switch (weatherCode) {
    case 0:
      return {
        src: iconSunny,
        alt: "icon representing sunny conditions",
      };
    case 2:
      return {
        src: iconPartlyCloudy,
        alt: "icon representing partly cloudy conditions",
      };
    case 3:
      return {
        src: iconOvercast,
        alt: "icon representing overcast conditions",
      };
    case 45:
    case 48:
      return {
        src: iconFog,
        alt: "icon representing foggy conditions",
      };
    case 51:
    case 53:
    case 55:
    case 57:
      return {
        src: iconDrizzle,
        alt: "icon representing drizzle conditions",
      };
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
      return {
        src: iconRain,
        alt: "icon representing rainy conditions",
      };
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return {
        src: iconSnow,
        alt: "icon representing snowy conditions",
      };
    case 80:
    case 81:
    case 82:
    case 95:
    case 96:
    case 99:
      return {
        src: iconStorm,
        alt: "icon representing stormy conditions",
      };
    default:
      return {
        src: null,
        alt: null,
      };
  }
}

export default function CurrentDate({
  country,
  cityName,
  date,
  temperatureCurrent,
  weatherCode,
}) {
  const icon = getIcon(weatherCode);
  console.log(icon);
  console.log(icon.src);
  return (
    <div className="currentdate">
      <div>
        <p className="textPreset4">
          {cityName}, {country}
        </p>
        <p className="textPreset6">{date}</p>
      </div>
      {icon?.src ? (<img className="iconCurrent" src={icon.src} alt={icon.alt} />) : (<span/>)}
      <div>
        <p className="textPreset1">{temperatureCurrent}</p>
      </div>
    </div>
  );
}
