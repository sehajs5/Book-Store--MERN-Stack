import React from 'react'
import footerLogo from '../assets/footer-logo.png'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
export default function Footer() {
  return (
    <footer className='bg-secondary text-white px-10 py-10  font-primary w-full '>
    <div className=' container flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='md:w-1/2 w-full'>
            <img src= {footerLogo} className='mb-5 w-36'/>
            <div className='flex items-center gap-12 mb-10'>
                <Link to='/home' className='hover:text-primary'>Home</Link>
                <Link to='/services' className='hover:text-primary'>Services</Link>
                <Link to='/about' className='hover:text-primary'>About Us</Link>
                <Link to='/contact' className='hover:text-primary'>Contact</Link>
            </div>
        </div>
        <div className='md:w-1/2 w-full'>
            <span className='mb-4'> Subscribe to stay tuned for latest updates. Let's do it!</span>
            <div className='mx-auto flex'>
                <input type= 'email' placeholder='Enter your email address' className='w-full px-4 py-2 rounded-l-md text-black'></input>
                <button className='bg-primary text-white rounded-md px-6 py-2 hover:bg-primary'>Subscribe</button>
            </div>
        </div>
    </div>
    <div className='container flex flex-col md:flex-row justify-between items-center border-t border-gray-700 px-10 py-10'>
    <div className='flex gap-6'>
                <Link to='/privacy'>Privacy Policy</Link>
                <Link to='/terms'>Terms of Service</Link>
            </div>
            <div className='flex gap-6'>
                <Link to='https://facebook.com' target='_blank' rel = 'nooperner noreferrer' className='hover:text-primary'>
                <FaFacebook size={24}/>
                </Link>
                <Link to='https://twitter.com' target='_blank' rel = 'nooperner noreferrer' className='hover:text-primary'>
                <FaTwitter size={24}/>
                </Link>
                <Link to='https://instagram.com' target='_blank' rel = 'nooperner noreferrer' className='hover:text-primary'>
                <FaInstagram size={24}/>
                </Link>
            </div>
            </div>
    </footer>
  )
}
