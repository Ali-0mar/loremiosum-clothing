import CartTypes from "./cart-types";

export const toggleCartHidden = () => ({
    type: CartTypes.TOOGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
    type: CartTypes.ADD_ITEM,
    payload: item,
});
