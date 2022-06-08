const { myNumbers, solution } = require("../solution_1");

// test suit -> a collection
//  test  -> 4 piece

describe("this test suit is on testing solution-1", () => {
  test("checks if function returns odd numbers multiplied by 2", () => {
    expect(solution(myNumbers)).toStrictEqual([2, 6]);
  });
});
