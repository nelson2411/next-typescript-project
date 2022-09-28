import { createSlice } from "@reduxjs/toolkit";
import { Country } from "../../types/countryTypes";

// Create a slice of the store
// add to cart, remove from cart, clear cart

const initialState = {
  cart: [],
  country: Country,
};

const cartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export default cartSlice.reducer;
