import React from 'react'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Signup from '../components/Signup'
import Login from '../components/Login'
import Private_Router from './Private_Router'
import Home from '../Pages/Home'
import Public_Routes from './Public_Routes'
import Product_Details from '../Pages/Product_Details'



const router = createBrowserRouter(

  createRoutesFromElements(
    <Route>
      <Route element={<Private_Router />}>
        <Route path='' element={<Home />} />
        <Route path='productdetails/:id' element={<Product_Details/>}/>
      </Route>
      <Route element={<Public_Routes />}>
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
      </Route>
    </Route>
  )
)

const Router_App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Router_App
