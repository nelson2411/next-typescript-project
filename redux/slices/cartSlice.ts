import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Country, CartState } from '../../types/countryTypes';

// Create a slice of the store
// add to cart, remove from cart, clear cart
const initialState: CartState = {
  cart: [] as Country[],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Country>) => {
      const exists = state.cart.some((item) => item.cca2 === action.payload.cca2);
      if (!exists) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.cca2 !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const selectCart = (state: { cart: CartState }) => state.cart.cart;

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
