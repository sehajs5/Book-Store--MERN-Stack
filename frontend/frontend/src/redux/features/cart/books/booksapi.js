import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../../utils/baseUrl'
const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/`,
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
    baseQuery: baseQuery,
    tagTypes: ['Books'], 
    endpoints: (builder) => ({
        fetchAllBooks: builder.query({
            query: ()=> "books",
            providesTags: ["Books"]
        })
    })
})
export const {useFetchAllBooksQuery} = booksapi
export default booksapi;