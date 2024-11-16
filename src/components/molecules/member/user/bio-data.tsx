import Typography from "@/components/atom/typography/typography";
import React from "react";
import style from "./user.module.scss";

const BioData = () => {
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
              Grace Effiom
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Phone Number
            </Typography>
            <Typography className={style.value} variant="h4">
              07060780922
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Email Address
            </Typography>
            <Typography className={style.value} variant="h4">
              grace@gmail.com
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Bvn
            </Typography>
            <Typography className={style.value} variant="h4">
              07060780922
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Gender
            </Typography>
            <Typography className={style.value} variant="h4">
              Female
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Marital status
            </Typography>
            <Typography className={style.value} variant="h4">
              Single
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Children
            </Typography>
            <Typography className={style.value} variant="h4">
              None
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Type of residence
            </Typography>
            <Typography className={style.value} variant="h4">
              Parent’s Apartment
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
              B.Sc
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              employment status
            </Typography>
            <Typography className={style.value} variant="h4">
              Employed
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              sector of employment
            </Typography>
            <Typography className={style.value} variant="h4">
              FinTech
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Duration of employment
            </Typography>
            <Typography className={style.value} variant="h4">
              2 years
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              office email
            </Typography>
            <Typography className={style.value} variant="h4">
              grace@lendsqr.com
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Monthly income
            </Typography>
            <Typography className={style.value} variant="h4">
              ₦200,000.00- ₦400,000.00
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              loan repayment
            </Typography>
            <Typography className={style.value} variant="h4">
              40,000
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
              @grace_effiom
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Facebook
            </Typography>
            <Typography className={style.value} variant="h4">
              Grace Effiom
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Instagram
            </Typography>
            <Typography className={style.value} variant="h4">
              @grace_effiom
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
              Debby Ogana
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Phone Number
            </Typography>
            <Typography className={style.value} variant="h4">
              07060780922
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Email Address
            </Typography>
            <Typography className={style.value} variant="h4">
              grace@gmail.com
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Relationship
            </Typography>
            <Typography className={style.value} variant="h4">
              Sister
            </Typography>
          </div>
          {/* <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Gender
            </Typography>
            <Typography className={style.value} variant="h4">
              Female
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Marital status
            </Typography>
            <Typography className={style.value} variant="h4">
              Single
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Children
            </Typography>
            <Typography className={style.value} variant="h4">
              None
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Type of residence
            </Typography>
            <Typography className={style.value} variant="h4">
              Parent’s Apartment
            </Typography>
          </div> */}
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
              Debby Ogana
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Phone Number
            </Typography>
            <Typography className={style.value} variant="h4">
              07060780922
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Email Address
            </Typography>
            <Typography className={style.value} variant="h4">
              grace@gmail.com
            </Typography>
          </div>
          <div className={style.content}>
            <Typography className={style.title} variant="h3">
              Relationship
            </Typography>
            <Typography className={style.value} variant="h4">
              Sister
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioData;
