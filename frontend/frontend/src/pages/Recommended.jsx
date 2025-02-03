import React, {useState, useEffect} from 'react'
import BooksCard from './Books/BooksCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../redux/features/cart/books/booksapi';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function () {
    const {data: bookList =[]} = useFetchAllBooksQuery()
    const books = bookList?.books || [];
  return (
    <div className='font-primary max-w-screen-2xl mx-auto py-16 items-center justify-between gap-12'>
        <h1 className='text-2xl font-semibold mb-6'>Recommended for you</h1>
        <div>
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
            
            books.length>0 && books.map((book, index) => (
                <SwiperSlide key={index}><BooksCard  book={book}/></SwiperSlide>
                
            ))
        }
        </Swiper>
        </div>
    </div>
  )
}
