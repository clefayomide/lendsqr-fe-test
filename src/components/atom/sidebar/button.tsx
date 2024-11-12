import React, { ReactNode } from "react";
import style from "./index.module.scss";
import Button from "../button/button";
import { Users2 } from "@/assets";
import { classnames } from "@/utils";

const SidebarButton = ({
  className = "",
  children,
  isActive = false,
}: {
  className?: string;
  isActive?: boolean;
  children: ReactNode;
}) => {
  return (
    <Button
      className={classnames(
        style.button,
        `${isActive && style.active}`,
        className
      )}
    >
      {children}
    </Button>
  );
};

export default SidebarButton;
