import React from 'react'
import Header from './src/components/Header'
import { Outlet } from 'react-router'
import Footer from './src/components/Footer';
import Slideshow from './src/components/Slideshow';



function MainHeader() {
  return (
    <div>
        <Slideshow/>
        <Outlet/> 
      
     </div>
  )
}

export default MainHeader;
