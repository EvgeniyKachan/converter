import { Currency } from "../screens/type";

export async function fetchCurrency(url: string) {
  const response = await fetch(url);
  return await response;
}
