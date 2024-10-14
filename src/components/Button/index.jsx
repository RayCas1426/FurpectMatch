import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-lg",
};

const variants = {
  indigo_400: "border-indigo-400 border-[1.81px] border-solid text-indigo-400",
  outline: {
    gray_600_01: "border-gray-600_01 border-2 border-solid text-gray-600_01",
    gray_400: "border-gray-400 border border-solid text-blue_gray-400",
    deep_purple_500: "border-deep_purple-500 border border-solid text-deep_purple-500",
  },
  fill: {
    gray_50: "bg-gray-50 text-black-900",
    white_A700: "bg-white-A700 text-indigo-400",
    black_900_01: "bg-black-900_01 text-white-A700",
    indigo_400: "bg-indigo-400 text-white-A700",
    deep_purple_50: "bg-deep_purple-50 text-indigo-900",
  },
};

const sizes = {
  sm: "h-[32px] px-[34px] text-[14px]",
  "5x1": "h-[60px] px-[34px] text-[20px]",
  xl: "h-[140px] px-4 text-[20px]",
  md: "h-[40px] px-5 text-[16px]",
  "4x1": "h-[60px] px-[60px] text-[25px]",
  lg: "h-[40px] px-[1.5px]",
  "6x1": "h-[68px] px-[34px] text-[20px]",
  "2x1": "h-[48px] px-4",
  "7x1": "h-[188px] px-[34px] text-[25px]",
  "3x1": "h-[40px] px-3 text-[18px]",
  xs: "h-[22px] px-2.5 text-[12px]",
};

const Button = ({
  children,
  className,
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  color,
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shape && shapes[shape]
      } ${size && sizes[size]} ${
        variant && variants[variant]?.[color]
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf([
    "xl",
    "sm",
    "5x1",
    "md",
    "4x1",
    "lg",
    "6x1",
    "2x1",
    "7x1",
    "3x1",
    "xs",
  ]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "indigo_400",
    "gray_600_01",
    "gray_400",
    "deep_purple_500",
    "gray_50",
    "white_A700",
    "black_900_01",
    "deep_purple_50",
  ]),
};

export { Button };
