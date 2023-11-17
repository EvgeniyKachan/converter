import { Currency } from "../../screens/type";
import { CurrencyList } from "./type";

export function exchange(
  changeAmount: number,
  changeCurrency: CurrencyList,
  resultCurrency: CurrencyList,
  currencyInStore: Currency[]
) {
  if (
    changeCurrency !== CurrencyList.UAH &&
    resultCurrency !== CurrencyList.UAH
  ) {
    return changeAmount;
  }
  if (changeCurrency === CurrencyList.UAH) {
    const rates = currencyInStore.find(
      (item) => (item.ccy as CurrencyList) === resultCurrency
    );
    const buyRates = rates?.buy || 1;

    return +(changeAmount / +buyRates).toFixed(2);
  } else {
    const rates = currencyInStore.find(
      (item) => (item.ccy as CurrencyList) === changeCurrency
    );
    const saleRates = rates?.sale || 1;

    return +(changeAmount * +saleRates).toFixed(2);
  }
}
