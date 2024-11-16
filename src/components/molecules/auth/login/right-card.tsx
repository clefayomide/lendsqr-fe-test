import React, { FormEvent } from "react";
import style from "./index.module.scss";
import Typography from "@/components/atom/typography/typography";
import Input from "@/components/atom/form/input";
import Button from "@/components/atom/button/button";

const RightCard = ({
  onSubmit,
}: {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <form onSubmit={onSubmit} className={style.right_card}>
      <div className={style.right_card_inner_wrapper}>
        <Typography className={style.right_card_header}>Welcome!</Typography>
        <Typography className={style.right_card_header2}>
          Enter details to login.
        </Typography>
        <div className={style.right_card_input_container}>
          <Input
            type="email"
            required
            className={style.email_input}
            placeholder="Email"
          />
          <Input
            type="password"
            required
            className={style.pwd_input}
            placeholder="Password"
          />
          <Typography className={style.forgot_pwd}>FORGOT PASSWORD?</Typography>
          <Button className={style.button}>LOG IN</Button>
        </div>
      </div>
    </form>
  );
};

export default RightCard;
