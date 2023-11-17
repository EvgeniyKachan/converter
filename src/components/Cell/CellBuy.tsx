import { useState } from "react";
import TableCell from "@mui/material/TableCell";
import { IconButton, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import classes from "./Cell.module.scss";
import { Currency } from "../../screens/type";
import { useCurrencyStore } from "../../hooks/useCurrencyStore";
import { isErrorRate } from "./utils";

type CellBuyProps = {
  rate: Currency;
};
export function CellBuy({ rate }: CellBuyProps) {
  const [currentRate, setCurrentRate] = useState(rate);
  const [isError, setIsError] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const currencyInStore = useCurrencyStore((state) => state.currencyInStore);
  const addCurrency = useCurrencyStore((state) => state.addCurrency);

  return (
    <TableCell align="center" className={classes.cell}>
      <div className={classes.buttonsWrapper}>
        {isEdit ? (
          <div className={classes.buttonSave}>
            <IconButton
              className={classes.cellButton}
              onClick={() => {
                const newList = currencyInStore.map((item) => {
                  if (item.ccy === currentRate.ccy) {
                    return { ...item, buy: currentRate.buy };
                  }
                  return item;
                });
                addCurrency(newList);
                setIsEdit(false);
              }}
              disabled={isError}
            >
              <CheckIcon />
            </IconButton>
            <IconButton
              className={classes.cellButton}
              onClick={() => {
                setIsEdit(false);
                setCurrentRate(rate);
                setIsError(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        ) : (
          <IconButton
            className={classes.editButton}
            onClick={() => setIsEdit(true)}
          >
            <EditIcon />
          </IconButton>
        )}
      </div>
      <TextField
        value={currentRate.buy}
        defaultValue={currentRate.buy}
        onChange={(event) => {
          const isErrorValue = isErrorRate(+rate.buy, +event.target.value);
          setIsError(isErrorValue);
          setCurrentRate({ ...currentRate, buy: event.target.value });
        }}
        disabled={!isEdit}
        type="number"
        className={classes.cellText}
        error={isError}
        helperText={isError ? "value must be +- 10%" : undefined}
      />
    </TableCell>
  );
}
