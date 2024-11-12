import React, { ReactNode } from "react";
import style from "./dashboard.module.scss";
import MemberLayout from "@/components/templates/member/shared/layout/member-layout";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  weight: "400",
});
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    // <div className={style.layout_container}>
    <MemberLayout>
      <div className={`${style.content_area} ${workSans.className}`}>
        {children}
      </div>
    </MemberLayout>
    // </div>
  );
};

export default Layout;
