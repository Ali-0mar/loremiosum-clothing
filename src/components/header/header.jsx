import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/logo.svg.svg";
import "./header.scss";
import { auth } from "../../firebase/firebase";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-DropDown/cart-drop-down";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selectors";
const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link to="/" className=" logo-container">
            <Logo />
        </Link>
        <div className="nav-bar">
            <Link to="/shop" className="nav-item">
                Shop
            </Link>
            <Link to="/Contact Us" className="nav-item">
                Contact
            </Link>
            {currentUser ? (
                <div className="nav-item" onClick={() => auth.signOut()}>
                    Sign Out
                </div>
            ) : (
                <Link className="nav-item" to="/signin">
                    SIGN IN
                </Link>
            )}
            <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
