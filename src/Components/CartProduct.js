import React, { useContext, useState } from 'react'
import { ProductContext } from '../Context/ShopContext'
import { PRODUCTS } from './product'
import {FaSearch} from "react-icons/fa"

const CartProduct = () => {


const {color, changeColor,setColor,viewProductDetails ,filterShopItems,input,setInput,prd,setNewCart,newCart,addToCart} = useContext(ProductContext)

const inputHandler = (e) =>{
  var lowerCase = e.target.value.toLowerCase()
  setInput(lowerCase)
}


  

  return (
    <>
      <section className='search-bar'>

            <form className='form' onSubmit={filterShopItems}>
             <label>All  <input type="text" value={input} placeholder='Search Products'
              onChange={inputHandler}/></label>  
                <button><FaSearch size="1rem"/></button>
            </form>
            
        </section>

    <section className='new-prd'>
        {prd.map((item)=>{
            return <div className='new-prd-items'>
                <h3>{item.description}</h3>
                <img src={item.image}/>
                <h4>${item.price}</h4>
                <h4>{item.brand}</h4>
                <button onClick={()=>viewProductDetails}>
                View Product
                  </button>
                <button onClick={()=>addToCart(item)} style={{background:color}}>
                   
                  Add To Cart
                  {item.cartItems >0 ? `(${item.cartItems})`: ""} 
                 
                  </button>
            </div>
        })}
    </section>
    <section className='pagination'>
      <div className='pagination-container'>
      <nav>
        <ul>
        <li><a href='#'><span>&laquo;</span></a></li>
          <li><a href='#'>1</a></li>
          <li><a href='#'>2</a></li>
          <li><a href='#'>3</a></li>
          <li><a href='#'>4</a></li>
          <li><a href='#'>5</a></li>
          <li><a href='#'><span>&raquo;</span></a></li>
        </ul>
      </nav>
      </div>
    </section>
    </>
  )
}

export default CartProduct