import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import getBaseUrl from '../../../utils/baseUrl';

const baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseUrl()}/api/orders`,

    prepareHeaders: (Headers) =>{
        const token = localStorage.getItem('token');
    if(token){
        Headers.set('Authorization', `Bearer ${token}`)
    }
    return Headers;
}
}) 
const ordersapi = createApi({
    reducerPath: 'ordersapi',
    baseQuery,
    tagTypes: ['Orders'], 
    endpoints: (builder) => ({
        createOrders:(builder.mutation)({
            query: (newOrder)=>({
                url: "/",
                method: "POST", 
                body: newOrder,
            })
        }),
        orderEmail: (builder.query) ({
            query: (email)=> ({
                url: `/email/${email}`
            }),
            providesTags: ['Orders']
        })

    })
})
export const {useCreateOrdersMutation, useOrderEmailQuery} = ordersapi
export default ordersapi;