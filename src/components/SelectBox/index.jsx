import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-md",
};

const variants = {
    outline: {
        gray_600_01: "border-gray-600_01 border-[1.5px] border-solid text-gray-600_01",
    },
};

const sizes = {
    xs: "h-[40px] px-2 text-[20px]",
};

const SelectBox = React.forwardRef(
    (
        {
            children,
            className,
            options = [],
            isSearchable = false,
            isMulti = false,
            indicator,
            shape,
            variant = "outline",
            size = "xs",
            color = "gray_600_01",
            ...restProps
        },
        ref
    ) => {
        return (
            <>
                <Select
                    ref={ref}
                    options={options}
                    className={`${className} flex ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
                    isSearchable={isSearchable}
                    isMulti={isMulti}
                    IndicatorSeparator={() => null}
                    components={{
                        ...(indicator && { DropdownIndicator: () => indicator }),
                    }}
                    styles={{
                        indicatorsContainer: (provided) => ({
                            ...provided,
                            padding: undefined,
                            flexShrink: undefined,
                            width: "max-content",
                            "& > div": { padding: 0 },
                        }),
                        container: (provided) => ({
                            ...provided,
                            zIndex: 0,
                            alignItems: "center",
                        }),
                        control: (provided) => ({
                            ...provided,
                            backgroundColor: "transparent",
                            border: "0 !important",
                            boxShadow: "none !important",
                            minHeight: "auto",
                            width: "100%",
                            flexWrap: undefined,
                            "&:hover": {},
                        }),
                        input: (provided) => ({
                            ...provided,
                            color: "inherit",
                        }),
                        option: (provided, state) => ({
                            ...provided,
                            display: "flex",
                            minWidth: "max-content",
                            width: "100%",
                            backgroundColor: state.isSelected ? "#ffffff" : "transparent",
                            color: state.isSelected ? "#675bc8" : "inherit",
                            "&:hover": {
                                backgroundColor: "#ffffff",
                                color: "#675bc8",
                            },
                        }),
                        singleValue: (provided) => ({
                            ...provided,
                            display: "flex",
                        }),
                        valueContainer: (provided) => ({
                            ...provided,
                            padding: 0,
                            display: "flex",
                        }),
                        placeholder: (provided) => ({
                            ...provided,
                        }),
                        menuPortal: (base) => ({ ...base, zIndex: 999999 }),
                        menu: (base) => ({ ...base, minWidth: "max-content", width: "max-content" }),
                    }}
                    menuPortalTarget={document.body}
                    closeMenuOnScroll={(event) => {
                        return event.target.id === "scrollContainer";
                    }}
                    {...restProps}
                />
                {children}
            </>
        );
    }
);

SelectBox.propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
    isSearchable: PropTypes.bool,
    isMulti: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string,
    indicator: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["outline"]),
    color: PropTypes.oneOf(["gray_600_01"]),
};

export { SelectBox };
