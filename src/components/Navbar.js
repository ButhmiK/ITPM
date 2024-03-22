import React, { useState } from 'react';
import './Navbar.css';


import logo from './assets/logo.png'
import cart_icon from './assets/cart icon.png';
import wishlist_icon from './assets/wishlist.png';
import profile_icon from './assets/profile.png';
import { Link } from 'react-router-dom';

export default function Navbar() {

      const [menu,setMenu]=useState("shop now");
   
      return (
    <div>

      
        <div className="navbar">
          <div className='nav-logo'>
            <img src={logo} alt=''/>
              <p>Fashion</p>
          </div>
          <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}>Women{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mirror")}}>Mirror{menu==="mirror"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("echat")}}>e-Chat{menu==="echat"?<hr/>:<></>}</li>
          </ul>
          
          <div className='nav-login-cart'>
           <Link to='./'><button>Login</button></Link>
              <Link to='./Wishlist'><img className='wishlistlogo' src={wishlist_icon} alt=''/></Link>
              <div className='nav-wishlist-count'>0</div>
              <Link to='./Cart'><img className='cartlogo'src={cart_icon} alt=''/></Link>
                <div className='nav-cart-count'>0</div>
                <img className='profilelogo' src={profile_icon} alt=''/>

             <div class="search-container">
                <form action="/action_page.php">
                  <input type="text" placeholder="Search.." name="search"/>
                    <button type="submit">Submit</button>
                </form>
              </div>
  
          </div>
          
      

        </div>
  






    </div>
  )
}
