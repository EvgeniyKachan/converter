import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import classes from "./Converter.module.scss";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { CurrencyList } from "./type";
import { useEffect, useState } from "react";
import { useCurrencyStore } from "../../hooks/useCurrencyStore";
import { exchange } from "./utils";

export function Converter() {
  const currencyInStore = useCurrencyStore((state) => state.currencyInStore);

  const [changeCurrency, setChangeCurrency] = useState<CurrencyList>(
    CurrencyList.UAH
  );
  const [resultCurrency, setResultCurrency] = useState<CurrencyList>(
    CurrencyList.GBP
  );

  const [changeAmount, setChangeAmount] = useState<number>(100);
  const [resultAmount, setResultAmount] = useState<number>(0);

  useEffect(() => {
    setResultAmount(
      exchange(changeAmount, changeCurrency, resultCurrency, currencyInStore)
    );
  }, [currencyInStore, changeAmount, changeCurrency, resultCurrency]);

  return (
    <div className={classes.converterWrapper}>
      <TextField
        name="change"
        label="Change"
        variant="standard"
        value={changeAmount}
        type="number"
        onChange={(event) => {
          setChangeAmount(+event.target.value);
        }}
      />
      <FormControl className={classes.converterSelect}>
        <Select
          name="change-select"
          value={changeCurrency}
          onChange={(event) => {
            setChangeCurrency(event.target.value as CurrencyList);
          }}
        >
          <MenuItem value={CurrencyList.UAH}>{CurrencyList.UAH}</MenuItem>
          <MenuItem value={CurrencyList.CHF}>{CurrencyList.CHF}</MenuItem>
          <MenuItem value={CurrencyList.CZK}>{CurrencyList.CZK}</MenuItem>
          <MenuItem value={CurrencyList.GBP}>{CurrencyList.GBP}</MenuItem>
          <MenuItem value={CurrencyList.ILS}>{CurrencyList.ILS}</MenuItem>
          <MenuItem value={CurrencyList.JPY}>{CurrencyList.JPY}</MenuItem>
          <MenuItem value={CurrencyList.NOK}>{CurrencyList.NOK}</MenuItem>
          <MenuItem value={CurrencyList.PLZ}>{CurrencyList.PLZ}</MenuItem>
          <MenuItem value={CurrencyList.SEK}>{CurrencyList.SEK}</MenuItem>
        </Select>
      </FormControl>
      <Button
        className={classes.converterButton}
        onClick={() => {
          setChangeAmount(resultAmount);
          setChangeCurrency(resultCurrency);
          setResultCurrency(changeCurrency);
        }}
      >
        <SyncAltIcon />
      </Button>
      <TextField
        id="get"
        label="Get"
        variant="standard"
        value={resultAmount}
        disabled={true}
      />
      <FormControl className={classes.converterSelect}>
        <Select
          id="result-select"
          value={resultCurrency}
          onChange={(event) => {
            setResultCurrency(event.target.value as CurrencyList);
          }}
        >
          <MenuItem value={CurrencyList.UAH}>{CurrencyList.UAH}</MenuItem>
          <MenuItem value={CurrencyList.CHF}>{CurrencyList.CHF}</MenuItem>
          <MenuItem value={CurrencyList.CZK}>{CurrencyList.CZK}</MenuItem>
          <MenuItem value={CurrencyList.GBP}>{CurrencyList.GBP}</MenuItem>
          <MenuItem value={CurrencyList.ILS}>{CurrencyList.ILS}</MenuItem>
          <MenuItem value={CurrencyList.JPY}>{CurrencyList.JPY}</MenuItem>
          <MenuItem value={CurrencyList.NOK}>{CurrencyList.NOK}</MenuItem>
          <MenuItem value={CurrencyList.PLZ}>{CurrencyList.PLZ}</MenuItem>
          <MenuItem value={CurrencyList.SEK}>{CurrencyList.SEK}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
