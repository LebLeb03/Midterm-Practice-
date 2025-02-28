/**
 * Calculate the minutes required to mow a lawn
 * @param {number} width - The width of the lawn in meters
 * @param {number} length - The length of the lawn in meters
 * @param {number} rate - The square meters cut per minute
 * @returns {number} - The total time in minutes to mow the lawn
 */
function calculateMowingTime(width, length, rate) {
    if (typeof width !== "number" || typeof length !== "number" || typeof rate !== "number" ||
        width <= 0 || length <= 0 || rate <= 0) {
        throw new Error("All inputs must be positive numbers.");
    }

    // Calculate the area of the lawn
    const area = width * length;

    // Calculate the time needed to mow the lawn
    return area / rate;
}

export{calculateMowingTime}