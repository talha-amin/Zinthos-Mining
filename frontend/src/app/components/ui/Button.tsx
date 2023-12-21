import React from "react";

type PropTypes = {
  children: JSX.Element | string;
  variant?: string;
  fullWidth?: boolean;
  className?: string;
  customVariant?: string; //takes in tailwind class including background color and text color
  [key: string]: any;
};

const variants: { [key: string]: string } = {
  neutral: "bg-neutral-800 text-neutral-300",
  primary: "bg-primary text-white",
  success: "bg-green-500 text-white",
  danger: "bg-red-500 text-white",
};

const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  className,
  customVariant,
  ...rest
}: PropTypes) => {
  return (
    <button
      {...rest}
      className={`${
        customVariant ? customVariant : variants[variant]
      } block rounded-full bg-gradient-to-l from-[#EB6335] to-[#FFD300] px-8 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 ${
        fullWidth ? "w-full" : ""
      } rounded ${className? className: ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
