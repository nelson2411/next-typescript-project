import { createSlice } from "@reduxjs/toolkit";
import { Country } from "../../types/countryTypes";

// Create a slice of the store
// add to cart, remove from cart, clear cart

const initialState = {
  cart: [],
  country: Country,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.name.common !== action.payload.name.common
      );
    },
  },
});

export const selectCart = (state) => state.cart.cart;

export const { addToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
