/**
 * Determines the output based on divisibility by 3 and 7
 * @param {number} num - The input number
 * @returns {string} - "Yee", "Ha", "Yee Ha", or "Nada"
 */
export function yee_ha(num) {
    if (typeof num !== "number") {
        throw new Error("Input must be a number.");
    }

    if (num % 3 === 0 && num % 7 === 0) {
        return "Yee Ha";
    } else if (num % 3 === 0) {
        return "Yee";
    } else if (num % 7 === 0) {
        return "Ha";
    } else {
        return "Nada"
    }
}