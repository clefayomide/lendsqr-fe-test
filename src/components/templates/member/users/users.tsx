import Typography from "@/components/atom/typography/typography";
import Statistics from "@/components/molecules/member/stats/statistics";
import React from "react";
import style from "./users.module.scss";
import MemberLayout from "../shared/layout/member-layout";
import LendianTable from "@/components/molecules/member/table/Table";
import { LendianTableColumnType } from "@/types";
import { FilterIcon } from "@/assets";

const UsersList = () => {
  const column: LendianTableColumnType = [
    {
      name: (
        <div className={style.columnWrapper}>
          ORGANIZATION <FilterIcon />
        </div>
      ),
      uid: "org",
    },
    {
      name: (
        <div className={style.columnWrapper}>
          USERNAME <FilterIcon />
        </div>
      ),
      uid: "username",
    },
    {
      name: (
        <div className={style.columnWrapper}>
          EMAIL <FilterIcon />
        </div>
      ),
      uid: "email",
    },
    {
      name: (
        <div className={style.columnWrapper}>
          PHONE NUMBER <FilterIcon />
        </div>
      ),
      uid: "phone_number",
    },
    {
      name: (
        <div className={style.columnWrapper}>
          DATE JOINED <FilterIcon />
        </div>
      ),
      uid: "date_joined",
    },
    {
      name: (
        <div className={style.columnWrapper}>
          STATUS <FilterIcon />
        </div>
      ),
      uid: "status",
    },
  ];
  const data = [
    {
      id: "1",
      org: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone_number: "08078903721",
      date_joined: "May 15, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      id: "2",
      org: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone_number: "08078903721",
      date_joined: "May 15, 2020 10:00 AM",
      status: "Pending",
    },
    {
      id: "3",
      org: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone_number: "08078903721",
      date_joined: "May 15, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      id: "4",
      org: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone_number: "08078903721",
      date_joined: "May 15, 2020 10:00 AM",
      status: "Pending",
    },
    {
      id: "5",
      org: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone_number: "08078903721",
      date_joined: "May 15, 2020 10:00 AM",
      status: "Active",
    },
    {
      id: "6",
      org: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone_number: "08078903721",
      date_joined: "May 15, 2020 10:00 AM",
      status: "Active",
    },
    {
      id: "7",
      org: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone_number: "08078903721",
      date_joined: "May 15, 2020 10:00 AM",
      status: "Blacklisted",
    },
    {
      id: "8",
      org: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone_number: "08078903721",
      date_joined: "May 15, 2020 10:00 AM",
      status: "Inactive",
    },
    {
      id: "9",
      org: "Lendsqr",
      username: "Adedeji",
      email: "adedeji@lendsqr.com",
      phone_number: "08078903721",
      date_joined: "May 15, 2020 10:00 AM",
      status: "Inactive",
    },
  ];
  return (
    <>
      <Typography className={style.title}>Users</Typography>
      <MemberLayout.StatisticsWrapper>
        <Statistics />
      </MemberLayout.StatisticsWrapper>
      <MemberLayout.TableWrapper>
        <LendianTable column={column} data={data} />
      </MemberLayout.TableWrapper>
    </>
  );
};

export default UsersList;
