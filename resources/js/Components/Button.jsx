import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    processing: PropTypes.bool,
    children: PropTypes.node,
    // onClick: PropTypes.func,
};

export default function Button({
    type = "button",
    className,
    variant = "primary",
    processing,
    children,
    // onClick,
}) {
    return (
        <button
            type={type}
            // onClick={onClick}
            className={`rounded-2xl py-[13px] text-center 
            ${processing && "opacity-30"}
            btn-${variant}
            ${className}
            `}
            disabled={processing}
        >
            {children}
        </button>
    );
}
