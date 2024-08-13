import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './Cart.css'
import { useDispatch } from 'react-redux'
import { add, minus,remove } from '../redux/createSlice'

const Cart = () => {
    const cartitem = useSelector((state) => state.cart.cartitems)
    const dispatch = useDispatch();
    const addevent=(furniture)=>{
      dispatch(add(furniture))
    }
    const minusevent=(furniture)=>{
      dispatch(minus(furniture))
    }

    const removevent=(furniture)=>{
        dispatch(remove(furniture))
      }


    const[total,setotal]=useState(0);
    const[mrp,setmrp]=useState(0);
    const[discount,setdiscount]=useState(0);
  
    useEffect(()=>{
     let total=0;
     cartitem.forEach((furniture) => {
     total +=furniture.price*furniture.quantity;
     })
     setotal(total);
    },[cartitem])

    useEffect(()=>{
      let mrp=0;
      cartitem.forEach((furniture) => {
      mrp +=furniture.mrp
      })
      setmrp(mrp);
     },[cartitem])

     useEffect(()=>{
      let discount=0;
      cartitem.forEach((furniture) => {
      discount +=furniture.offerPercentage
      })
      setdiscount(discount);
     },[cartitem])

     
    if (cartitem.length === 0) {
        return(
        <div className='noitem'>
         <img src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png" alt="" />
        </div>
      
        )
    }

    return (
        <>
            <div className='cartcontainer'>

                <div className='cartleftcon'>
                    {cartitem.map((furniture) => (
                        <div className='cartleftpr' key={furniture.id}>
                            <img src={furniture.image} alt={furniture.title} />
                            <div>
                                <h3>{furniture.title}</h3>
                                <div className='controls'>
                                    <button className='btnplus'onClick={()=> addevent(furniture)}>+</button>
                                    <button className='btnqun' >{furniture.quantity}</button>
                                    <button className='btnplus' onClick={()=> minusevent(furniture)}>-</button>
                                    <p>Price: Rs <del>{furniture.mrp}</del> {furniture.price} <span> ({furniture.offerPercentage}% OFFER)</span></p>
                                    <button onClick={()=> removevent(furniture)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='cartright-wrapper'>
                <div className='cartrightcon'>
                <div style={{ color: 'black', fontWeight: 'bold' ,fontSize:'1.8em'}}>Price Details</div>
                    <div><span>MRP:</span> <span>{mrp}</span></div>
                    <div><span>Discount:</span> <span>{discount}%</span></div>
                    <div className="total"><span>Total Payable:</span> <span>{total.toFixed(0)}</span></div>
                    <div><button>Place Order</button></div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Cart
