import { computeAirQuality } from '../airQuality.js';

describe("Air Quality Index Classification", function() {
    it("should return 'Good' for AQI 0-50", function() {
        expect(computeAirQuality(25)).toBe("Good");
        expect(computeAirQuality(50)).toBe("Good");
    });

    it("should return 'Moderate' for AQI 51-100", function() {
        expect(computeAirQuality(75)).toBe("Moderate");
        expect(computeAirQuality(100)).toBe("Moderate");
    });

    it("should return 'Unhealthy for Sensitive Groups' for AQI 101-150", function() {
        expect(computeAirQuality(120)).toBe("Unhealthy for Sensitive Groups");
        expect(computeAirQuality(150)).toBe("Unhealthy for Sensitive Groups");
    });

    it("should return 'Unhealthy' for AQI 151-200", function() {
        expect(computeAirQuality(175)).toBe("Unhealthy");
        expect(computeAirQuality(200)).toBe("Unhealthy");
    });

    it("should return 'Very Unhealthy' for AQI 201-300", function() {
        expect(computeAirQuality(250)).toBe("Very Unhealthy");
        expect(computeAirQuality(300)).toBe("Very Unhealthy");
    });

    it("should return 'Hazardous' for AQI 301+", function() {
        expect(computeAirQuality(350)).toBe("Hazardous");
        expect(computeAirQuality(500)).toBe("Hazardous");
    });

    it("should throw an error for negative AQI", function() {
        expect(() => computeAirQuality(-10)).toThrowError("AQI must be a non-negative number.");
    });

    it("should throw an error for non-numeric AQI", function() {
        expect(() => computeAirQuality("hello")).toThrowError("AQI must be a non-negative number.");
        expect(() => computeAirQuality(null)).toThrowError("AQI must be a non-negative number.");
    });
});