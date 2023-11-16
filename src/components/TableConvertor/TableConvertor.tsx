import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//import classes from "./TableConvertor.module.scss";
import { Currency } from "../../screens/type";

type TableProps = {
  rows: Currency[];
};

export function TableConvertor({ rows }: TableProps) {
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
              Cell
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.ccy}>
              <TableCell align="center">
                {`${row.ccy} / ${row.base_ccy}`}{" "}
              </TableCell>
              <TableCell align="center">{row.buy}</TableCell>
              <TableCell align="center">{row.sale}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
