import React from 'react'
import { PRODUCTS } from '../Components/product'

const NewArrivals = () => {
  return (
    <>
      <div className='f-products-new'>
        {PRODUCTS.slice(4,8).map((prd)=>{
        return <div className='prd-new' key={prd.id}>
              <img src={prd.image}/>
              <h1>{prd.brand}</h1>
              <p>{prd.description}</p>
              <span>${prd.price}</span>
              
        
               
        </div>
      })}  
        </div>
    </>
  )
}

export default NewArrivals