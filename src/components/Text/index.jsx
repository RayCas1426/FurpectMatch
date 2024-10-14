import React from "react";

const sizes = {
    textxs: "text-[12px] font-normal not-italic",
    texts: "text-[14px] font-normal not-italic",
    textmd: "text-[16px] font-normal not-italic lg:text-[13px]",
    textlg: "text-[18px] font-normal not-italic lg:text-[15px]",
};

const Text = ({ children, className = "", size = "textmd", as, ...restProps }) => {
    const Component = as || "p";
    return (
        <Component className={`text-black-900 font-poppins ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Text };
