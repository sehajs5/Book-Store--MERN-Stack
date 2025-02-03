import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from '../context/AuthContext';
import getBaseUrl from '../utils/baseUrl';
export default function AdminLogin() {
    const [message, setMessage] = useState("")
    // const {loginUser} = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async(data) => {
    console.log(data)
    try{
       const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
       }
       )
       const auth = response.data
       console.log(auth)

       if (auth.token){
        localStorage.setItem('token', auth.token)
        setTimeout = (()=> {
            localStorage.removeItem('token')
            alert('Token has been removed')
            navigate("/")
        },3600*1000)
       }

       alert("Login Successful")
       navigate("/dashboard")
    }catch(err){
        setMessage("Provide a valid email address and password")
        console.log(err)
    }
  } 
  return (
    <div className='min-h-screen p-6 bg-gray-100 flex items-center justify-center'>
    <div className='shadow-lg border border-gray-200 rounded-md font-primary flex flex-col w-full items-center max-w-md mx-auto p-6 space-y-4'>
        <h3 className='text-xl font-bold'>Login</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-2'>
        <p className='mb-2'>Username</p>
        <input label='Email' name="username" defaultValue="" {...register("username", {required: true})}placeholder='abcd' type='text' className='border w-full px-2 py-2 rounded-md'/>
        </div> 
        <div className='mb-2'>
        <p className='mb-2'>Password</p>
        <input 
        {...register("password", {required: true})}
        name="password"
        label= 'Password' placeholder='********' type='password' className='border px-2 py-2 rounded-md w-full'/>
        {
            message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
        }
        </div>
        <button className='px-4 w-full mb-2 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-300'>
            Login as Admin
        </button>
        </form>
    </div>
    </div>
  )
}
