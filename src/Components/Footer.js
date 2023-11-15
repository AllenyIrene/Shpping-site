import React from 'react'
import { Link } from 'react-router-dom'
import {FaTwitter} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {FaFacebook} from 'react-icons/fa'
import {GrYoutube} from 'react-icons/gr'
import {FaAppStoreIos} from 'react-icons/fa'
import {GrApple} from 'react-icons/gr'

function Footer() {
  return (
    <>
    <footer className='upper-footer'>
        <div className='footer-contact'>
         <h1>Contact Us</h1>
         <hr className='line'></hr>
         <p><h3>Address:</h3><b>Dar Es Salaam, Mbezi Beach</b></p>
        <p><h3>Phone:</h3> <Link>Call us: 0766363542</Link></p>
        <p><h3>Hours:</h3> <span>From 8 am To 6 p.m</span></p>  
        <div className='social-icons'>
         <h3>Follow Us At:</h3>
         <div className='s-icons'>
         <Link><FaTwitter size="2rem"/></Link>
         <Link><FaFacebook size="2rem"/></Link>
         <Link><GrInstagram size="2rem"/></Link>
         <Link><GrYoutube size="2rem"/></Link>
         </div>
        </div>
        </div>
        <div className='footer-contact'>
        <h1 >About</h1>
        <hr className='line'></hr>
        <div className='footer-content'>
          <Link>About</Link>
          <Link>Delivery</Link>
          <Link>Privacy Policy</Link>
          <Link>Terms & Conditions</Link>
          <Link>Free Policy</Link>
        </div>
        </div>
        <div className='footer-contact'>
        <h1>Account</h1>
        <hr  className='line'></hr>
        <div className='footer-content'>
          <Link>Profile</Link>
          <Link>View Cart</Link>
          <Link>Help</Link>
          <Link>Payments</Link>
          <Link>My WishList</Link>
          <Link>Coupons</Link>
        </div>
        </div>
        <div className='footer-contact'>
        <h1>Install App</h1>
        <hr  className='line'></hr>
        <div className='footer-content'>
          <div className='btn'>
          <p>Available On Google Play Store & App Store</p>
          <div className='btn-btn'>
          <button><Link><FaAppStoreIos/></Link><span>Google Play</span></button>
         <button><Link><GrApple/></Link><span>App Store</span></button>
          </div>
         </div>
         <div className='payment'>
         <p>Payment Methods</p>
         <button></button>
         </div>
        </div>
        </div>
    </footer>
    <footer className='footer-bottom'>
    <hr className='line'></hr>
      <div className='f-b-contents'>
      <div className='bottom-1'>
       <Link>@ Developed By ALLEN Web Developers 2023</Link>
      </div>
      <div className='bottom-2'>
       <Link>Privacy Policy</Link>
       <Link>Terms of Use</Link>
       <Link>Contact Me</Link>
     </div>
      </div>
    </footer>
    </>
  )
}

export default Footer