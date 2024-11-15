import Header from "@/components/atom/header/header";
import React from "react";
import Search from "../search/search";
import style from "./memeber-header.module.scss";
import Typography from "@/components/atom/typography/typography";
import { ArrowDown, BellIcon } from "@/assets";
import NextImage from "next/image";
import avatar from "../../../../assets/avatar.svg";
import Link from "next/link";

const MemberHeader = () => {
  return (
    <Header>
      <div className={style.toolbox_container}>
        <div className={style.search_container}>
          <Search />
        </div>
        <div className={style.toolbox_actions}>
          <Link className={style.docs} href={""}>
            Docs
          </Link>
          <div className={style.toolbox_actions2}>
            <BellIcon />
            <div className={style.toolbor_user_actions}>
              <NextImage className={style.user} src={avatar} alt="avatar" />
              <Typography>Adedeji</Typography>
              <ArrowDown />
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default MemberHeader;
