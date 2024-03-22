import React from 'react'
import './Wishlist.css';


export default function Wishlist() {
  return (
    <div>Wishlist

      <ul className='wish-bar'>
        <li>Product</li>
        <li>Description</li>
        <li>Price</li>
        <li>Availability</li>

        <button>Remove</button> <br/>
        <button>Add to cart</button><br/>
        <button>Buy Now</button><br/>
      </ul>

    </div>

    
  )
}
