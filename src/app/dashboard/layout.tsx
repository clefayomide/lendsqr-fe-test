import React, { ReactNode } from "react";
import style from "./dashboard.module.scss";
import MemberLayout from "@/components/templates/member/shared/layout/member-layout";
import { Work_Sans } from "next/font/google";
import Head from "next/head";

const workSans = Work_Sans({
  weight: "400",
  subsets: ["latin"],
});
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <MemberLayout>
        <div className={`${style.content_area} ${workSans.className}`}>
          {children}
        </div>
      </MemberLayout>
    </>
  );
};

export default Layout;
