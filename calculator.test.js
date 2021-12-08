const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

test("sum 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});
