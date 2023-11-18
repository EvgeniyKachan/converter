import { isErrorRate } from "./utils";

describe("Is rate invalid", () => {
  test("The first value is lower than the second with valid data.", () => {
    expect(isErrorRate(95, 100)).toBe(false);
  });
  test("The second value is lower than the first with valid data.", () => {
    expect(isErrorRate(100, 95)).toBe(false);
  });
  test("The second value is lower than the first with invalid data.", () => {
    expect(isErrorRate(100, 89)).toBe(true);
  });
  test("The first value is lower than the second with invalid data.", () => {
    expect(isErrorRate(89, 100)).toBe(true);
  });
});
