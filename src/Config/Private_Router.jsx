import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Login from '../components/Login'

const Private_Router = () => {
  const user = localStorage.getItem("isloggedin")
  return (
    user ? <Outlet /> : <Navigate to="/Login" />
  )
}

export default Private_Router
