import React from 'react'
import {useAuth} from '../context/AuthContext'
import {Navigate} from 'react-router-dom'
export default function Privateroute({children}) {
    const {currentUser, loading} = useAuth()
    if (loading){
        return <div>Loading...</div>
    }
    if (currentUser){
        return children
    }

    return <Navigate to="/login" replace/>
}
