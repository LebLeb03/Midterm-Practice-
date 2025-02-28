/**
 * Calculates the slope of a line given two points (x1, y1) and (x2, y2)
 * @param {number} x1 - x-coordinate of the first point
 * @param {number} y1 - y-coordinate of the first point
 * @param {number} x2 - x-coordinate of the second point
 * @param {number} y2 - y-coordinate of the second point
 * @returns {number} - The slope of the line
 */
export function slope(x1, y1, x2, y2) {
    if (
        typeof x1 !== "number" || typeof y1 !== "number" || 
        typeof x2 !== "number" || typeof y2 !== "number"
    ) {
        throw new Error("All inputs must be numbers.");
    }

    if (x1 === x2) {
        throw new Error("Slope is undefined (vertical line).");
    }

    return (y2 - y1) / (x2 - x1);
}
