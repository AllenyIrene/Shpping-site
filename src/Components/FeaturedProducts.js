import React from 'react'
import { PRODUCTS } from './product'

const FeaturedProducts = () => {
  return (
    <>
        <div className='f-products'>
        {PRODUCTS.slice(0,4).map((prd)=>{
        return <div className='prd' key={prd.id}>
              <img src={prd.image}/>
              <h1>{prd.brand}</h1>
              <p>{prd.description}</p>
              <span>${prd.price}</span>
              <hr></hr>
              <div className='prd-items'>
              <p>{prd.instock}</p> 
              <span>{prd.sales}</span> 
              </div> 
               
        </div>
      })}  
        </div>
       
    </>
  )
}

export default FeaturedProducts