export type ConverterValue = {
  amount: number;
  currency: CurrencyList;
};

export enum CurrencyList {
  UAH = "UAH",
  CHF = "CHF",
  CZK = "CZK",
  GBP = "GBP",
  ILS = "ILS",
  JPY = "JPY",
  NOK = "NOK",
  PLZ = "PLZ",
  SEK = "SEK",
}
