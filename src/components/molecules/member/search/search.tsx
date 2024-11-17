import { SearchIcon } from "@/assets";
import Button from "@/components/atom/button/button";
import Input from "@/components/atom/form/input";
import React from "react";
import style from "./search.module.scss";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  weight: "400",
  subsets: ["latin"],

});
const Search = () => {
  return (
    <div className={style.container}>
      <Input
        placeholder="Search for anything"
        className={`${style.search_input} ${workSans.className}`}
      />
      <Button className={style.search_btn}>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
