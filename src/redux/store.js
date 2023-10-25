import { configureStore } from "@reduxjs/toolkit";
import wishlistslice from "./slices/wishlistslice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        wishListReducer:wishlistslice,
        cartReducer:cartSlice
    }
})

export default store;