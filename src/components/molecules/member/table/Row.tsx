import Table from "@/components/atom/table/Table";
import { LendianTableColumnType, LendianTableDataType } from "@/types";
import Button from "@/components/atom/button/button";

const Row = ({
  item,
  column,
}: {
  item: LendianTableDataType[0];
  column: LendianTableColumnType;
}) => {
  const render = (uid: string) => {
    const value = item[uid].toLowerCase();
    switch (true) {
      case value === "inactive":
        return <Button.Inactive />;
      case value === "pending":
        return <Button.Pending />;
      case value === "blacklisted":
        return <Button.Blacklisted />;
      case value === "pending":
        return <Button.Pending />;
      case value === "active":
        return <Button.Active />;
      default:
        return item[uid];
    }
  };
  return (
    <Table.TableRow>
      {column.map(({ uid }) => {
        return <Table.TableData key={uid}>{render(uid)}</Table.TableData>;
      })}
    </Table.TableRow>
  );
};
export default Row;
