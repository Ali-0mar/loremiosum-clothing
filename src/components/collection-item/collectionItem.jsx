import React from "react";
import { connect } from "react-redux";
import CustomtButton from "../customButton/customButton";
import { addItem } from "../../redux/cart/cart-actions";
import "../collection-item/collection-item.scss";

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="collection-footer">
                <span className="name">{name} </span>
                <span className="price">{price}$ </span>
            </div>
            <CustomtButton onClick={() => addItem(item)} inverted>
                ADD TO CART
            </CustomtButton>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItem);
