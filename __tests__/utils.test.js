const { greyArray, piToColour } = require("../scripts/utils.js");

describe("piToColour function", () => {
  test("function returns an object", () => {
    expect(piToColour()).toBeInstanceOf(Object);
  });
  test("function takes number and creates specified number of object rows", () => {
    const runFunction = piToColour(10, greyArray);
    const checkLength = Object.keys(runFunction).length;
    expect(checkLength).toBe(10);
  });
  test("function adds colour from array matching pi digit for each number", () => {
    const runFunction = piToColour(10, greyArray);
    expect(runFunction["1"]).toBe("#E5E5E5");
    expect(runFunction["2"]).toBe("#9A9A9A");
  });
});
