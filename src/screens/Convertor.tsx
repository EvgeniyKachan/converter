import { TableConvertor } from "../components/TableConvertor/TableConvertor";
import { useCurrency } from "../hooks/useCurrency";
import classes from "./Convertor.module.scss";
import { ResetCounter } from "../components/ResetCounter/ResetCounter";

export function Convertor() {
  const [currency] = useCurrency();
  const counter = localStorage.getItem("counter") || 0;
  const isError = +counter === 5;
  return (
    <div className={classes.tableWrapper}>
      {isError ? <ResetCounter /> : <TableConvertor rows={currency} />}
    </div>
  );
}
