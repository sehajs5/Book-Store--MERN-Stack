import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../../utils/baseUrl'
const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/books`,
    credentials: 'include',
    prepareHeaders: (Headers) =>{
        const token = localStorage.getItem('token');
    if(token){
        Headers.set('Authorization', `Bearer ${token}`)
    }
    return Headers;
}
})
const booksapi = createApi({
    reducerPath: 'booksapi',
    baseQuery,
    tagTypes: ['Books'], 
    endpoints: (builder) => ({
        fetchAllBooks: builder.query({
            query: ()=> "/",
            providesTags: ["Books"]
        }),
        fetchBookById: builder.query({
            query: (id) => `/${id}`,
            providesTags: (results, error, id) => [{type: "Books", id}],
        }),
        addBook: builder.mutation({
            query: (newBook) => ({
                url: `/create-book`,
                method: "POST",
                body: newBook
            }),
            invalidatesTags: ["Books"]
            //without invalidatesTags, we will have to refresh our browser to add the data
        }),
        updateBook: builder.mutation({
            query: ({id, ...rest})=>({
                url: `/edit/${id}`,
                method: "PUT",
                body: rest,
                headers: {
                    'Content-Type': 'application/json' 
                }
            }),
            invalidatesTags: ["Books"]
        }),
        deleteBook: builder.mutation({
            query: (id)=> ({
                url: `/${id}`,
                method: "DELETE",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            }),
            invalidatesTags: ["Books"]
        })

    })
})
export const {useFetchAllBooksQuery, useFetchBookByIdQuery, useAddBookMutation, useUpdateBookMutation, useDeleteBookMutation} = booksapi
export default booksapi;