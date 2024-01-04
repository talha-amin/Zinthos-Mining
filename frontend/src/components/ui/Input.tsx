import React from "react";

type Props = {
  className?: string;
  [key: string]: any;
};

const Input = ({
  icon,
  className,
  solidBg,
  darkBg,
  noCopy,
  ...rest
}: Props) => {
  return (
    <div className="relative w-full rounded-md shadow-sm">
      <input
        type="text"
        name="price"
        id="price"
        className={`${
          solidBg
            ? "bg-input-gradient"
            : darkBg
            ? "bg-neutral-900"
            : "bg-transparent"
        } block w-full rounded-md py-2.5 pl-4 pr-7 text-white placeholder:text-neutral-400 text-sm sm:leading-6 focus: outline-none ${
          className ? className : ""
        }`}
        {...rest}
      />
    </div>
  );
};

export default Input;
