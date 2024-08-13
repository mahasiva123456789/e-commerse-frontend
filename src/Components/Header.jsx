import React, { useState } from 'react'
import './Header.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { searchProduct } from '../redux/productSlice'


const Header = () => {
  const dispatch=useDispatch();
  const[search,setsearch]=useState('');
  const count=useSelector((state)=>state.cart.cartitems)
  
  const handlesearchinput=(e)=>{
    setsearch(e.target.value);
  }
  const handlesearch=()=>{
    dispatch(searchProduct(search));
  }

  return (
    <> 
     <div className='headercon'>
       <h1 className='logo'>Logo</h1>
       
       <div className='headeright'>
       <input type="text" placeholder='search' className='searchbar' value={search} onChange={handlesearchinput}/>
       <button className='searchbtn' onClick={handlesearch}>search</button>
          <Link to='/'><h1>Products</h1></Link>
          <h1>About</h1>
          <Link to='cart'><h1>Cart: <span className='ordercount'>{count.length}</span></h1></Link>
       </div>
     </div>
    </>
   
  )
}

export default Header