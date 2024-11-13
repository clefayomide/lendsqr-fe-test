import React, { FC } from "react";
import style from "./sidebar.module.scss";
import { Work_Sans } from "next/font/google";
import SidebarButton from "@/components/atom/sidebar/button";
import {
  AuditLog,
  Dashboard,
  Decision,
  FeesAndCharges,
  FeesAndPricing,
  Guarantor,
  Loan,
  LoanProducts,
  Organizations,
  Preferences,
  SavingsProducts,
  Users2,
} from "@/assets";
import Typography from "@/components/atom/typography/typography";

const workSans = Work_Sans({
  weight: "400",
});

type BarTypes = Array<{
  title?: string;
  routes: Array<{
    title: string;
    isActive: boolean;
    icon: FC; // Each icon should be a valid React component
  }>;
}>;

const data: BarTypes = [
  {
    routes: [{ title: "Dashboard", isActive: false, icon: Dashboard }],
  },
  {
    title: "Customers",
    routes: [
      { title: "Users", isActive: true, icon: Users2 },
      { title: "Guarantor", isActive: false, icon: Guarantor },
      { title: "Loans", isActive: false, icon: Loan },
      { title: "Decison Model", isActive: false, icon: Decision },
    ],
  },

  {
    title: "Businesses",
    routes: [
      { title: "Organizations", isActive: false, icon: Organizations },
      { title: "Loan Producs", isActive: false, icon: LoanProducts },
      { title: "Savings Products", isActive: false, icon: SavingsProducts },
      { title: "Fees and Charges", isActive: false, icon: FeesAndCharges },
    ],
  },
  {
    title: "Settings",
    routes: [
      { title: "Preferences", isActive: false, icon: Preferences },
      { title: "Fees and Pricing", isActive: false, icon: FeesAndPricing },
      { title: "Audit Log", isActive: false, icon: AuditLog },
    ],
  },
];
const Sidebar = () => {
  return (
    <aside className={`${style.sidebar_container} ${workSans.className}`}>
      {data.map(({ title, routes }) => {
        return (
          <div key={title} className={style.bar}>
            {title && <Typography className={style.title}>{title}</Typography>}
            {routes.map(({ title, isActive, icon: Icon }, index) => {
              return (
                <SidebarButton
                  key={title}
                  className={style.button}
                  isActive={isActive}
                >
                  <Icon key={title + index} />
                  {title}
                </SidebarButton>
              );
            })}
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
