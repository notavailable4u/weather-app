import { useMemo } from "react";

export function useHourlyForecastFromNow(data) {
    return useMemo(() => {
        if (!data || !data.current || !data.hourly) {
            return [];
        }

        const { current, hourly } = data;

        // Example current.time = "2025-12-03T10:45"
        const currentDate = current.time.slice(0, 10); // "2025-12-03"
        const currentHour = parseInt(current.time.slice(11, 13), 10);
        const currentMinutes = parseInt(current.time.slice(14, 16), 10);

        // If we’re not exactly on the hour, start at the next one
        const startHour = currentMinutes === 0 ? currentHour : currentHour + 1;
        const startHourStr = String(startHour).padStart(2, "0");
        const startTimeStr = `${currentDate}T${startHourStr}:00`;

        const startIndex = hourly.time.findIndex(
            (t) => t === startTimeStr
        );

        if (startIndex === -1) {
            return [];
        }

        const results = [];

        for (let i = startIndex; i < hourly.time.length; i++) {
            // Stop when we move to the next day
            if (!hourly.time[i].startsWith(currentDate)) {
                break;
            }

            results.push({
                time: hourly.time[i],
                temperature: hourly.temperature_2m[i],
                windSpeed: hourly.wind_speed_10m?.[i], // optional, safe
                precipitation: hourly.precipitation?.[i], // optional
            });
        }

        return results;
    }, [data]);
}
