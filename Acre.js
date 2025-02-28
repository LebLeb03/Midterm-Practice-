/**
 * Convert square feet to acres
 * @param {number} squareFeet - The area in square feet
 * @returns {number} - The area in acres
 */
function convertToAcres(squareFeet) {
    const SQUARE_FEET_PER_ACRE = 43560;
    
    // Validate input
    if (typeof squareFeet !== "number" || squareFeet <= 0) {
        throw new Error("Input must be a positive number.");
    }

    return squareFeet / SQUARE_FEET_PER_ACRE;
}
export {convertToAcres}

