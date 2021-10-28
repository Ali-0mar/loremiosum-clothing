import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg.svg";
import "./header.scss";

const Header = () => (
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
            <Link to="/signin" className="nav-item">
                Sign In
            </Link>
        </div>
    </div>
);

export default Header;
