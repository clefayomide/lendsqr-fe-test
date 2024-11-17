import Table from "@/components/atom/table/Table";
import { LendianTableColumnType, User } from "@/types";
import Button from "@/components/atom/button/button";
import { ReactNode } from "react";
const Row = ({
  item,
  column,
}: {
  item: User[0];
  column: LendianTableColumnType;
}) => {
  const renderCell = (uid: string) => {
    /* @ts-expect-error  no sultion at hand, to be fixed later*/
    const key: keyof User[0] = uid;
    /* @ts-expect-error  no sultion at hand, to be fixed later*/
    const value: string = item[key].toLowerCase();
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
        return item[key];
    }
  };

  return (
    <Table.TableRow>
      {column.map((col) => {
        return (
          <Table.TableData key={col.uid}>
            {/* @ts-expect-error no sultion at hand, to be fixed later */}
            {col.render ? (col.render(item) as ReactNode) : renderCell(col.uid)}
          </Table.TableData>
        );
      })}
    </Table.TableRow>
  );
};
export default Row;
