import { slope } from '../slope.js';

describe("Slope Calculation", function() {
    it("should correctly calculate slope for (1,1) to (3,5)", function() {
        expect(slope(1, 1, 3, 5)).toBe(2);
    });

    it("should correctly calculate slope for (-2,-4) to (2,4)", function() {
        expect(slope(-2, -4, 2, 4)).toBe(2);
    });

    it("should correctly calculate slope for (0,0) to (5,10)", function() {
        expect(slope(0, 0, 5, 10)).toBe(2);
    });

    it("should return a negative slope for (1,5) to (4,2)", function() {
        expect(slope(1, 5, 4, 2)).toBe(-1);
    });

    it("should throw an error for a vertical line (undefined slope)", function() {
        expect(() => slope(3, 1, 3, 7)).toThrowError("Slope is undefined (vertical line).");
    });

    it("should throw an error for non-numeric inputs", function() {
        expect(() => slope("a", 2, 3, 4)).toThrowError("All inputs must be numbers.");
        expect(() => slope(1, null, 3, 4)).toThrowError("All inputs must be numbers.");
    });
});
