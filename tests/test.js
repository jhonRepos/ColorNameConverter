
import { getHexFromColorName } from "../src/js/script.js";

const runTests = () => {
    const testCases = [
        { input: "red", expected: "#ff0000" },
        { input: "blue", expected: "#0000ff" },
        { input: "green", expected: "#008000" },
        { input: "yellow", expected: "#ffff00" },
        { input: "invalidcolor", expected: null }, // Invalid case
        { input: "BLACK", expected: "#000000" }, // Case insensitive
        { input: " White ", expected: "#ffffff" } // Trim spaces
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = getHexFromColorName(input);
        const passed = result === expected;
        console.log(`Test ${index + 1}: ${input} => ${result} | Expected: ${expected} | ${passed ? "✅ Passed" : "❌ Failed"}`);
    });
};

// Run the tests
runTests();
