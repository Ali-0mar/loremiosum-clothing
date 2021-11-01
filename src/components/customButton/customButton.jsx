import React from "react";
import "../customButton/custom-button.scss";

const CustomtButton = ({
    children,
    isGoogleSignIn,
    inverted,
    ...otherProps
}) => (
    <button
        className={`${inverted ? "inverted" : ""} ${
            isGoogleSignIn ? "google-sign-in" : ""
        } custom-button`}
        {...otherProps}>
        {children}
    </button>
);

export default CustomtButton;
