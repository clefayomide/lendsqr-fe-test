import MemberHeader from "@/components/molecules/member/header/member-header";
import React, { ReactNode } from "react";
import style from "./layout.module.scss";
import Sidebar from "@/components/molecules/member/sidebar/sidebar";

const MemberLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={style.container}>
      <MemberHeader />
      <div className={style.content_container}>
        <div className={style.sidebar_container}>
          <Sidebar />
        </div>
        <div className={style.content_area}>{children}</div>
      </div>
    </div>
  );
};

const StatisticsWrapper = ({ children }: { children: ReactNode }) => {
  return <div className={style.stats_wrapper}>{children}</div>;
};

const TableWrapper = ({ children }: { children: ReactNode }) => {
  return <div className={style.table_wrapper}>{children}</div>;
};

MemberLayout.StatisticsWrapper = StatisticsWrapper;
MemberLayout.TableWrapper = TableWrapper;

export default MemberLayout;
