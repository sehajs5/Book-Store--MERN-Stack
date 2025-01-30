import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { getImgUrl } from '../../utils/getImgUrl';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
export default function BooksCard({book}) {
    const dispatch = useDispatch()

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
  return (
    <div className='flex rounded-lg transition-shadow duration-300 items-center gap-4 hover:shadow-2xl p-3'>
        {/*Left Side*/}
        <div className='flex flex-col sm:flex-row sm:items-center sm:h-72 sm:justify-center gap-4'>
            <div className='sm:h-72 sm:flex-shrink-0 rounded-md'>
            <Link to={`/books/${book?._id}`}>
            <img src={`${getImgUrl(book?.coverImage)}`} className='w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200'/>
            </Link>
        </div>
        <div>
            {/*Right Side*/}
            <Link to={`/books/${book._id}`}>
            <h4 className='text-base  hover:text-blue-600 mb-3'>{book?.title}</h4>
            </Link>
            <p className='mb-5 text-xs text-gray-600'>{book?.description.length > 80? `${book?.description.slice(0,80)}...`: book?.description}</p>
            <p className='font-medium mb-5'>
                ${book?.oldPrice} <span className='line-through font-normal ml-2'>${book?.newPrice}</span>
            </p>
            <button 
            onClick={()=> handleAddToCart(book)}
            className='text-sm bg-primary px-4 py-1 space-x-1 flex items-center gap-2 rounded-md text-white hover:bg-secondary'>
                <HiOutlineShoppingCart/>
                <span>Add to Cart</span>
            </button>
        </div>
        </div>
    </div> 
  )
}

