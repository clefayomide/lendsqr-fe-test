import Typography from "@/components/atom/typography/typography";
import Statistics from "@/components/molecules/member/stats/statistics";
import React from "react";
import style from "./users.module.scss";

const UsersList = () => {
  return (
    <div>
      <Typography className={style.title}>Users</Typography>
      <div className={style.stats_container}>
        <Statistics />
      </div>
    </div>
  );
};

export default UsersList;
