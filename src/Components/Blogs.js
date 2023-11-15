import React from 'react'
import { Link } from 'react-router-dom'
import { Customers } from './Customers'

const Blogs = () => {
  return (
    <>
   
    <div className='customer'>
    {Customers.map((cus)=>{
      return  <div className='customer-details'>
          <img src={cus.image}/>
          <p>Some Quick example Text To Build On The Card<br></br>
          Title and Make Up The Bulk Of The Car Contet
          </p> 
          <button><Link>Learn More</Link></button>
        </div>
    })}
    </div>
    </>
  )
}

export default Blogs