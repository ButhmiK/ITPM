import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';


import Cart from './pages/Cart';
import Ratings from './pages/Ratings';
import Wishlist from './pages/Wishlist';
import Home from './pages/Home';
import { Footer } from './components/Footer';


function App() {
  return (
    <>
    <div>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Ratings' element={<Ratings/>}/>
      <Route path='/Wishlist' element={<Wishlist/>}/>

    
      </Routes>
      <Footer/>
      </BrowserRouter>
      
      </div>
    </>

  
  );
}

export default App;
