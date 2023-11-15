
import { Link } from 'react-router-dom'
import React,{ useContext } from 'react'
import { ProductContext } from '../Context/ShopContext'
import CartProduct from '../Components/CartProduct'

const Shop = () => {
  const {prd ,cart, } = useContext(ProductContext)
   console.log(cart)
  return (
    <>
    <section className='shop-banner'>
     <h2># 100%</h2> 
     <h1>OFF ON ALL PRODUCTS</h1>
     <p>Make Your Order, We will Deliver</p>
     <button><Link to="/cartProducts">SHOP NOW
     </Link></button>
    </section>
    <>
    <CartProduct/>
    </>
    </>
  )
}

export default Shop