import { forwardRef } from "react";
import Typography from "../typography/typography";
import { classnames } from "@/utils";
import { InputPropType } from "@/types";
import style from "./index.module.scss";

const Input = forwardRef(
  (
    {
      labelClassName = "",
      className = "",
      label,
      errorMessage,
      id,
      ...rest
    }: InputPropType,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label
        htmlFor={id}
        className={classnames(style.input_label, labelClassName)}
      >
        {label}
        <input
          ref={ref}
          id={id}
          className={classnames(style.input, className)}
          {...rest}
        />
        {errorMessage && (
          <Typography className={style.input_error} variant="small">
            {errorMessage}
          </Typography>
        )}
      </label>
    );
  }
);

Input.displayName = "Input";

export default Input;
