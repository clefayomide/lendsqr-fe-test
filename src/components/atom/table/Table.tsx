import React from "react";
import style from "./table.module.scss";
import {
  TableBodyPropType,
  TableDataPropType,
  TableHeadCellPropType,
  TableHeadPropType,
  TableRowPropType,
  TablePropType,
} from "@/types";
import { classnames } from "@/utils";

const Table = ({ children, className = "", ...rest }: TablePropType) => {
  return (
    <table className={classnames(style.table, className)} {...rest}>
      {children}
    </table>
  );
};

const TableHead = ({ children, className = "", ...rest }: TableHeadPropType) => {
  return (
    <thead className={classnames(style.table_head, className)} {...rest}>
      {children}
    </thead>
  );
};
const TableBody = ({ children, className = "", ...rest }: TableBodyPropType) => {
  return (
    <tbody className={classnames(style.table_body, className)} {...rest}>
      {children}
    </tbody>
  );
};

const TableHeadCell = ({
  children,
  className = "",
  ...rest
}: TableHeadCellPropType) => {
  return (
    <th className={classnames(style.table_head_cell, className)} {...rest}>
      {children}
    </th>
  );
};

const TableRow = ({ children, className = "", ...rest }: TableRowPropType) => {
  return (
    <tr className={classnames(style.table_row, className)} {...rest}>
      {children}
    </tr>
  );
};

const TableData = ({ children, className = "", ...rest }: TableDataPropType) => {
  return (
    <td className={classnames(style.table_data, className)} {...rest}>
      {children}
    </td>
  );
};

Table.TableHeadCell = TableHeadCell;
Table.TableHead = TableHead;
Table.TableRow = TableRow;
Table.TableData = TableData;
Table.TableBody = TableBody;

export default Table;
