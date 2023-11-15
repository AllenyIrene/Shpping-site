import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../Context/ShopContext'

const Cart2 = () => {
    const {getTotal,newCart, ClearCart ,setNewCart,addToCart,removeProduct } = useContext(ProductContext)
    console.log(newCart)

    const getPrice = () =>{
        const TotalPrice = newCart.reduce((total, item)=>{
            return total + (item.qty * item.price)
    },0)
   return TotalPrice
 }



    

 /*
    const removeFromCart = (id) =>{
        const cart = newCart.filter((item)=>
        {
            return item !== id
        })
        
        setNewCart([...cart],id)
    }
  
   const increaseQuantity = (id) =>{
        const items = newCart.map((item)=>{
            if(item.id === id) {
                return {...item, qty:item.qty +1}
            }
            else
            {
                return item
            }
        })
        setNewCart([...items])
    }
   
    const decrementItem = (id)=>{
        const items = newCart.map((item)=>{
            if(item.id === id && item.qty>=1) {
                return {...item, qty:item.qty -1}
            }
            else
            {
                return item
            }
        })
        setNewCart([...items])
    }
    */

  return (
    <>
  <h1>CART</h1>
    <section className='upp-section'>
    
    <section className='new-prd-cart'>
      {newCart.map((item)=>{
           return <div className='new-prd-cart-items'>
            <div > <img src={item.image}/></div>
            <div> <h3>{item.description}</h3>
           <h4>Price: $ {item.price * item.qty}</h4>
           <h4>Brand:{item.brand}</h4></div>
           <div> <h4>{item.qty} (items)</h4></div>
          <div className='new-prd-items-btn'><button onClick={()=>addToCart(item)}>+</button>
           <button onClick={()=>removeProduct (item)}>Remove From Cart</button>
           </div>
           
       </div>

      })}

    </section>
    <section className='upp-section-section2-banner'>
     <div className='upper-section-items'>
     <h2>{getTotal()} Items in The Cart</h2>
    <h3>TOTALPRICE:{getPrice()}</h3>
    <div>{newCart.length >= 1 ?<button onClick={ClearCart}>Clear Cart</button> : "" }
    </div>
    <button><Link to="/cartProducts">Back To shopping</Link> </button> 
    </div>
    </section>
    </section>
    </>
  )
}

export default Cart2