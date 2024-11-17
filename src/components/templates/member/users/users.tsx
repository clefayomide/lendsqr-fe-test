"use client";

import Typography from "@/components/atom/typography/typography";
import Statistics from "@/components/molecules/member/stats/statistics";
import React, { useMemo, useState } from "react";
import style from "./users.module.scss";
import MemberLayout from "../shared/layout/member-layout";
import { LendianTableColumnType, User } from "@/types";
import {
  BlacklistIcon,
  EyeIcon,
  FilterIcon,
  UserActivatedIcon,
} from "@/assets";
import Pagination from "@/components/molecules/member/table/pagination/pagination";
import DropDown, {
  DropdownActionWrapper,
} from "@/components/atom/drop-down/drop-down";
import { useRouter } from "next/navigation";
import LendianTable from "@/components/molecules/member/table/table";

const UsersList = ({ data }: { data: User }) => {
  const router = useRouter();
  const [paginationData, setPaginationData] = useState({
    currentPage: 1,
    perPage: 10,
  });

  const totalItems = data.length;

  const item = useMemo(() => {
    const start = (paginationData.currentPage - 1) * paginationData.perPage;
    const end = start + paginationData.perPage;
    return data?.slice(start, end);
  }, [data, paginationData]);

  const handlePageChange = (pageNumber: number) => {
    setPaginationData((prev) => {
      return {
        ...prev,
        currentPage: pageNumber,
      };
    });
  };

  const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaginationData((prev) => {
      return {
        ...prev,
        perPage: Number(e.target.value),
      };
    });
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
      render: (data) => {
        return (
          <DropDown
            options={[
              {
                id: "view-details",
                label: (
                  <DropdownActionWrapper>
                    <EyeIcon /> View Details
                  </DropdownActionWrapper>
                ),
                onClick: () => {
                  localStorage.setItem("userDetails", JSON.stringify(data));
                  router.push("/dashboard/users/1");
                },
              },
              {
                id: "blacklist-user",
                label: (
                  <DropdownActionWrapper>
                    <BlacklistIcon /> Blacklist User
                  </DropdownActionWrapper>
                ),
              },
              {
                id: "activate-user",
                label: (
                  <DropdownActionWrapper>
                    <UserActivatedIcon /> Activate User
                  </DropdownActionWrapper>
                ),
              },
            ]}
          />
        );
      },
    },
  ];

  return (
    <>
      <Typography className={style.title}>Users</Typography>
      <MemberLayout.StatisticsWrapper>
        <Statistics />
      </MemberLayout.StatisticsWrapper>
      <MemberLayout.TableWrapper>
        <LendianTable column={column} data={item} />
        <MemberLayout.PaginationWrapper>
          <Pagination.PerPage onChange={handlePerPageChange} />
          <Pagination
            currentPage={paginationData.currentPage}
            totalItems={totalItems}
            itemsPerPage={paginationData.perPage}
            onPageChange={handlePageChange}
          />
        </MemberLayout.PaginationWrapper>
      </MemberLayout.TableWrapper>
    </>
  );
};

export default UsersList;
