import React from "react";
import style from "./details.module.scss";
import Typography from "@/components/atom/typography/typography";
import { BackArrowIcon } from "@/assets";
import Button from "@/components/atom/button/button";
import MemberLayout from "../../shared/layout/member-layout";
import Card from "@/components/atom/card/card";
import UserInfo from "@/components/molecules/member/user/user-info";
import { classnames } from "@/utils";
import BioData from "@/components/molecules/member/user/bio-data";

const Details = () => {
  const defaultTabs = [
    "General Details",
    "Document",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];
  return (
    <>
      <Button className={style.back_button}>
        <BackArrowIcon /> Back to Users
      </Button>

      <MemberLayout.Wrapper className={style.wrapper}>
        <Typography className={style.title}>User Details</Typography>
        <MemberLayout.Wrapper className={style.actions_container}>
          <Button className={style.bl_btn}>BLACKLIST USER</Button>
          <Button className={style.acv_btn}>ACTIVATE USER</Button>
        </MemberLayout.Wrapper>
      </MemberLayout.Wrapper>

      <Card className={style.info_card}>
        <UserInfo />
        <MemberLayout.Wrapper className={style.wrapper2}>
          {defaultTabs.map((tab, index) => (
            <Button
              className={classnames(
                style.tab,
                index === 0 ? style.active : style.inactive
              )}
            >
              {tab}
            </Button>
          ))}
        </MemberLayout.Wrapper>
      </Card>
      <Card className={style.bio_data}>
        <BioData />
      </Card>
    </>
  );
};

export default Details;
