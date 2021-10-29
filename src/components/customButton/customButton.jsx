import React from "react";
import "../customButton/custom-button.scss";

const CustomtButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button
        className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
        {...otherProps}>
        {children}
    </button>
);

export default CustomtButton;
