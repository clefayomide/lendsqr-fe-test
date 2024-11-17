import React from "react";
import Table from "@/components/atom/table/Table";
import { LendianTablePropType } from "@/types";
import Row from "./row";
import Card from "@/components/atom/card/card";
import style from "./table.module.scss";
export const LendianTable = ({ column, data }: LendianTablePropType) => {
  const renderColumn = column.map(({ uid, name }) => {
    return (
      <Table.TableHeadCell className={!name ? style.head_cell : ""} key={uid}>
        {name}
      </Table.TableHeadCell>
    );
  });

  return (
    <Card className={style.card}>
      <Table className={style.table}>
        <Table.TableHead>
          <Table.TableRow>{renderColumn}</Table.TableRow>
        </Table.TableHead>
        <Table.TableBody className={style.table_body}>
          {data.map((item) => (
            <Row key={item.id} item={item} column={column} />
          ))}
        </Table.TableBody>
      </Table>
    </Card>
  );
};
