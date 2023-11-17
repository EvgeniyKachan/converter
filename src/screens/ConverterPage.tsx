import { TableCurrency } from "../components/TableCurrency/TableCurrency";
import { useCurrency } from "../hooks/useCurrency";
import classes from "./ConverterPage.module.scss";
import { ResetCounter } from "../components/ResetCounter/ResetCounter";
import { Converter } from "../components/Converter/Converter";
import { useCurrencyStore } from "../hooks/useCurrencyStore";
import { useEffect } from "react";

export function ConverterPage() {
  const [currency] = useCurrency();
  const counter = localStorage.getItem("counter") || 0;

  const currencyInStore = useCurrencyStore((state) => state.currencyInStore);
  const isError = +counter === 500;
  const addCurrency = useCurrencyStore((state) => state.addCurrency);

  useEffect(() => {
    addCurrency(currency);
  }, []);

  return (
    <div className={classes.pageWrapper}>
      {isError ? (
        <ResetCounter />
      ) : (
        <div className={classes.tableWrapper}>
          <TableCurrency rows={currency} />
          <Converter />
        </div>
      )}
    </div>
  );
}