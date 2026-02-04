import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Country } from '../../types/countryTypes';
import { CartState } from '../../types/countryTypes';
import { RootState } from 'redux/store';
import { clear } from 'console';

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
      if (!action.payload.cca2) return;
      const exists = state.cart.some((item) => item.cca2 === action.payload.cca2);
      if (exists) {
        state.lastAction = 'duplicated';
        return;
      }

      state.cart.push(action.payload);
      state.lastAction = 'added';
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item.cca2 !== action.payload);
      state.lastAction = 'undefined';
    },
    clearLastAction: (state) => {
      state.lastAction = undefined;
    },
    clearCart: (state) => {
      state.cart = [];
      state.lastAction = 'undefined';
    },
  },
});

export const selectCart = (state: RootState): Country[] => state.cart.cart;
export const selectLastcartAction = (state: RootState) => state.cart.lastAction;

export const { addToCart, clearLastAction, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
