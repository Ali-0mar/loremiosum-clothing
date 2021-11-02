import React from "react";
import CustomtButton from "../customButton/customButton";
import CartItem from "../cart-item/cart-item";
import { connect } from "react-redux";

import "../cart-DropDown/cart-drop-down.scss";
const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomtButton>GO TO CHECKOUT </CustomtButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
