const { sum } = require("../solution_2");

describe("Calculating salary", () => {
  test("testing the function named sum", () => {
    expect(sum()).toBe("€160");
  });
});
