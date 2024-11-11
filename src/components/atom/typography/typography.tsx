import { TypographyPropType } from "@/types";
import { classnames } from "@/utils";
import style from "./index.module.scss";

const Typography = ({
  variant: Variant = "div",
  children,
  className = "",
  ...rest
}: TypographyPropType) => {
  return (
    <Variant className={classnames(style.typography, className)} {...rest}>
      {children}
    </Variant>
  );
};

export default Typography;
