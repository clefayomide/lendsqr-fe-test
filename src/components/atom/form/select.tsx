import React from "react";
import style from "./index.module.scss";
import { ChevronDown } from "@/assets";
import { SelectPropType } from "@/types";

const Select = ({ options, onChange }: SelectPropType) => {
  return (
    <div className={style.custom_select}>
      <select onChange={onChange}>
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
