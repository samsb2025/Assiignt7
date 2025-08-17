import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./components/cart/cartSlice";
import cardReducer from "./components/card/cardSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    cards: cardReducer,
  },
});

export default store;
