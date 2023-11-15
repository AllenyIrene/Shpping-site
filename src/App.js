import React from 'react';
import './index.css';
import Layout from './Components/Layout';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Home from './Pages.js/Home';
import Shop from './Pages.js/Shop';
import Blog from './Pages.js/Blog';
import About from './Pages.js/About';
import Content from './Pages.js/Content';
import Login from './Pages.js/Login';
import ShopContext from './Context/ShopContext';
import CartProduct from './Components/CartProduct';
import Cart2 from './Pages.js/Cart2';


function App() {
  return (
    <div className="App">
      <ShopContext>
      <Router  basename="/Shpping-site." >
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index exact element={<Home/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='content' element={<Content/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='cartProducts' element ={<CartProduct/>}/>
          <Route path='cart2' element ={<Cart2/>}/>
          </Route>
        </Routes>
      </Router>
      </ShopContext>
    </div>
  );
}

export default App;
