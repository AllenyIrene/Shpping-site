import img1 from '../Assets/st1.jpeg'
import img2 from '../Assets/st2.jpeg'
import img3 from '../Assets/st3.jpeg'
import img4 from '../Assets/st6.jpeg'
import img5 from '../Assets/pr1.jpeg'
import img6 from '../Assets/pr2.jpeg'
import img7 from '../Assets/banner8.jpeg'
import img8 from '../Assets/maleprd.jpeg'
import dress1 from '../Assets/dress/d1.jpeg'
import dress2 from '../Assets/dress/d2.jpeg'
import dress3 from '../Assets/dress/d3.jpeg'
import dress4 from '../Assets/dress/d4.jpeg'
import dress5 from '../Assets/dress/d5.jpeg'
import dress6 from '../Assets/dress/d6.jpeg'
import dress7 from '../Assets/dress/d8.jpeg'
import dress8 from '../Assets/dress/d9.jpeg'
import dress9 from '../Assets/dress/d10.jpeg'



export const PRODUCTS = [
    {
        id:1,
        image: img1,
        description: "Flowered Summer Shirt",
        price: 222,
        brand: "NIKE",
        instock: "in stock",
        sales: "20% Off",
        qty: 1,
        remaining: Math.floor(Math.random()*100),
        cartItems: 0,

    },
    {
        id:2,
        image: img2,
        description: "Pattenr Floral Shirt",
        price: 450,
        brand: "ADIDAS",
        instock: "in stock",
        sales: "10% Off",
        qty: 1,
        cartItems: 0,
        remaining: Math.floor(Math.random()*100)
    },
    {
        id:3,
        image: img3,
        description: "Flowered Summer Shirt",
        price: 600,
        brand: "LEVE'S",
        instock: "in stock",
        sales: "40% Off",
        qty: 1,
        cartItems: 0,
        remaining: Math.floor(Math.random()*100)

    },
    {
        id:4,
        image: img4,
        description: "Blue floral shirt",
        price: 500,
        brand:"UNDER AMOUR",
        instock: "in stock",
        sales: "50% Off",
        qty: 1,
        cartItems: 0,
        remaining: Math.floor(Math.random()*100)

    },
    {
        id:5,
        image: img5,
        description: "Classic Unisex Denim",
        price: 39.50,
        brand: "PUMA",
        instock: "in stock",
        qty: 1,
        cartItems: 0,
        remaining: Math.floor(Math.random()*100)
     

    },
    {
        id:6,
        image: img6,
        description: "Denim Jackets",
        price: 29.50,
        brand: "Ralp Lauren",
        instock: "in stock",
        qty: 1,
        cartItems: 0,
        remaining: Math.floor(Math.random()*100)
    },
    {
        id:7,
        image: img7,
        description: "Full Female Work Fit",
        price: 60,
        brand: "H&M",
        qty: 1,
        cartItems: 0,
        remaining: Math.floor(Math.random()*100)

    },
    {
        id:8,
        image: img8,
        description: "NEW MALE MORDERN FASHION",
        price: 80,
        brand:"Calvin Klein",
        qty: 1,
        cartItems: 0,
        remaining: Math.floor(Math.random()*100)
    },
    {
        id:9,
        image: dress1,
        description: "New Classic Dresses",
        price: 100,
        brand:"H%M",
        ratings: Math.floor(Math.random()*10),
        qty: 1,
        cartItems: 0,
        remaining: Math.floor(Math.random()*40)
    },
    {
        id:10,
        image: dress2,
        description: "Yellow Max Sun-Dress",
        price: 200,
        brand:"FOREVER 21",
        ratings: Math.floor(Math.random()*10),
        qty: 1,
        cartItems: 0,
        remaining: Math.floor(Math.random()*10)
    },
    {
        id:11,
        image: dress3,
        description: "Short Blue Floral Dress",
        price: 300,
        brand:"SKIMS",
        ratings: Math.floor(Math.random()*10),
        qty: 1,
        cartItems: 0,
        remaining: Math.floor(Math.random()*100)
    },
    {
        id:12,
        image: dress4,
        description: "Short Blue Floral Dress",
        price: 300,
        brand:"SKIMS",
        ratings: Math.floor(Math.random()*10),
        qty: 1,
        cartItems: 0,
        remaining: Math.floor(Math.random()*400)
    },
    {
        id:13,
        image: dress5,
        description: "Short Blue-Red-Black Flora-Dresses",
        price: 900,
        brand:"SKIMS",
        ratings: Math.floor(Math.random()*10),
        qty: 1,
        cartItems: 0,
        remaining: Math.floor(Math.random()*200)

    },
    {
        id:14,
        image: dress6,
        description: "Short Red Floral Dress",
        price: 300,
        brand:"SKIMS",
        ratings: Math.floor(Math.random()*10),
        qty: 1,
        cartItems: 0,
        remaining: Math.floor(Math.random()*50)
    },
    {
        id:15,
        image: dress7,
        description: "Short Floral Dress",
        price: 300,
        brand:"SKIMS",
        ratings: Math.floor(Math.random()*10),
        qty: 1,
        cartItems: 0,
        remaining: Math.floor(Math.random()*150)
    },
    {
        id:16,
        image: dress8,
        description: "Long Floral Dress",
        price: 500,
        brand:"SKIMS",
        ratings: Math.floor(Math.random()*10),
        qty: 1,
        cartItems: 0,
        remaining: Math.floor(Math.random()*10)
    },
    {
        id:17,
        image: dress9,
        description: "Long Red Floral Dress",
        price: 800,
        brand:"Skims",
        ratings: Math.floor(Math.random()*10),
        qty: 1,
        cartItems: 0,
        remaining: Math.floor(Math.random()*80)
    },
]