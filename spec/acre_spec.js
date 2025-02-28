import {convertToAcres} from '../Acre.js';

describe("Square Feet to Acres Conversion", function() {
    it("should convert 43,560 square feet to 1 acre", function() {
        expect(convertToAcres(43560)).toBe(1);
    });

    it("should convert 87,120 square feet to 2 acres", function() {
        expect(convertToAcres(87120)).toBe(2);
    });

    it("should convert 21,780 square feet to 0.5 acres", function() {
        expect(convertToAcres(21780)).toBe(0.5);
    });

    it("should throw an error for negative input", function() {
        expect(() => convertToAcres(-5000)).toThrowError("Input must be a positive number.");
    });

    it("should throw an error for non-numeric input", function() {
        expect(() => convertToAcres("hello")).toThrowError("Input must be a positive number.");
    });
});