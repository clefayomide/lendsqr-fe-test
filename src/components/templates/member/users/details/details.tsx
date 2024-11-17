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
import { User, UserProfile } from "@/types";

const Details = () => {
  const userDetails: User[0] = JSON.parse(
    localStorage.getItem("userDetails") ?? "{}"
  );
  const { details, phone_number = "", email = "" } = userDetails ?? {};
  const {
    full_name = "",
    bvn = "",
    gender = "",
    marital_status = "",
    children = "",
    type_of_residence = "",
    level_of_education = "",
    employment_status = "",
    sector_of_employment = "",
    duration_of_employment = "",
    office_email = "",
    monthly_income = "",
    loan_repayment = "",
    twitter = "",
    instagram = "",
    facebook = "",
    guarantors = [],
  } = details ?? {};

  const {
    guarantor_fullname: guarantor_one_fullname = "",
    guarantor_email_address: guarantor_one_email_address = "",
    guarantor_phone_number: guarantor_one_phone_number = "",
    guarantor_relationship: guarantor_one_relationship = "",
  } = guarantors[0] ?? {};

  const {
    guarantor_fullname: guarantor_two_fullname = "",
    guarantor_email_address: guarantor_two_email_address = "",
    guarantor_phone_number: guarantor_two_phone_number = "",
    guarantor_relationship: guarantor_two_relationship = "",
  } = guarantors[1] ?? {};

  const defaultTabs = [
    "General Details",
    "Document",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
  ];

  const bioData: UserProfile = {
    full_name,
    bvn,
    gender,
    marital_status,
    children,
    type_of_residence,
    level_of_education,
    employment_status,
    sector_of_employment,
    duration_of_employment,
    office_email,
    monthly_income,
    loan_repayment,
    twitter,
    instagram,
    facebook,
    phone_number,
    email,
    guarantor_one_fullname,
    guarantor_one_email_address,
    guarantor_one_phone_number,
    guarantor_one_relationship,
    guarantor_two_fullname,
    guarantor_two_email_address,
    guarantor_two_phone_number,
    guarantor_two_relationship,
  };
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
        <UserInfo fullname={full_name} />
        <MemberLayout.Wrapper className={style.wrapper2}>
          {defaultTabs.map((tab, index) => (
            <Button
              key={tab}
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
        <BioData bioData={bioData} />

      </Card>
    </>
  );
};

export default Details;
