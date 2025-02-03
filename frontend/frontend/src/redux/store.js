import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./features/cart/cartSlice"
import booksapi from './features/cart/books/booksapi'
import ordersapi from './features/orders/ordersapi'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksapi.reducerPath]: booksapi.reducer,
    [ordersapi.reducerPath]: ordersapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksapi.middleware, ordersapi.middleware),
})