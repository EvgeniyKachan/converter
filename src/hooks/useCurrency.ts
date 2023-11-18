import useSWR from "swr";
import { fetchCurrency } from "../api/currency";
import { getStabRate, updateLocalStore } from "./config";

export function useCurrency() {
  const stubData = getStabRate();
  const url =
    "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=4";

  const { data, error, isLoading } = useSWR(url, fetchCurrency, {
    refreshInterval: 30000,
    onSuccess: () => {
      updateLocalStore();
    },
    onError: () => {
      updateLocalStore();
    },
  });
  const currency = data || stubData;
  return [currency, error, isLoading];
}
