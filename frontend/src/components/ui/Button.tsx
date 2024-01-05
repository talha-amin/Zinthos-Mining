import React, { ComponentPropsWithoutRef, ReactNode } from "react";
import Loader from "./Loader";

type PropTypes = ComponentPropsWithoutRef<"button"> & {
  children: ReactNode;
  variant?: string;
  fullWidth?: boolean;
  squared?: boolean;
  isLoading?: boolean;
  customVariant?: string; //takes in tailwind class including background color and text color
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
  squared = false,
  isLoading=false,
  customVariant,
  ...rest
}: PropTypes) => {
  return (
    <button
      {...rest}
      className={`${
        customVariant ? customVariant : variants[variant]
      } block ${squared? "rounded-lg": "rounded-full"} disabled:cursor-not-allowed bg-gradient-to-l from-[#EB6335] to-[#FFD300] px-4 sm:px-8 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 whitespace-nowrap ${
        fullWidth ? "w-full" : ""
      } rounded ${className? className: ""}`}
    >
      {isLoading ? <Loader size={20} color="white"/> :children}
    </button>
  );
};

export default Button;
