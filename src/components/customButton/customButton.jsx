import React from "react";
import "../customButton/custom-button.scss";

const CustomtButton = ({ children, ...otherProps }) => (
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
);

export default CustomtButton;
