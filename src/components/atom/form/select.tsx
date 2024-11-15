import React from "react";
import style from "./index.module.scss";
import { ChevronDown } from "@/assets";
import { SelectPropType } from "@/types";

const Select = ({ options }: SelectPropType) => {
  return (
    <div className={style.custom_select}>
      <select>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <ChevronDown className={style.select_arrow_down} />
    </div>
  );
};

export default Select;
