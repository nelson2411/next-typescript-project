import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Country } from '../../types/countryTypes';
import { CartState } from '../../types/countryTypes';

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
    clearLastAction: (state) => {
      state.lastAction = undefined;
    },
  },
});

export const selectCart = (state: any) => state.cart.cart;
export const selectLastcartAction = (state: any) => state.cart.lastAction;

export const { addToCart, clearLastAction } = cartSlice.actions;

export default cartSlice.reducer;
