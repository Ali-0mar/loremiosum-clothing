import React from "react";
import ProductCard from "../productCard/productCard";
import "./product-menu.css";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProductSections } from "../../redux/Product-menu/productMenu-selector";

const ProductMenu = ({ sections }) => (
    <div className="products-menu">
        {sections.map(({ title, id, imageUrl, size }) => (
            <ProductCard
                key={id}
                title={title}
                imageUrl={imageUrl}
                size={size}
            />
        ))}
    </div>
);
const mapStateToProps = createStructuredSelector({
    sections: selectProductSections,
});
export default connect(mapStateToProps)(ProductMenu);
