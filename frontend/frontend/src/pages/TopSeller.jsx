import React, { useEffect, useState, useRef } from 'react'
import BooksCard from './Books/BooksCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useFetchAllBooksQuery } from '../redux/features/cart/books/booksapi';

const categories = [
    "Choose a genre",
    "Business",
    "Fiction",
    "Horror",
    "Adventure",
]
export default function TopSeller() {
    const [selectedCategory, setSelectedCategory] = useState('Choose a genre');
    const {data: books =[]} = useFetchAllBooksQuery()
    console.log(books)
    const filteredBooks = selectedCategory==="Choose a genre"? books: books.filter(book => 
        book.category===selectedCategory.toLowerCase()
    )
  return (
    <div className='font-primary max-w-screen-2xl mx-auto py-16 items-center justify-between gap-12'>
        <h1 className='text-2xl font-semibold mb-6'>Top Sellers</h1>
        {/*Choose a genre*/}
        <div className='mb-8 flex items-center'>
        <select 
        onChange={(e) => setSelectedCategory(e.target.value)}
        name ="category" id = "category" className='border-none bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
            {
                categories.map((category, index)=> (
                    <option key= {index} value={category}>{category} </option>
                ))
            }

        </select>
        </div>
        <Swiper navigation={true} modules={[Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  1180:{
                    slidesPerView: 2.5,
                    spaceBetween: 50,
                  }
                }}
                className="mySwiper" >
                
        {   
            
            filteredBooks.length>0 && filteredBooks.map((book, index) => (
                <SwiperSlide key={index}><BooksCard  book={book}/></SwiperSlide>
                
            ))
        }
        </Swiper>
    </div>
  )
}
