import React from 'react'
import bg1 from '../Assets/logo5.jpeg'
import Hero from './Hero'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../Components/product'
import FeaturedProducts from '../Components/FeaturedProducts'
import NewArrivals from './NewArrivals'
import im1 from '../Assets/banner9.jpeg'
import im2 from '../Assets/wb5.jpeg'
import { Customers } from '../Components/Customers'
import Blogs from '../Components/Blogs'

const Home =()=> {
  return (
    <>
      <section className='banner'>
      <div className='banner-details'>
       <h1>Super Value Deals</h1>
       <h3>On all products</h3>
       <p>See all the products</p>
       <button><Link to="/cartProducts">Go To Shop</Link></button>
      </div>
      </section>
    <Hero/>
    <section className='featured-products'>
      <div className='wording'>
      <h2>Featured Products</h2>
       <p>All Weather New Modern Designs</p>
      </div>
      <div className='card-prd'>
      <FeaturedProducts/>  
      </div>
    </section>
    <section className='repair-section'>
      <div className='repair'>
        <p>Repair Services</p>
        <h2>On 70% Off On All Products And Accessorries</h2>
        <button>Explore Now</button>
      </div>
    </section>
    <section className='new-arrivals'>
    <div className='new-arrivals'>
      <h1>New Arrivals</h1>
      <p>Your Best Designer Outfits</p>
      </div>
      <NewArrivals/>
    </section>
    <section className='learn-more'>
      <div className='learn-itmes'>
        <img src={im2} alt=""/>
        <div className='learn-details'>
          <h1>Hot Deals</h1>
          <h2>Buy one Get One FREE</h2>
          <span>The latest Best Collection In Our Closet</span>
          <span>Feel Cute With Our Outfits</span>
         <button>Learn More</button>
        </div>
      </div>
      <div className='learn-itmes'>
      <img src={im1} alt=""/>
      <div className='learn-details'>
          <h1>Seasonal-in</h1>
          <h2>All Weather Attire</h2>
          <span>It Never Matters Wich Season It Is</span>
          <span>We Go You Covered</span>
         <button>Learn More</button>
        </div>
      </div>
    </section>
    <section className='blogs'>
      <div className='blogs-details'>
        <h2>What Our Customers Say ......</h2>
        <h1>Our Customers Never Miss A Bit On Providing Feedbacks</h1>
        </div>
        <div className='blogs-blogs'>
         <Blogs/>
        </div>
    </section>
    </>
  )
}

export default Home