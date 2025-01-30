import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, increment, removeFromCart, decrement } from '../redux/features/cart/cartSlice'
import { ImBin } from "react-icons/im";
import { Link } from 'react-router-dom';
import {getImgUrl} from '../utils/getImgUrl'
export default function AddToCart() {
    const dispatch = useDispatch()
    const handleRemove = (product)=>{
        dispatch(removeFromCart(product))
    }
    const handleIncrement = (product)=>{
        dispatch(increment(product))
    }
    const handleDecrement = (product)=>{
        dispatch(decrement(product))
    }
    const handleClear = ()=>{
        dispatch(clearCart())
    }
    const initial = 0
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalPrice = cartItems.reduce((acc, item)=> acc+ item.newPrice* item.quantity, 0).toFixed(2)
  return (
    
    <div className='font-primary max-w-screen-2xl mx-auto py-16 items-center justify-between gap-12 shadow-lg lg:px-20 px-10'>
        <div className='flex justify-between items-center'>
            <div>
            <h4 className='font-semibold text-xl'>Shopping Cart</h4>
            </div>
            <div>
            <button 
            onClick={()=>handleClear()}
            className='text-white rounded-md bg-blue-500 hover:bg-blue-300 p-3'>Clear Cart</button>
        </div>
        </div>
        <div className='overflow-y-auto max-h-[calc(50vh-100px)]'>
            {
                cartItems.length>0 ? (cartItems.map((src)=> (
                    <div key={src._id} className="flex justify-between items-center py-4 border-b border-gray-300">
                    {/* Image Section */}
                    <div className="flex-shrink-0 w-20 h-20">
                      <img
                        src={`${getImgUrl(src?.coverImage)}`}
                        alt={src?.title || "Product Image"}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  
                    {/* Details Section */}
                    <div className="flex flex-col flex-grow mx-4 space-y-2">
                      {/* Product Title */}
                      <p className="text-lg font-semibold">{src?.title}</p>
                  
                      {/* Price and Category */}
                      <div className="flex items-center space-x-4">
                        <p className="text-sm text-gray-700">Price: <span className="font-semibold">${src?.newPrice}</span></p>
                        <p className="text-sm text-gray-700">
                          Category: <span className="font-semibold">{src?.category}</span>
                        </p>
                      </div>
                  
                      {/* Quantity */}
                      <div className='flex items-center'>
                      <span className="text-sm text-gray-700">Quantity: {src?.quantity}</span>
                      <button onClick={()=>handleIncrement(src)} className='mx-1 border border-light p-1'>
                            +
                      </button>
                      <button onClick={()=>handleDecrement(src)} className='mx-1 border border-light p-1'>
                            -
                      </button>
                      </div>
                    </div>
                  
                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemove(src)}
                      className="text-gray-500 hover:text-red-500 transition"
                    >
                      <ImBin className="w-5 h-5" />
                    </button>
                  </div>
                ))
            ):(<span className='text-lg text-grey-300'>No product Found</span>
            )}
        </div>
        <div className='bg-grey-300 w-full h-1'></div>
            <div className='flex justify-between'>
                <div>
                <p>Subtotal</p>
                <p className='text-sm text-grey-300'>Shipping and taxes calculated at checkout</p>
                </div>
                <div>
                    <p>
                        ${totalPrice? totalPrice: 0}
                    </p>
                </div>
                </div>
                <div className='flex flex-col text-center'>
                   <Link
                   onClick={(e)=>{
                    if (cartItems.length === 0) {
                      e.preventDefault(); // Prevent navigation if no items are in the cart
                    }
                   }}
                   to='/checkout' className='bg-purple-600 text-white max-width rounded-sm p-4 my-2 hover:bg-purple-300'>
                    Checkout
                   </Link>
                   <Link to = "/">
                   <p className='text-gray-500 font-underline hover:text-black rounded-md'>or Continue Shopping</p>
                   </Link>
            </div>
    </div>
  )
}
