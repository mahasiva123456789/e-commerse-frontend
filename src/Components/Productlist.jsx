import React from 'react';
import './Productlist.css';
import { useDispatch } from 'react-redux';
import { increment } from '../redux/createSlice';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const Productlist = (props) => {
  const count=useSelector((state)=>state.cart.cartitems)
  const incart=count.some(furniture=>furniture.id===props.furniture.id)


    console.log('=>', props);
    const furniture = props.furniture
    const dispatch=useDispatch();
    
    const handlecart = () => {
      dispatch(increment(props.furniture));
      toast.success("Product added Successfully") ;
    }


  return (
   
    <>
      <div className='productlistcon'>
        <div className='productlist'>
          <div className='product'>
          <Link to={"/furniture/"+props.furniture.id}><img src={furniture.image} alt={furniture.title} /></Link>
          </div>
          <h3>{furniture.title}</h3><p></p>
          <h2><del>₹{furniture.mrp}</del></h2>
          <h2>₹{furniture.price}</h2>
          <h4>{furniture.offerPercentage}% OFF</h4>
          <span>Category: {furniture.category}</span>
           <div className='buttons'>
           <Link to={"/furniture/"+props.furniture.id}><button className='buybtn'>Buy</button></Link>
            {incart?(
            <Link to="/cart"><button className='cartbtn' >Go to cart</button></Link>
            ):(
              <button className='cartbtn' onClick={handlecart}>Add to cart</button>
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Productlist;
