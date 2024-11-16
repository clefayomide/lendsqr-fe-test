"use client";
import React, { FormEvent } from "react";
import style from "./login.module.scss";
import LeftCard from "@/components/molecules/auth/login/left-card";
import RightCard from "@/components/molecules/auth/login/right-card";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard/users");
  };
  return (
    <div className={style.container}>
      <section className={style.left_card}>
        <LeftCard />
      </section>
      <section className={style.right_card}>
        <RightCard onSubmit={handleLogin} />
      </section>
    </div>
  );
};

export default Login;
