import { Star, StarFilled, UserProfileIcon } from "@/assets";
import Typography from "@/components/atom/typography/typography";
import React from "react";
import style from "./user.module.scss";

const UserInfo = ({ fullname }: { fullname: string }) => {
  return (
    <div className={style.info_container}>
      <div className={style.user}>
        <UserProfileIcon />
        <div>
          <Typography className={style.username}>{fullname}</Typography>
          <Typography className={style.user_id}>LSQFf587g90</Typography>
        </div>
      </div>
      <div className={style.user_tier}>
        <Typography className={style.tier}>{"User's Tier"}</Typography>
        <div className={style.tier_star}>
          <StarFilled />
          <Star />
          <Star />
        </div>
      </div>
      <div className={style.user_balance}>
        <Typography className={style.balance}>₦200,000.00</Typography>
        <Typography className={style.bank_details}>
          9912345678/Providus Bank
        </Typography>
      </div>
    </div>
  );
};

export default UserInfo;
