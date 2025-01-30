import React, {useState} from 'react'
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Login() {
    const [message, setMessage] = useState("")
  return (
    <div className='shadow-lg border border-gray-200 rounded-md font-primary flex flex-col w-full max-w-md mx-auto p-6 space-y-4'>
        <h3 className='text-xl font-bold'>Login</h3>
        <span>Email</span>
        <input label='Email' placeholder='abc@example.com' type='email' className='border px-2 py-2 rounded-md'/>
        <span>Password</span>
        <input label= 'Password' placeholder='********' type='password' className='border px-2 py-2 rounded-md'/>
        {
            message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
        }
        <button className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-300'>
            Login
        </button>
        <span>Don't have an account? Please <Link to='/register' className ='text-blue-600 hover:text-blue-300'>Register.</Link></span>
        <button className='bg-black p-4 rounded-md flex items-center justify-center text-white hover:bg-gray-300 hover:text-black'>
            <FaGoogle className='mx-2'/>
            Sign in with Google
        </button>
        <span className='text-gray-600 text-sm'>2025 Books Store All rights reserved.</span>
    </div>
  )
}
