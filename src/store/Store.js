import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import productreducer from './productSlice'

const store = configureStore({
    reducer:{
        Cart: cartReducer,
        Product: productreducer
    },
});

export default store;