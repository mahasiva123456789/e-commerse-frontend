import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FURNITURE } from '../Furniture';
import './Productdetails.css';


const Productdetails = () => {

    const { furnitureid } = useParams();
   const product=FURNITURE.find((p)=>p.id==parseInt(furnitureid))
    return (
     <div className='productcon'>

        <div className='productimgcon'>
          <div className='productmainimg'>
              <img src={product.image} alt="" />
          </div>
          <div className='productsubimg'>
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
        </div>

          <div className="products">
                <h2 className='product-title'>{product.title}</h2>
                <p className='product-description'>{product.description}</p>
                <p className='product-price'>RS: {product.price}&nbsp; <span><del>₹{product.mrp}</del></span></p>
                <p className='productoffer'>&nbsp;&nbsp; OFFER! {product.offerPercentage}%</p>
                <div className='product-rating'>
                <br />
                  <span>Rating: {product.rating.rate} / 5</span>
                  <span> ({product.rating.count} reviews)</span>
                  <h3 className='emiquotes'>Inclusive of all taxes</h3>
                  <h3 className='emiquotes'>EMI starts at ₹690. No Cost EMI available</h3>
                </div>

                <div className='freedel'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiiWJmkFPS8b-j0elO7G8CI3UKRIY31ibqlQ&s" alt="" />
                <p><br /><br />FREE DELIVERY <br /> <br />Fulfilled by Simply Woods and Prime Eligible Items</p>
                </div>

                <div className='coupencon'>
                <img src="https://www.woodenstreet.com/images/offer/productcoupon.jpg?v=1301" alt="" />
                </div>
                <div className='freedelivery'>
                  <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" alt="" />
                  <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" alt="" />
                  <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png" alt="" />
                  <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png" alt="" />
                </div> 
                
                <div className='specialoffer'>
                  <h3>Available offers</h3>
                  <p>📦<span>Special Price </span>Get extra ₹234 off (price inclusive of cashback/coupon)</p>
                  <p>📦<span>Bank Offer </span>Get 10% off upto ₹50 on first Flipkart UPI transaction on order of ₹250</p>
                  <p>📦<span>Bank Offer </span>5% Cashback on Flipkart Axis Bank Card</p>
                  <p>📦<span>Bank Offer </span>Get 10% off upto ₹50 on first Order</p>
                </div>
               
                <div>
                  <br />
    <h3 className='productoveriew'><p>Product Overview</p></h3>
    <div className="product-overview">
        <div className="overview-card">
            <h4>Brand</h4>
            <p>{product.brand}</p>
        </div>
        <div className="overview-card">
            <h4>Colour</h4>
            <p>{product.colour}</p>
        </div>
        <div className="overview-card">
            <h4>Material</h4>
            <p>{product.material}</p>
        </div>
        <div className="overview-card">
            <h4>Product Dimensions</h4>
            <p>{product.productDimensions}</p>
        </div>
        <div className="overview-card">
            <h4>Size</h4>
            <p>{product.size}</p>
        </div>
        <div className="overview-card">
            <h4>Back Style</h4>
            <p>{product.backStyle}</p>
        </div>
        <div className="overview-card">
            <h4>Special Feature</h4>
            <p>{product.specialFeature}</p>
        </div>
        <div className="overview-card">
            <h4>Product Care Instructions</h4>
            <p>{product.productCareInstructions}</p>
        </div>
        <div className="overview-card">
            <h4>Net Quantity</h4>
            <p>{product.netQuantity}</p>
        </div>
        <div className="overview-card">
            <h4>Seat Material Type</h4>
            <p>{product.seatMaterialType}</p>
        </div>
    </div>
</div>



             </div>
             </div>
    
        
    );
};

export default Productdetails;