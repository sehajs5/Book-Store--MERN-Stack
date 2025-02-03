import React, {useState} from 'react'
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { set, useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';
export default function Register() {
    const [message, setMessage] = useState("")
    const {registerUser, signInWithGoogle} = useAuth()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
      const onSubmit = async(data) => {
        console.log(data)
        try{
            await registerUser(data.email, data.password)
            alert("Successfully registered")
        }catch(err){
            setMessage("please provide a valid email and password")
            console.log(err)
        }
      }
    
      const handleGoogleSignIn = async() =>{
        try{
            await signInWithGoogle()
            alert("Login Successful")
            navigate("/")
        }catch(err){
            console.log(err)
        }
  } 
  return (
    <div className='shadow-lg border border-gray-200 rounded-md font-primary flex flex-col w-full max-w-md mx-auto p-6 space-y-4'>
        <h3 className='text-xl font-bold'>New user</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-2'>
        <p className='mb-2'>Email</p>
        <input 
        name= "email"
        {...register("email", {required: true})}
        label='Email' placeholder='abc@example.com' type='email' className='w-full border px-2 py-2 rounded-md'/>
        </div>
        <div className='mb-2'>
        <p className='mb-2'>Password</p>
        <input 
        {...register("password", {required: true})}
        name="password"
        label= 'Password' placeholder='********' type='password' className='w-full border px-2 py-2 rounded-md'/>
        {
            message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
        }
        </div>
        <button className='w-full mb-2 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-300'>
            Sign Up
        </button>
        <span className='mb-2'>Already have an account? Please <Link to='/login' className ='text-blue-600 hover:text-blue-300'>Log In.</Link></span>
        <button 
        onClick={handleGoogleSignIn}
        className='bg-black w-full p-4 rounded-md flex items-center justify-center text-white hover:bg-gray-300 hover:text-black'>
            <FaGoogle className='mx-2'/>
            Sign in with Google
        </button>
        </form>
        <span className='text-gray-600 text-sm'>2025 Books Store All rights reserved.</span>
    </div>
  )
}
