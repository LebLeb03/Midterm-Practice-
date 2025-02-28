import {yee_ha} from '../yeeHa.js';

describe("Yee Ha Function Tests", function() {
    it("should return 'Yee' for numbers divisible by 3", function() {
        expect(yee_ha(9)).toBe("Yee");
        expect(yee_ha(12)).toBe("Yee");
    });

    it("should return 'Ha' for numbers divisible by 7", function() {
        expect(yee_ha(14)).toBe("Ha");
        expect(yee_ha(28)).toBe("Ha");
    });

    it("should return 'Yee Ha' for numbers divisible by both 3 and 7", function() {
        expect(yee_ha(21)).toBe("Yee Ha");
        expect(yee_ha(42)).toBe("Yee Ha");
    });

    it("should return 'Nada' for numbers not divisible by 3 or 7", function() {
        expect(yee_ha(8)).toBe("Nada");
        expect(yee_ha(10)).toBe("Nada");
    });

    it("should throw an error for non-numeric input", function() {
        expect(() => yee_ha("hello")).toThrowError("Input must be a number.");
        expect(() => yee_ha(null)).toThrowError("Input must be a number.");
        expect(() => yee_ha(undefined)).toThrowError("Input must be a number.");
    });
});
