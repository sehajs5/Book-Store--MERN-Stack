import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';


const navigation = [
    {
        name: "Dashboard", href: "/dashboard"
    },
    {
        name: "Orders", href: "/orders"
    },
    {
        name: "Cart", href: "/cart"
    },
    {
        name: "Log Out", href: "/logout"
    },
]
import avatarImg from "../assets/avatar.png";
import { useSelector } from 'react-redux';
export default function Navbar() {

    const currentUser = true;
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)

    const cartItems = useSelector(state => state.cart.cartItems)
    console.log(cartItems)
    const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  return (
    <header className='max-w-screen-2xl mx-auto  font-primary px-10 py-10'>
    <nav className='flex justify-between items-center'>
        {/*Left Side*/}
        <div className='flex items-center md:gap-16 gap-4'>
            <Link to='/'>
            <FaHome className='w-6 h-6'/>
            </Link>
            <div className='relative sm:w-72 w-40 space-x-2'>
            <IoIosSearch className='absolute inline-block left-3 inset-y-1.5' onClick={()=> setIsSearchExpanded(!isSearchExpanded)}/>
            <input type='text' placeholder='What are you looking for?'
            className={`transition-all duration-300 ease-in-out bg-[#EAEAEA] rounded-md py-1 px-6 focus:outline-none ${
                isSearchExpanded ? "w-72" : "w-20 sm:w-72"
              }`}
              onBlur = {()=> setIsSearchExpanded(false)}/>
        </div>
        </div>
        {/*Right Side*/}
        <div className='flex relative items-center justify-between md:space-x-3 space-x-2'>

            <div className='items-center'>
                {
                    currentUser? <>
                    <button className='flex items-center' onClick={()=> setIsDropDownOpen(!isDropDownOpen)}>
                        <img src={avatarImg} className={` rounded-full ${currentUser ? 'ring-2 ring-blue-500' : ''} `}/>
                    </button>
                    {/* Drop Down*/}
                    {
                        isDropDownOpen && (
                            <div className='absolute mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                                <ul className='py-2'>
                                    {
                                        navigation.map((item)=>(
                                            <li key={item.name} onClick={()=>setIsDropDownOpen(false)}>
                                                <Link to ={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                                                {item.name}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        )
                    }
                    </>:<Link to='/login'><IoPersonOutline className='size-6'/></Link>
                }
            </div>
            <button className='sm:block'>
            <IoMdHeartEmpty className='size-6 hidden sm:block'/>
            </button>
            <Link to='/cart' className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md'>
            <PiShoppingCartLight className='text-white size-5 mx-2'/>
            {
                cartItems.length>0 ? <span className='text-sm font-semibold sm:ml-1 text-white'>{cartItems.length}</span>: <span className='text-sm font-semibold sm:ml-1 text-white'>0</span>
            }
            </Link>
        </div>
    </nav>
    </header>
  )
}
