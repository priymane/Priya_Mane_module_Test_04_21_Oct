import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const productToAdd = action.payload;
            console.log(productToAdd);
            state.push(productToAdd);
        },
        removeFromCart: (state, action) => {
            const productToRemove = action.payload;
            state.pop(productToRemove);
        }
    }
})

export const {addToCart, removeFromCart} = CartSlice.actions;

export default CartSlice.reducer;