import { LendSqrLogo } from "@/assets";
import React, { ReactNode } from "react";
import style from "./header.module.scss";

const Header = ({ children }: { children: ReactNode }) => {
  return (
    <header className={style.header}>
      <nav className={style.logo_container}>
        <LendSqrLogo style={{ width: "144px", height: "30px" }} />
      </nav>
      {children}
    </header>
  );
};

export default Header;
