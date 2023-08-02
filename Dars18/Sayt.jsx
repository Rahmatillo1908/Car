import React from 'react'
import Cards from './Cards'
import Home from './Home'
import Navbar from './Navbar'
import Position from "./Position";
import Carusel from "./Carusel";
import "./Style.css"
import Galery from './Galery';
function Sayt() {
   return (
      <div>
         <Navbar />
         <Home />
         <Cards />
         <Position />
         <Carusel />
         <Galery/>
      </div>
   )
}

export default Sayt