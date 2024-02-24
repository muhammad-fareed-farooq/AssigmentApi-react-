import React from 'react'
import "./App.css"
import Router_App from './Config/Router_App'
import Signup from './components/Signup'
import Navbarr from './Pages/Navbar'
// import Footer from './Pages/Footer'

export default function App() {
  return (
    <div>
      {/* <Navbarr/> */}
      <Router_App/>
      {/* <Footer/> */}
      {/* <Signup/> */}
    </div>
  )
}
