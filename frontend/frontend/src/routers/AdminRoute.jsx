import React from 'react'
import { Outlet } from 'react-router-dom';
import { Navigate  } from 'react-router-dom';
export default function AdminRoute({children}) {
    const token = localStorage.getItem('token');

    if (!token){
         return <Navigate to= '/admin'/>
    }
    return children? children: <Outlet/>
}
