import React from 'react';
import Productlist from './Productlist';
import './Productcard.css'
import Catagory from './catagory';
import { useSelector } from 'react-redux';
const Productcard = () => {
  const furnitures=useSelector((state)=>state.search.furniture)
  if(furnitures=='')
    return <div> <h3>product not found</h3></div>

  return (
    <>
     <Catagory />
    <div className='furniturecon'>
      {furnitures.map(furniture => (
        <Productlist key={furniture.id} furniture={furniture} />
      ))}
      </div>
    </>
  );
}

export default Productcard;
