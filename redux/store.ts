// Create a store with redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import { countryApiSlice } from "./features/countrySlice";
import postReducer from "./slices/cartSlice";
export const store = configureStore({
  reducer: {
    [countryApiSlice.reducerPath]: countryApiSlice.reducer,
    cart: postReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(countryApiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
