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

const Inactive = () => {
  return <Button className={style.inactive}>Inactive</Button>;
};

const Pending = () => {
  return <Button className={style.pending}>Pending</Button>;
};

const Blacklisted = () => {
  return <Button className={style.blacklisted}>Blacklisted</Button>;
};

const Active = () => {
  return <Button className={style.active}>Active</Button>;
};

Button.Inactive = Inactive;
Button.Pending = Pending;
Button.Blacklisted = Blacklisted;
Button.Active = Active;

export default Button;
