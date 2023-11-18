import { getStabRate } from "../../hooks/config";
import { CurrencyList } from "./type";
import { exchange } from "./utils";

describe("Exchange validation", () => {
  test("Buy the GBP.", () => {
    expect(
      exchange(100, CurrencyList.UAH, CurrencyList.GBP, getStabRate())
    ).toBe(2.26);
  });
  test("Sale the GBP.", () => {
    expect(
      exchange(100, CurrencyList.GBP, CurrencyList.UAH, getStabRate())
    ).toBe(4418.37);
  });
  test("No UAH.", () => {
    expect(
      exchange(100, CurrencyList.GBP, CurrencyList.CHF, getStabRate())
    ).toBe(100);
  });
  test("No rate for buy currency.", () => {
    expect(exchange(100, CurrencyList.UAH, CurrencyList.GBP, [])).toBe(100);
  });
  test("No rate for sale currency.", () => {
    expect(exchange(100, CurrencyList.GBP, CurrencyList.UAH, [])).toBe(100);
  });
});
