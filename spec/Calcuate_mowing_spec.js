import {calculateMowingTime} from '../Mowing_time.js';

describe("Lawn Mowing Time Calculation", function() {
    it("should correctly calculate time for a 10m x 20m lawn at 5 m²/min", function() {
        expect(calculateMowingTime(10, 20, 5)).toBe(40);
    });

    it("should correctly calculate time for a 15m x 30m lawn at 10 m²/min", function() {
        expect(calculateMowingTime(15, 30, 10)).toBe(45);
    });

    it("should correctly calculate time for a 25m x 50m lawn at 20 m²/min", function() {
        expect(calculateMowingTime(25, 50, 20)).toBe(62.5);
    });

    it("should throw an error if any input is negative", function() {
        expect(() => calculateMowingTime(-10, 20, 5)).toThrowError("All inputs must be positive numbers.");
        expect(() => calculateMowingTime(10, -20, 5)).toThrowError("All inputs must be positive numbers.");
        expect(() => calculateMowingTime(10, 20, -5)).toThrowError("All inputs must be positive numbers.");
    });

    it("should throw an error for non-numeric input", function() {
        expect(() => calculateMowingTime("width", 20, 5)).toThrowError("All inputs must be positive numbers.");
        expect(() => calculateMowingTime(10, "length", 5)).toThrowError("All inputs must be positive numbers.");
        expect(() => calculateMowingTime(10, 20, "rate")).toThrowError("All inputs must be positive numbers.");
    });
});