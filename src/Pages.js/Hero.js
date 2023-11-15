import React from 'react'
import icon1 from '../Assets/logo5.jpeg'
import icon2 from '../Assets/background1.jpeg'
import icon3 from '../Assets/background2.jpeg'
import icon4 from '../Assets/bg3.jpeg'
import icon5 from '../Assets/logo5.jpeg'

const Hero = () => {
  return (
    <>
    <section className='hero'>
            <div className='hero-details'>
             <div className='card'> 
                <img src={icon1} alt=""/>
                <p>Fast Order</p>
             </div>
             <div className='card'> 
                <img src={icon2} alt=""/>
                <p>Quick Shipping</p>
             </div>
             <div className='card'> 
                <img src={icon3} alt=""/>
                <p>High Services</p>
             </div>
             <div className='card'> 
                <img src={icon4} alt=""/>
                <p>24/7 Support</p>
             </div>
            </div>
            <div className='hero-d'>
               
            </div>
    </section>
    </>
  )
}

export default Hero