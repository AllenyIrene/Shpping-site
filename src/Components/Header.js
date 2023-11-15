import React, { useContext } from 'react'
import {FiPhoneCall} from "react-icons/fi"
import {AiTwotoneMail} from "react-icons/ai"
import { Link } from 'react-router-dom'
import logo from '../Assets/logo2.jpeg'
import {FaSearch} from 'react-icons/fa'
import {BiSolidBox} from "react-icons/bi"
import {VscAccount} from "react-icons/vsc"
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { ProductContext } from '../Context/ShopContext'

function Header() {
    const {filterShopItems,getTotal,cart,totalQuantity,search,filterShop,setSearch,newCart,setNewCart} = useContext(ProductContext)


    const inputHandler = (e) =>{

        var lowerCase = e.target.value.toLowerCase()
         setSearch(lowerCase)
    }
  return (
    <div className='header-main'>
    <header className='container'>
        <div className='row'>
            <h1>BE WILD BY ALLEN</h1>
            <a href='tel: 0766363542'>CALL US: 0766363542</a>
           <div className='icons'>
            <Link><FiPhoneCall size="3rem"/></Link>
           <Link><AiTwotoneMail size="3rem"/></Link>
            </div> 
        </div>
    </header>
    <header className='container-2'>
        <div className='logo'>
     <Link to="/"> <img src={logo} alt=""/></Link> 
        </div>
        <div className='search-bar'>
            <form className='form' onSubmit={filterShop}>
             <label>All  <input type="text" value={search} placeholder='Search Products'
              onChange={inputHandler}/></label>  
                <button><FaSearch size="1rem"/></button>
            </form>
        </div>
        <div className='nav'>
            <Link to="/">HOME</Link>
            <Link to="/shop">SHOP</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/blog">BLOG</Link>
            <Link to="/content">CONTENT</Link>
        </div>
        <div className='col-3'>
       <Link><BiSolidBox/></Link>
       <Link to="login" ><VscAccount size="2.5rem"/></Link>
       <Link to="cart2" ><p>{getTotal()}</p><AiOutlineShoppingCart size="2.5rem" color='blue'/></Link>
        </div>
    </header>
    </div>
  )
}

export default Header