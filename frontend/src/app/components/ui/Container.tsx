import React from "react";

type PropTypes = {
  fluid?: boolean;
  children: JSX.Element | JSX.Element[];
  className?: string;
};

const Container = ({ fluid = false, children, className }: PropTypes) => {
  return (
    <div
      className={`mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
