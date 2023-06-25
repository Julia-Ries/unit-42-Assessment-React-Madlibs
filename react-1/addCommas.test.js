const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("works for 4 nums", () => {
    expect(addCommas("1234")).toEqual("1,234");
  })
  test("works for 2 commas", () => {
    expect(addCommas("1000000")).toEqual("1,000,000");
  })
  test("works for 4 commas", () => {
    expect(addCommas("9876543210")).toEqual("9,876,543,210");
  })
  test("works for single digit", () => {
    expect(addCommas("6")).toEqual("6");
  })
  test("works for negative num", () => {
    expect(addCommas("-10")).toEqual("-10");
  })
  test("works for negative num w/comma", () => {
    expect(addCommas("-5678")).toEqual("-5,678");
});

});
