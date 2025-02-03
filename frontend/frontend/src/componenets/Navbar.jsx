import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSelector } from 'react-redux';
import avatarImg from "../assets/avatar.png";

const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart", href: "/cart" },
    { name: "Check Out", href: "/checkout" },
];

export default function Navbar() {
    const { currentUser, logOut } = useAuth();
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isSearchExpanded, setIsSearchExpanded] = useState(false);

    const cartItems = useSelector(state => state.cart.cartItems);

    const handleLogOut = () => {
        logOut();
        setIsDropDownOpen(false); // Close dropdown after logout
    };

    return (
        <header className='max-w-screen-2xl mx-auto font-primary px-10 py-10'>
            <nav className='flex justify-between items-center'>
                {/* Left Side */}
                <div className='flex items-center md:gap-16 gap-4'>
                    <Link to='/'>
                        <FaHome className='w-6 h-6' />
                    </Link>
                    <div className='relative sm:w-72 w-40 space-x-2'>
                        <IoIosSearch
                            className='absolute inline-block left-3 inset-y-1.5 cursor-pointer'
                            onClick={() => setIsSearchExpanded(!isSearchExpanded)}
                        />
                        <input
                            type='text'
                            placeholder='What are you looking for?'
                            className={`transition-all duration-300 ease-in-out bg-[#EAEAEA] rounded-md py-1 px-6 focus:outline-none ${
                                isSearchExpanded ? "w-72" : "w-20 sm:w-72"
                            }`}
                            onBlur={() => setIsSearchExpanded(false)}
                        />
                    </div>
                </div>

                {/* Right Side */}
                <div className='flex relative items-center justify-between md:space-x-3 space-x-2'>
                    {/* Profile Icon / Dropdown */}
                    <div className='relative'>
                        {currentUser ? (
                            <>
                                {/* Profile Button */}
                                <button
                                    className='flex items-center'
                                    onClick={() => {
                                        // Prevent unintended navigation
                                        setIsDropDownOpen(!isDropDownOpen);
                                    }}
                                >
                                    <img
                                        src={avatarImg}
                                        className={`rounded-full w-8 h-8 ${
                                            currentUser ? 'ring-2 ring-blue-500' : ''
                                        }`}
                                    />
                                </button>

                                {/* Drop Down Menu */}
                                {isDropDownOpen && (
                                    <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                                        <ul className='py-2'>
                                            {navigation.map((item) => (
                                                <li key={item.name} onClick={() => setIsDropDownOpen(false)}>
                                                    <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                            <li>
                                                <button
                                                    onClick={handleLogOut}
                                                    className='block w-full text-left px-4 py-2 text-sm hover:bg-gray-100'
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link to='/login'>
                                <IoPersonOutline className='size-6' />
                            </Link>
                        )}
                    </div>

                    {/* Wishlist Icon */}
                    <button className='sm:block'>
                        <IoMdHeartEmpty className='size-6 hidden sm:block' />
                    </button>

                    {/* Cart Button */}
                    <Link to='/cart' className='bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md'>
                        <PiShoppingCartLight className='text-white size-5 mx-2' />
                        <span className='text-sm font-semibold sm:ml-1 text-white'>
                            {cartItems.length > 0 ? cartItems.length : "0"}
                        </span>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
