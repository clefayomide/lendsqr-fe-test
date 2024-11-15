"use client";
import MemberHeader from "@/components/molecules/member/header/member-header";
import React, { ReactNode, useRef } from "react";
import style from "./layout.module.scss";
import Sidebar from "@/components/molecules/member/sidebar/sidebar";
import Button from "@/components/atom/button/button";
import { classnames } from "@/utils";
import { DottedMenu } from "@/assets";

const MemberLayout = ({ children }: { children: ReactNode }) => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    if (sidebarRef.current) {
      sidebarRef.current.classList.toggle(style.toggle);
    }
  };
  return (
    <div className={style.container}>
      <MemberHeader />
      <div className={style.content_container}>
        <div
          ref={sidebarRef}
          className={classnames(style.sidebar_container, style.toggle)}
        >
          <Sidebar />
        </div>
        <div className={style.content_area}>
          {children}
          <Button onClick={handleToggle} className={style.menu_toggle}>
            <DottedMenu />
          </Button>
        </div>
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

const PaginationWrapper = ({ children }: { children: ReactNode }) => {
  return <div className={style.pagination_wrapper}>{children}</div>;
};

MemberLayout.StatisticsWrapper = StatisticsWrapper;
MemberLayout.TableWrapper = TableWrapper;
MemberLayout.PaginationWrapper = PaginationWrapper;

export default MemberLayout;
