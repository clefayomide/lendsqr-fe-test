import { ReactNode, SVGAttributes } from "react";

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

export type LendianTableColumnType = Array<{
  name: ReactNode;
  uid: string;
}>;

export type LendianTableDataType = {
  id: string;
  [key: string]: string;
}[];

export type LendianTableType = {
  column: LendianTableColumnType;
  data: LendianTableDataType;
};

export type TableType = JSX.IntrinsicElements["table"];
export type TableHeadType = JSX.IntrinsicElements["thead"];
export type TableHeadCellType = JSX.IntrinsicElements["th"];
export type TableRowType = JSX.IntrinsicElements["tr"];
export type TableBodyType = JSX.IntrinsicElements["tbody"];
export type TableFootType = JSX.IntrinsicElements["tfoot"];
export type TableDataType = JSX.IntrinsicElements["td"];
