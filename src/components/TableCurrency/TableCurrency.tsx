import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CellBuy } from "../Cell/CellBuy";
import { CellSale } from "../Cell/CellSale";
import { useCurrencyStore } from "../../hooks/useCurrencyStore";

export function TableCurrency() {
  const currencyInStore = useCurrencyStore((state) => state.currencyInStore);
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650, tableLayout: "fixed" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell variant="head" align="center">
              Currency/Current Date
            </TableCell>
            <TableCell variant="head" align="center">
              Buy
            </TableCell>
            <TableCell variant="head" align="center">
              Sale
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencyInStore.map((row) => (
            <TableRow key={row.ccy}>
              <TableCell align="center">
                {`${row.ccy} / ${row.base_ccy}`}
              </TableCell>
              <CellBuy rate={row} />
              <CellSale rate={row} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
