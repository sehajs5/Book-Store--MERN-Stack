import React from 'react';
import { useFetchBookByIdQuery } from '../../redux/features/cart/books/booksapi';
import { getImgUrl } from '../../utils/getImgUrl';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../redux/features/cart/cartSlice';
export default function SingleBook() {
    const { id } = useParams();
    const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);
    const dispatch = useDispatch();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading</div>;

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className='font-primary max-w-screen-lg mx-auto py-16 flex flex-col items-center text-center'>
            {/* Book Cover Image */}
            <div className='w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4'>
                <img 
                    src={getImgUrl(book?.coverImage)} 
                    className='w-full h-auto rounded-md cursor-pointer hover:scale-105 transition-all duration-200' 
                    alt={book?.title}
                />
            </div>

            {/* Book Details */}
            <div className='mt-6 px-4 w-full sm:w-3/4 md:w-1/2 lg:w-1/3'>
                <h4 className='text-xl font-bold hover:text-yellow-300 mb-3'>{book?.title}</h4>
                <p className='mb-5 text-sm text-gray-600 break-words text-justify'><b>Description: </b>{book?.description}</p>
                <p className='mb-5 text-lg text-black'><b>Category: </b>{book?.category}</p>
                <p className='font-medium mb-5'>
                    <span className='text-lg font-semibold'>${book?.newPrice}</span>
                    <span className='line-through text-gray-500 text-sm ml-2'>${book?.oldPrice}</span>
                </p>
                <button 
                    onClick={() => handleAddToCart(book)}
                    className='w-full sm:w-auto mx-auto text-lg bg-primary px-4 py-2 flex items-center justify-center gap-2 rounded-md text-white hover:bg-secondary'>
                    <HiOutlineShoppingCart />
                    <span>Add to Cart</span>
                </button>
            </div>
        </div>
    );
}
