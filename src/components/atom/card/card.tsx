import React, { ReactNode } from "react";
import style from "./card.module.scss";
import { classnames } from "@/utils";

const Card = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={classnames(style.card, className)}>{children}</div>;
};

export default Card;
