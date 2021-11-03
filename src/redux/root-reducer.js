import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../redux/user/user-reducer";
import cartReducer from "./cart/cart-reducer";
import ProductMenuReducer from "./Product-menu/productMenu-reducer";
import shopReducer from "./shop/shop-reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"],
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    productMenu: ProductMenuReducer,
    shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
