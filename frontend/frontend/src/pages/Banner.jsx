import React from 'react'
import banner from '../assets/banner.png'
export default function Banner() {
  return (
    <div className='max-w-screen-2xl mx-auto py-16  font-primary flex flex-col md:flex-row justify-between items-center gap-12'>
        {/* Left Section*/}
        <div className='md:w-1/2 w-full'>
            <h1 className='md:text-5xl text-2xl mb-7'>New releases this week</h1>
            <p className='mb-10'>
            It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone
            </p>
            <br></br>
            <button className='bg-primary text-white text-semibold text-lg rounded-md px-2 py-1 hover:bg-secondary'>
                Subscribe
            </button>
        </div>
        {/*Right Section*/}
        <div className='md:w-1/2 w-full flex items-center md:justify-end'>
        <img src={banner} />
        </div>
    </div>
  )
}
