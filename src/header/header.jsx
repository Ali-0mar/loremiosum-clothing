import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/logo.svg.svg";
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
            <Link className="nav-item">Contact</Link>
        </div>
    </div>
);

export default Header;
