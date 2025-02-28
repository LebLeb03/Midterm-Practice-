/**
 * Determines air quality based on AQI (Air Quality Index).
 * @param {number} aqi - The air quality index
 * @returns {string} - The air quality description
 */
export function computeAirQuality(aqi) {
    if (typeof aqi !== "number" || aqi < 0) {
        throw new Error("AQI must be a non-negative number.");
    }

    if (aqi >= 0 && aqi <= 50) {
        return "Good";
    } else if (aqi >= 51 && aqi <= 100) {
        return "Moderate";
    } else if (aqi >= 101 && aqi <= 150) {
        return "Unhealthy for Sensitive Groups";
    } else if (aqi >= 151 && aqi <= 200) {
        return "Unhealthy";
    } else if (aqi >= 201 && aqi <= 300) {
        return "Very Unhealthy";
    } else {
        return "Hazardous";
    }
}
