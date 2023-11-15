import React, { createContext,useReducer, useState } from 'react'
import { PRODUCTS } from '../Components/product'

export const ProductContext = createContext()
const ShopContext = ({children}) => {
/* USING REDUCER HOOK
    const initialState = {
        products:PRODUCTS,
        cart:[],
        totalPrice:0,
        totalQuantity: 0
      
    }
       
    
    const reducer = (state, action) =>{
    switch(action.type){
        case "ADD-TO-CART" :
            return {...state,cart:[...state.cart,action.payload]}
        case "DELETE" : 
        return {...state,cart:state.cart.filter((item)=>item.id !== action.payload)}
        case "REMOVE FROM CART" : 
        return state = {cart:[]}
        case "ADD-QUANTITY" :
       const item = state.cart.map((items)=> {
        if(items.id === action.payload.id && items.qty >=1) {
            return {...items, qty:items.qty + 1,}
        }
         else {
            return items
         }
       })
      
       return {...state, cart: item}

       case "DECREMENT-QUANTITY" :
       const item2 = state.cart.map((items)=>{
        if(items.id === action.payload.id && items.qty >= 1){
            return{...items, qty:items.qty -1}
        }
        else if (items.id === action.payload.id && items.qty < 1){
           return {items: []}
        }
        else {
            return items
        }
       })
     
       return {...state, cart:item2, }

        default : return state
    }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
*/

    // USING USESTATE HOOK
    const newproduct = PRODUCTS

    const [newCart, setNewCart] = useState([])
    const [search,setSearch] = useState("")
    const [prd, setPrd] = useState(PRODUCTS)
    const [input,setInput] = useState("")
    const [count, setcount] = useState(0)
    const [color, setColor] = useState("lightseagreen")
 
    
    // ADDING TO CART FUNCTION
    const addToCart = (prod) =>{
        const shopProduct = prd.find((item)=> item.id === prod.id)
        const ProductExists = newCart.find((item)=> item.id === prod.id)
        // CHECKING IF THE ITEM EXISTS IN THE CART
        if(ProductExists){

       // CHANGING THE QUANTITY OF THE ITEM FROM THE SHOP PAGE ON THE ADD BUTTON AS YOU ADD THE ITEM
            const item = prd.map((items)=> {
                if(items.id === prod.id) {
                   return {...items, cartItems:items.cartItems + 1}
                }
                 else {
                    return items
                 }
               })
               setPrd(item)
              
// CHANGING THE QUANTITY OF THE ITEM FROM THE CART PAGE ON THE ADD BUTTON AS YOU ADD THE ITEM
            let newprd = newCart.map((item)=>item.id === prod.id ? 
               {...ProductExists, qty: ProductExists.qty +1}: 
                item )
            setNewCart(newprd)
         
           
        }
        // ELSE IF IT DOES NOT EXIST, 
        else {
            setNewCart([...newCart,{...prod, qty:1}])

            //SET THE QUANTITY OF THE CART ITEM TO ONE AS YOU ARE ADDING THE ITEM.
            const item = prd.map((items)=> {
                if(items.id === prod.id) {
                   return {...items, cartItems:items.cartItems = 1}
                }
                 else {
                    return items
                 }
               })
               setPrd(item)
        }
        
    }

// REMOVING FROM CART FUNCTION
   const removeProduct = (prod) =>{
    const ProductExists = newCart.find((item)=> item.id === prod.id)

    // CHANGING THE QUANTITY OF THE ITEM FROM THE CART PAGE ON THE ADD BUTTON AS YOU ADD THE ITEM
    if(ProductExists.qty === 1){
     const newprd = newCart.filter((item)=> item.id !== prod.id)
     setNewCart(newprd)

      // CHANGING THE QUANTITY OF THE ITEM FROM THE SHOP PAGE ON THE ADD BUTTON AS YOU ADD THE ITEM
     const item = prd.map((items)=> {
        if(items.id === prod.id) {
           return {...items, cartItems:items.cartItems = 0}
        }
         else {
            return items
         }
       })
       setPrd(item)
  
    }

    else {
    const prdnew = newCart.map((item)=>item.id === prod.id ? 
    {...ProductExists,qty:ProductExists.qty -1} : item
    )
    setNewCart(prdnew)
   
  // CHANGING THE QUANTITY OF THE ITEM FROM THE SHOP PAGE ON THE ADD BUTTON AS YOU ADD THE ITEM
    const item = prd.map((items)=> {
        if(items.id === prod.id) {
           return {...items, cartItems:items.cartItems -1}
        }
         else {
            return items
         }
       })
       setPrd(item)

    }
   }

// FUNCTION TO CLEAR THE CART
const ClearCart = () =>{
    setNewCart([])
    // clearing the value of the items on the add to cart box
    const filtered = prd.filter((itms)=>{
        return {...itms, cartItems:itms.cartItems = 0}
    })
  setPrd(filtered)
}

   // FUNCTION TO GET THE NUMBER OF ITEMS IN THE CART
   const getTotal = () =>{
    const TotalQuantity = newCart.reduce((total,item)=>{
        return total + item.qty
    },0)
       return TotalQuantity
    }

  


  const filterShop = (e) =>{
    e.preventDefault()
    const newShop = newCart.filter((cart)=>{
        if(search === ""){
            return cart
        }
    else {
        return cart.description.toLowerCase().includes(search)
    }
    }
    )
    setNewCart(newShop) 
}

const filterShopItems = (e) =>{
    e.preventDefault()
    const newShop = prd.filter((cart)=>{
        if(input === ""){
            return cart
        }
    else {
        return cart.description.toLowerCase().includes(input)
    }
    } 
    )
    setPrd(newShop) 
}
   const [selectedProduct, setSelectedProduct] = useState(null)

const viewProductDetails = (productid) =>{
    setSelectedProduct(productid)
}


    

    const providerValues = {color,ClearCart,viewProductDetails ,input,setInput,filterShopItems ,filterShop,search,setSearch,getTotal,removeProduct,addToCart,prd,newCart,setNewCart}
  return (
   <ProductContext.Provider value={providerValues}>
     {children}
   </ProductContext.Provider>
  )
}

export default ShopContext