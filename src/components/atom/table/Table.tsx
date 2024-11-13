import React from "react";
import style from "./table.module.scss";
import {
  TableBodyType,
  TableDataType,
  TableHeadCellType,
  TableHeadType,
  TableRowType,
  TableType,
} from "@/types";
import { classnames } from "@/utils";

const Table = ({ children, className = "", ...rest }: TableType) => {
  return (
    <table className={classnames(style.table, className)} {...rest}>
      {children}
    </table>
  );
};

const TableHead = ({ children, className = "", ...rest }: TableHeadType) => {
  return (
    <thead className={classnames(style.table_head, className)} {...rest}>
      {children}
    </thead>
  );
};
const TableBody = ({ children, className = "", ...rest }: TableBodyType) => {
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
}: TableHeadCellType) => {
  return (
    <th className={classnames(style.table_head_cell, className)} {...rest}>
      {children}
    </th>
  );
};

const TableRow = ({ children, className = "", ...rest }: TableRowType) => {
  return (
    <tr className={classnames(style.table_row, className)} {...rest}>
      {children}
    </tr>
  );
};

const TableData = ({ children, className = "", ...rest }: TableDataType) => {
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
