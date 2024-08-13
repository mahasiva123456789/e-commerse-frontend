import React from 'react'
import Productcard from './Components/Productcard'
import Header from './Components/Header'
import Cart from './Components/Cart'
import Productdetails from './Components/Productdetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import SignUp from './Components/SignUp'
import Login from './Components/Login'
// import Catagory from './Components/catagory'
import Categoryselect from './Components/Categoryselect'
import Home from './Components/Home'
const App = () => {
  return (
   <>
   <BrowserRouter>
   <ToastContainer />
   <Header />
   <Categoryselect />
   <Routes>
    <Route path="/" element={<Productcard />} />
    <Route path="/furniture/:furnitureid" element={<Productdetails/>} />
   <Route path='/cart' element={<Cart />} />
   <Route path='/signup' element={<SignUp />} />
   <Route path='/login' element={<Login />} />
   <Route path='/home' element={<Home />} />
  
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App