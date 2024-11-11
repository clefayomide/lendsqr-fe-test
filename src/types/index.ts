import { SVGAttributes } from "react";

export type SvgIconType = SVGAttributes<SVGSVGElement>;

type TypographyVariantType = keyof JSX.IntrinsicElements;

export type TypographyPropType = {
  variant?: TypographyVariantType;
  children: React.ReactNode;
  className?: string;
};

export type InputPropType = {
  labelClassName?: string;
  label?: string;
  errorMessage?: string;
} & JSX.IntrinsicElements["input"];

export type ButtonPropType = JSX.IntrinsicElements["button"];
