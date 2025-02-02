import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./features/cart/cartSlice"
import booksapi from './features/cart/books/booksapi'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksapi.reducerPath]: booksapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksapi.middleware),
})