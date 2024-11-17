import Typography from "@/components/atom/typography/typography";
import React from "react";
import style from "./user.module.scss";
import { UserProfile } from "@/types";

const BioData = ({ bioData }: { bioData: UserProfile }) => {
  const {
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
  } = bioData;
  return (
    <div>
      <div className={style.container}>
        <Typography className={style.section_title} variant="h1">
          Personal Information
        </Typography>
        <div className={style.flexed_container}>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              full Name
            </Typography>
            <Typography className={style.value} variant="h4">
              {full_name}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Phone Number
            </Typography>
            <Typography className={style.value} variant="h4">
              {phone_number}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Email Address
            </Typography>
            <Typography className={style.value} variant="h4">
              {email}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Bvn
            </Typography>
            <Typography className={style.value} variant="h4">
              {bvn}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Gender
            </Typography>
            <Typography className={style.value} variant="h4">
              {gender}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Marital status
            </Typography>
            <Typography className={style.value} variant="h4">
              {marital_status}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Children
            </Typography>
            <Typography className={style.value} variant="h4">
              {children}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Type of residence
            </Typography>
            <Typography className={style.value} variant="h4">
              {type_of_residence}
            </Typography>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <Typography className={style.section_title} variant="h1">
          Education and Employment
        </Typography>
        <div className={style.flexed_container}>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              level of education
            </Typography>
            <Typography className={style.value} variant="h4">
              {level_of_education}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              employment status
            </Typography>
            <Typography className={style.value} variant="h4">
              {employment_status}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              sector of employment
            </Typography>
            <Typography className={style.value} variant="h4">
              {sector_of_employment}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Duration of employment
            </Typography>
            <Typography className={style.value} variant="h4">
              {duration_of_employment}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              office email
            </Typography>
            <Typography className={style.value} variant="h4">
              {office_email}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Monthly income
            </Typography>
            <Typography className={style.value} variant="h4">
              {monthly_income}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              loan repayment
            </Typography>
            <Typography className={style.value} variant="h4">
              {loan_repayment}
            </Typography>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <Typography className={style.section_title} variant="h1">
          Socials
        </Typography>
        <div className={style.flexed_container}>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Twitter
            </Typography>
            <Typography className={style.value} variant="h4">
              {twitter}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Facebook
            </Typography>
            <Typography className={style.value} variant="h4">
              {facebook}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Instagram
            </Typography>
            <Typography className={style.value} variant="h4">
              {instagram}
            </Typography>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <Typography className={style.section_title} variant="h1">
          Guarantor
        </Typography>
        <div className={style.flexed_container}>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              full Name
            </Typography>
            <Typography className={style.value} variant="h4">
              {guarantor_two_fullname}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Phone Number
            </Typography>
            <Typography className={style.value} variant="h4">
              {guarantor_two_phone_number}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Email Address
            </Typography>
            <Typography className={style.value} variant="h4">
              {guarantor_two_email_address}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Relationship
            </Typography>
            <Typography className={style.value} variant="h4">
              {guarantor_two_relationship}
            </Typography>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <Typography className={style.section_title} variant="h1">
          Guarantor
        </Typography>
        <div className={style.flexed_container}>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              full Name
            </Typography>
            <Typography className={style.value} variant="h4">
              {guarantor_one_fullname}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Phone Number
            </Typography>
            <Typography className={style.value} variant="h4">
              {guarantor_one_phone_number}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Email Address
            </Typography>
            <Typography className={style.value} variant="h4">
              {guarantor_one_email_address}
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Relationship
            </Typography>
            <Typography className={style.value} variant="h4">
              {guarantor_one_relationship}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioData;
