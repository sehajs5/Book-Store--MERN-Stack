import { createSlice } from '@reduxjs/toolkit'
import  Swal  from 'sweetalert2';

import 'animate.css';

const initialState = {
  cartItems: [],
  formData: {},
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action)=>{
        const existingItem = state.cartItems.find(items => items._id === action.payload._id);
        if (!existingItem){
            state.cartItems.push({...action.payload, quantity: 1})
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }else{
            Swal.fire({
                title: "Item already exists",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
        }
    },
    removeFromCart: (state, action) => {
      const item = state.cartItems.find(items => items._id===action.payload._id);
        state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
    },
    clearCart: (state)=> {
      Swal.fire({
        title: "Are you sure?",
        text: "This will remove all items from your cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, clear it!",
    }).then((result) => {
        if (result.isConfirmed) {
            state.cartItems = [];
            localStorage.removeItem('cartItems');
            Swal.fire("Cleared!", "Your cart is now empty.", "success");
        }
    });
    },
    increment: (state, action)=>{
      const item = state.cartItems.find(items => items._id===action.payload._id);
      if (item){
        item.quantity+=1
      }
    },
    decrement: (state, action)=>{
      const item = state.cartItems.find(items => items._id===action.payload._id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
    }
    },
    updateForm: (state, action)=>{
      const {field, value} = action.payload
      state.formData[field] = value
    },
    resetForm: (state, action)=>{
      Swal.fire({
        title: "Are you sure?",
        text: "This will remove all entered data.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, clear it!",
    }).then((result) => {
        if (result.isConfirmed) {
            state.cartItems = [];
            localStorage.removeItem('cartItems');
            Swal.fire("Cleared!", "Data deteled.", "success");
        }
    });
    }
    }
  }
)

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart, clearCart, increment, decrement, resetForm, updateForm} = cartSlice.actions
export default cartSlice.reducer