import React from "react";
import CustomtButton from "../customButton/customButton";

import "../cart-DropDown/cart-drop-down.scss";
const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <CustomtButton>GO TO CHECKOUT </CustomtButton>
        </div>
    </div>
);

export default CartDropdown;
