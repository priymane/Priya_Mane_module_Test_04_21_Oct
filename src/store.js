import { configureStore } from "@reduxjs/toolkit";
import productReducer from './Redux/productSlice';
import cartReducer from './Redux/CartSlice';

export default configureStore({
    reducer:  {
        product: productReducer,
        cart: cartReducer,
    }
});