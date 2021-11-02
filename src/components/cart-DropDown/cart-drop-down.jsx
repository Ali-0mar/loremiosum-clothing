import React from "react";
import CustomtButton from "../customButton/customButton";
import CartItem from "../cart-item/cart-item";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import "../cart-DropDown/cart-drop-down.scss";
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? (
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                <span className="empty-message"> Your Cart is empty</span>
            )}
        </div>
        <CustomtButton
            onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartHidden());
            }}>
            GO TO CHECKOUT{" "}
        </CustomtButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
