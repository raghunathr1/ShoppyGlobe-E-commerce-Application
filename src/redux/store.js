import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";

// Store Configuration

const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer
  }
});

export default store;