import { ButtonPropType } from "@/types";
import { classnames } from "@/utils";
import style from "./index.module.scss";

const Button = (props: ButtonPropType) => {
  const { className = "", children, disabled, ...rest } = props;
  return (
    <button
      className={classnames(style.button, className)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
