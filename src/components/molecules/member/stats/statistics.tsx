import Card from "@/components/atom/card/card";
import React from "react";
import style from "./statistics.module.scss";
import { ActiveUsers, LoanUsers, SavingUsers, Users } from "@/assets";
import Typography from "@/components/atom/typography/typography";

const Statistics = () => {
  return (
    <div className={style.stats_container}>
      <Card className={style.stats}>
        <Users />
        <Typography className={style.title}>Users</Typography>
        <Typography className={style.value}>2,545</Typography>
      </Card>
      <Card className={style.stats}>
        <ActiveUsers />
        <Typography className={style.title}>Active Users</Typography>
        <Typography className={style.value}>2,545</Typography>
      </Card>
      <Card className={style.stats}>
        <LoanUsers />
        <Typography className={style.title}>Users with Loans</Typography>
        <Typography className={style.value}>2,545</Typography>
      </Card>
      <Card className={style.stats}>
        <SavingUsers />
        <Typography className={style.title}>Users with Savings</Typography>
        <Typography className={style.value}>2,545</Typography>
      </Card>
    </div>
  );
};

export default Statistics;
