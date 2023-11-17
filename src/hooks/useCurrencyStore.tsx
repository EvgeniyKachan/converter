import { create } from "zustand";
import { Currency } from "../screens/type";
type CurrencyState = {
  currencyInStore: Currency[];
  addCurrency: (addList: Currency[]) => void;
};

export const useCurrencyStore = create<CurrencyState>()((set) => ({
  currencyInStore: [],
  addCurrency: (addList: Currency[]) =>
    set(() => ({ currencyInStore: addList })),
}));
