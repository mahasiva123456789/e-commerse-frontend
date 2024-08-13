import React from 'react'
import { useDispatch } from 'react-redux'
import { searchcategory } from '../redux/productSlice';
import './Categoryselect.css'
const Categoryselect = () => {
    const dispatch=useDispatch();
    const handlecatory=(product)=>{
        dispatch(searchcategory(product))
    }
  return (
    <>
    <div className='catagorycontainer'>
   <div className='cathover'onClick={()=>handlecatory('All')}> <h3>Furniture</h3></div>
    <div className='cathover'onClick={()=>handlecatory('sofa')}><h3>Sofas</h3></div>
    <div className='cathover' onClick={()=>handlecatory('bed')}><h3>Beds</h3></div>
    <div className='cathover'onClick={()=>handlecatory('table')}><h3>Tables</h3></div>
    <div className='cathover' onClick={()=>handlecatory('accessorie')}><h3>Decors</h3></div>
    <div className='cathover' onClick={()=>handlecatory('chair')}> <h3>Chairs</h3></div>
    <div className='cathover' onClick={()=>handlecatory('storage')}> <h3>Storage</h3></div>
    <div className='cathover' onClick={()=>handlecatory('lamp')}><h3>Lamps</h3></div>
    <div className='cathover' onClick={()=>handlecatory('accessorie')}> <h3>Accessories</h3></div>
  
    </div>
    </>
  )
}

export default Categoryselect