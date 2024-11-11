import React from "react";
import style from "./login.module.scss";
import LeftCard from "@/components/molecules/auth/login/left-card";
import RightCard from "@/components/molecules/auth/login/right-card";

const Login = () => {
  return (
    <div className={style.container}>
      <section className={style.left_card}>
        <LeftCard />
      </section>
      <section className={style.right_card}>
        <RightCard />
      </section>
    </div>
  );
};

export default Login;
