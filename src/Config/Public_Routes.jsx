import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function Public_Routes() {
    const user = localStorage.getItem("isloggedin")
    return !user ? <Outlet /> : <Navigate to="/" />
}
