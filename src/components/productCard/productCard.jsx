import React from "react";
import "./product-card.scss";

const ProductCard = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} product-card`}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};
export default ProductCard;
