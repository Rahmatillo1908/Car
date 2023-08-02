import React from 'react'

function Navbar() {
   return (
      <div>
         <div className='navbar1'>
            <div className="nav">
               <p><i className="fa fa-envelope"></i> info@merasec-benz-uzbekistan.uz</p>
               <p><i className='fa fa-time'></i> dush - Juma 9.00 - 18.00</p>
            </div>
            <div className="bar">
               <i className='fa fa-phone' ></i>
               <i>+998 90 123 45 55</i>
               <i className='fa fa-facebook' ></i>
               <i className='fa fa-telegram' ></i>
               <i className='fa fa-instagram' ></i>
               <i className='bi bi-youtube' ></i>
            </div>
         </div>
         <div className="navbar2">
            <h1>Mercedes-Benz</h1>
            <div className='menu' >
               <button>Menu</button>
               <button>Companiya</button>
               <button>All Cars</button>
               <button>Shop</button>
               <button>News</button>
               <button>Contact</button>
            </div>
         </div>
      </div>
   )
}

export default Navbar