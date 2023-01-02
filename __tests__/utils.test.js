const { piToColour } = require("../utils.js");

const greyArray = {
  0: "#FFFFFF",
  1: "#E5E5E5",
  2: "#CDCDCD",
  3: "#B3B3B3",
  4: "#9A9A9A",
  5: "#808080",
  6: "#666666",
  7: "#4D4D4D",
  8: "#323232",
  9: "#181818",
};

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
