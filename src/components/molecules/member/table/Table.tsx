import React from "react";
import Table from "@/components/atom/table/Table";
import { LendianTableType } from "@/types";
import Row from "./Row";
import Card from "@/components/atom/card/card";
import style from "./table.module.scss";

const LendianTable = ({ column, data }: LendianTableType) => {
  const renderColumn = column.map(({ uid, name }) => {
    return <Table.TableHeadCell key={uid}>{name}</Table.TableHeadCell>;
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

export default LendianTable;
