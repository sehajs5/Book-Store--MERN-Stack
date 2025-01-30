import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { updateForm, resetForm } from '../redux/features/cart/cartSlice'
export default function Checkout() {
    const dispatch = useDispatch()
    const formData = useSelector(state => state.cart.formData)
    const cartItems = useSelector(state => state.cart.cartItems)
    const totalPrice = cartItems.reduce((acc, item)=> acc+ item.newPrice* item.quantity, 0).toFixed(2)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateForm({ field: name, value: value }));
      };
    const handleReset =()=>{
        dispatch(resetForm())
    }
    const onSubmit = (datta)=>console.log(data)
  return (
    <div className='bg-gray-200 font-primary max-w-screen-2xl mx-auto py-16 items-center justify-between gap-12 shadow-lg lg:px-20 px-10'>
        <div>
            <h1 className='text-3xl mx-2 mb-3'>Cash on Delivery</h1>
            <p className='text-black-200 text-xl mx-2 mb-3'>Total Price: ${totalPrice}</p>
            <p className='text-black-200 text-xl mx-2 mb-3'>Items: {cartItems.length}</p>
        </div>
        <form onSubmit={onSubmit}>
            <div className='lg:flex p-10 items-center bg-white rounded-md'>
                <div className='lg:w-1/3'>
                    <h1 className='text-4xl'>Personal Details</h1>
                    <p className='text-xl text-gray-300'>Please fill out the details</p>
                </div>
                <div className='w-2/3'>
                    <label className='block mb-1 text-xl'>Full Name</label>
                    <input
                    required
                    type= "text"
                    name = "name"
                    value = {formData.name || ""}
                    onChange={handleInputChange}
                    placeholder='Enter Name' 
                    className='mb-3 rounded-md border border-light bg-gray-100 w-full px-2 py-2'>
                    </input>
                    
                    <label className='block mb-1 text-xl'>Email Adress</label>
                    <input
                    required
                    type= "text"
                    name = "email"
                    value = {formData.email || ""}
                    onChange={handleInputChange}
                    placeholder='abcd@example.com' 
                    className='mb-3 rounded-md border border-light bg-gray-100 w-full px-2 py-2'>
                    </input>
                    <label className='block mb-1 text-xl'>Phone Number</label>
                    <input
                    type= "numeric"
                    name = "phone"
                    value = {formData.phone || ""}
                    onChange={handleInputChange}
                    placeholder='1234567890' 
                    className='mb-3 rounded-md border border-light bg-gray-100 w-full px-2 py-2'>
                    </input>
                    
                    <div className='lg:flex-row flex flex-col w-full'> 
                        <div className='mr-2'>
                    <label className='block mb-1 text-xl'>Address/Street</label>
                    <input
                    required
                    type= "text"
                    name = "address"
                    value = {formData.address || ""}
                    onChange={handleInputChange}
                    placeholder='Street' 
                    className='mb-3 rounded-md border border-light bg-gray-100 w-full px-2 py-2 '>
                    </input>
                    
                    </div>
                    <div className='mr-2'>
                    <label className='block mb-1 text-xl'>City</label>
                    <input
                    required
                    type= "text"
                    name = "city"
                    value = {formData.city || ""}
                    onChange={handleInputChange}
                    placeholder='City' 
                    className='mb-3 rounded-md border border-light bg-gray-100 w-full px-2 py-2'>
                    </input>
                    
                    </div>
                    </div>
                    <div className='lg:flex-row flex flex-col w-full'>
                        <div className='mr-2'>
                            <label className='block mb-1 text-xl'>Country/region</label>
                            <input
                            required
                            type= "text"
                            name = "country"
                            value = {formData.country || ""}
                            onChange={handleInputChange}
                            placeholder='Country' 
                            className='mb-3 rounded-md border border-light bg-gray-100 w-full px-2 py-2'>
                            </input>
                            
                        </div>
                        <div className='mr-2'>
                            <label className='block mb-1 text-xl'>State/ Province</label>
                            <input
                            type= "text"
                            name = "state"
                            value = {formData.state || ""}
                            onChange={handleInputChange}
                            placeholder='State' 
                            className='rounded-md border border-light bg-gray-100 w-full px-2 py-2 mb-3'>
                            </input>
                            
                        </div>
                        <div className='mr-2'>
                            <label className='block mb-1 text-xl'>Zipcode</label>
                            <input
                            type= "numeric"
                            name = "zipCode"
                            value = {formData.zipCode || ""}
                            onChange={handleInputChange}
                            placeholder='Zip Code' 
                            className='rounded-md border border-light bg-gray-100 w-full px-2 py-2'>
                            </input>
                            
                        </div>
                    </div>
                    <div className='mb-3'>
                            <input
                            type='checkbox'
                            name='terms'
                            value={formData.terms || false}
                            onChange={handleInputChange}/>
                            I agree to the <Link to="/terms">Terms and Conditions</Link>.
                        
                    </div>
                    <div className='lg:flex-row flex flex-col'>
                    <button 
                    disabled={!formData.accepted}
                    className={`submit-button ${!formData.termsAccepted ? 'disabled' : ''} rounded-md bg-purple-500 text-white px-4 mr-5 py-2 hover:bg-white hover:text-black`}>
                        Place Order
                    </button>
                    <button 
                    onClick={handleReset}
                    className='bg-purple-300 text-white px-4 py-2 rounded-md hover:bg-purple-500'>
                        Reset Form
                    </button>
                    </div>
                </div>
            </div>
        </form>

    </div>
  )
}
