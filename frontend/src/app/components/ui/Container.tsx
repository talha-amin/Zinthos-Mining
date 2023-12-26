import React from "react";

type PropTypes = {
  fluid?: boolean;
  children: JSX.Element | JSX.Element[];
  className?: string;
  [key:string]: any
};

const Container = ({
  fluid = false,
  children,
  className,
  ...rest
}: PropTypes) => {
  return (
    <div
      {...rest}
      className={`mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
