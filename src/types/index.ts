import { ReactNode, SVGAttributes } from "react";

export type SvgIconPropType = SVGAttributes<SVGSVGElement>;

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
  render?: (value: {
    [key: string]: any;
  }) => JSX.Element | React.FC | React.ReactNode;
}>;

// export type User = {
//   id: string;
//   organization: string;
//   email: string;
//   username: string;
//   phoneNumber: string;
//   dateJoined: string;
//   status: "inactive" | "pending" | "blacklisted" | "active";
// }[];

export type LendianTableDataType = {
  id: string;
  [key: string]: string;
}[];

export type LendianTablePropType = {
  column: LendianTableColumnType;
  data: User;
};

export type TablePropType = JSX.IntrinsicElements["table"];
export type TableHeadPropType = JSX.IntrinsicElements["thead"];
export type TableHeadCellPropType = JSX.IntrinsicElements["th"];
export type TableRowPropType = JSX.IntrinsicElements["tr"];
export type TableBodyPropType = JSX.IntrinsicElements["tbody"];
export type TableFootPropType = JSX.IntrinsicElements["tfoot"];
export type TableDataPropType = JSX.IntrinsicElements["td"];

export type PaginationPropType = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
};

type DropdownOptions = {
  id: string | number;
  label: ReactNode;
  onClick?: () => void;
}[];

type SelectOptions = {
  value: string;
  label: ReactNode;
}[];

export type DropdownPropType = {
  trigger?: ReactNode;
  options: DropdownOptions;
};

export type SelectPropType = {
  options: SelectOptions;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

type Guarantor = {
  guarantor_fullname: string;
  guarantor_phone_number: string;
  guarantor_email_address: string;
  guarantor_relationship: string;
};

type UserDetails = {
  full_name: string;
  bvn: string;
  gender: string;
  marital_status: string;
  children: string;
  type_of_residence: string;
  level_of_education: string;
  employment_status: string;
  sector_of_employment: string;
  duration_of_employment: string;
  office_email: string;
  monthly_income: string;
  loan_repayment: string;
  twitter: string;
  facebook: string;
  instagram: string;
  guarantors: Guarantor[];
};

export type User = {
  id: string;
  org: string;
  username: string;
  email: string;
  phone_number: string;
  date_joined: string;
  status: "inactive" | "pending" | "blacklisted" | "active";
  details: UserDetails;
}[];

export type UserProfile = {
  full_name: string;
  bvn: string;
  gender: string;
  marital_status: string;
  children: string;
  type_of_residence: string;
  level_of_education: string;
  employment_status: string;
  sector_of_employment: string;
  duration_of_employment: string;
  office_email: string;
  monthly_income: string;
  loan_repayment: string;
  twitter: string;
  instagram: string;
  facebook: string;
  phone_number: string;
  email: string;
  guarantor_one_fullname: string;
  guarantor_one_email_address: string;
  guarantor_one_phone_number: string;
  guarantor_one_relationship: string;
  guarantor_two_fullname: string;
  guarantor_two_email_address: string;
  guarantor_two_phone_number: string;
  guarantor_two_relationship: string;
};
