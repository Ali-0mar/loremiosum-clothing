import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg.svg";
import "./header.scss";
import { auth } from "../../firebase/firebase";

const Header = ({ currentUser }) => (
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
        </div>
    </div>
);

export default Header;
