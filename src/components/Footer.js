import React from 'react'
import './Footer.css';


import footer_logo from './assets/logo.png';
import whatsapp_logo from './assets/wtzapp.gif';
import instergram_logo from './assets/inster.gif';
import facebook_logo from './assets/fb.gif';
import Twitter_logo from './assets/twitter.gif';
import Tiktok_logo from './assets/tiktok.gif';

export const Footer = () => {
  return (
    <div className='footer'> 
        <div className='footer-logo'>
          <div className='footer-logo'>
            <img src={footer_logo} alt=''/>
            <p>The Fashion Store</p>
          </div>   
          <ul className='footer-links'>
            <li>About US</li>
            <li>Products</li>
            <li>Branches</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='footer-social-icon'>

          <div className='footer-icons-container'>
            <div className='footer-icons-container'>
                <img src= {whatsapp_logo} alt=''/>
            </div>
            <div className='footer-icons-container'>
                <img src= {facebook_logo} alt=''/>
            </div>
            <div className='footer-icons-container'>
                <img src= {instergram_logo} alt=''/>
            </div>
            <div className='footer-icons-container'>
                <img src= {Tiktok_logo} alt=''/>
            </div>
            <div className='footer-icons-container'>
                <img src= {Twitter_logo} alt=''/>
            </div>
           </div>
          <div className='footer-copyright'>
            <hr/>
            <p>Copyright @2024 Beluga D&S</p>
          </div>
        </div>

    </div>
  )
}
