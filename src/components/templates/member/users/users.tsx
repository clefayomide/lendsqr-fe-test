import Typography from "@/components/atom/typography/typography";
import Statistics from "@/components/molecules/member/stats/statistics";
import React, { useState } from "react";
import style from "./users.module.scss";
import MemberLayout from "../shared/layout/member-layout";
import { LendianTableColumnType } from "@/types";
import {
  BlacklistIcon,
  EyeIcon,
  FilterIcon,
  UserActivatedIcon,
} from "@/assets";
import LendianTable from "@/components/molecules/member/table/table";
import Pagination from "@/components/molecules/member/table/pagination/pagination";
import DropDown from "@/components/atom/drop-down/drop-down";

const UsersList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;
  const totalItems = 100;

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
    {
      name: "",
      uid: "action",
      render: () => {
        return (
          <DropDown
            options={[
              {
                id: "view-details",
                label: (
                  <DropDown.DropdownAction>
                    <EyeIcon /> View Details
                  </DropDown.DropdownAction>
                ),
              },
              {
                id: "blacklist-user",
                label: (
                  <DropDown.DropdownAction>
                    <BlacklistIcon /> Blacklist User
                  </DropDown.DropdownAction>
                ),
              },
              {
                id: "activate-user",
                label: (
                  <DropDown.DropdownAction>
                    <UserActivatedIcon /> Activate User
                  </DropDown.DropdownAction>
                ),
              },
            ]}
          />
        );
      },
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
        <MemberLayout.PaginationWrapper>
          <Pagination.PerPage />
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </MemberLayout.PaginationWrapper>
      </MemberLayout.TableWrapper>
    </>
  );
};

export default UsersList;
