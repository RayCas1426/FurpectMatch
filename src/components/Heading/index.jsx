import React from "react";

const sizes = {
  texts: "text-[16px] font-medium 1g:text-[13px]",
  textmd: "text-[24px] font-medium 1g:text-[20px] md:text-[22px]",
  textlg: "text-[32px] font-medium 1g:text-[27px] md:text-[30px] sm:text-[28px]",
  headingxs: "text-[14px] font-semibold",
  textxl: "text-[20px] font-medium lg:text-[17px]",
  text2x1: "text-[40px] font-medium 1g:text-[34px] md:text-[38px] sm:text-[36px]",
  headings: "text-[16px] font-semibold lg:text-[13px]",
  headingmd: "text-[20px] font-semibold 1g:text-[17px]", 
  headinglg: "text-[28px] font-semibold lg:text-[23px] md:text-[26px] sm:text-[24px]",
  headingxl: "text-[30px] font-semibold lg:text-[25px] md:text-[28px] sm:text-[26px]",
  heading2x1: "text-[40px] font-semibold lg:text-[34px] md:text-[38px] sm:text-[36px]",
  heading3x1: "text-[50px] font-semibold lg:text-[42px] md:text-[46px] sm:text-[40px]",
  heading4xl: "text-[54px] font-bold lg:text-[45px] md:text-[46px] sm:text-[40px]",
};

const Heading = ({ children, className, size = "headingxs", as, ...restProps }) => {
  const Component = as || "h6";
  return (
    <Component className={`text-black-900_02 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
