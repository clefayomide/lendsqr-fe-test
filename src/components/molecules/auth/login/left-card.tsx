import { LendSqrLogo } from "@/assets";
import Image from "next/image";
import React from "react";
import loginImage from "../../../../assets/loginUser.svg";
import style from "./index.module.scss";

const LeftCard = () => {
  return (
    <div className={style.left_card}>
      <LendSqrLogo className={style.lend_sqr_logo} />
      <Image className={style.happy_user} src={loginImage} alt="happy user" />
    </div>
  );
};

export default LeftCard;
