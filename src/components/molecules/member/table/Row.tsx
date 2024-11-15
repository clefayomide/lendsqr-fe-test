import Table from "@/components/atom/table/Table";
import { LendianTableColumnType, LendianTableDataType } from "@/types";
import Button from "@/components/atom/button/button";
import { ReactNode } from "react";
const Row = ({
  item,
  column,
}: {
  item: LendianTableDataType[0];
  column: LendianTableColumnType;
}) => {
  const renderCell = (uid: string) => {
    const value = item[uid].toLowerCase();
    switch (true) {
      case value === "inactive":
        return <Button.Inactive />;
      case value === "pending":
        return <Button.Pending />;
      case value === "blacklisted":
        return <Button.Blacklisted />;
      case value === "active":
        return <Button.Active />;
      default:
        return item[uid];
    }
  };

  return (
    <Table.TableRow>
      {column.map((col) => {
        return (
          <Table.TableData key={col.uid}>
            {col.render ? (col.render(item) as ReactNode) : renderCell(col.uid)}
          </Table.TableData>
        );
      })}
    </Table.TableRow>
  );
};
export default Row;
