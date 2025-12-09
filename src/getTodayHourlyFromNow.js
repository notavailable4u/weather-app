function getTodayHourlyFromNow(data) {
    const { current, hourly } = data;

    // current.time is like "2025-12-03T10:45"
    const currentDate = current.time.slice(0, 10);     // "2025-12-03"
    const currentHour = parseInt(current.time.slice(11, 13), 10); // 10
    const currentMinutes = parseInt(current.time.slice(14, 16), 10); // 45

    // If it's exactly on the hour, start there; otherwise go to the next hour
    const nextHour = currentMinutes === 0 ? currentHour : currentHour + 1;
    const nextHourStr = String(nextHour).padStart(2, "0"); // "11"

    const startTimeStr = `${currentDate}T${nextHourStr}:00`; // "2025-12-03T11:00"

    // Find that timestamp in the hourly.time array
    const startIndex = hourly.time.findIndex((t) => t === startTimeStr);

    if (startIndex === -1) {
        // If for some reason we can't find it, just bail out
        return [];
    }

    // Now find where today ends (first timestamp that’s NOT today)
    let endIndex = hourly.time.length;
    for (let i = startIndex + 1; i < hourly.time.length; i++) {
        if (!hourly.time[i].startsWith(currentDate)) {
            endIndex = i;
            break;
        }
    }

    // Build an array of { time, temperature } for the rest of today
    const result = [];
    for (let i = startIndex; i < endIndex; i++) {
        result.push({
            time: hourly.time[i],
            temperature: hourly.temperature_2m[i],
        });
    }

    return result;
}
