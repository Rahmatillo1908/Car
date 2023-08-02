import React from 'react'
import { useState } from 'react'

function Carusel() {
   const array = [
      {
         img: "https://images.unsplash.com/photo-1614288532696-203f89dc0db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
         name: "A Class"
      },
      {
         img: "https://images.unsplash.com/photo-1614288532696-203f89dc0db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
         name: "A Class"
      },
      {
         img: "https://images.unsplash.com/photo-1614288532696-203f89dc0db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
         name: "B Class"
      },
      {
         img: "https://images.unsplash.com/photo-1614288532696-203f89dc0db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
         name: "B Class"
      },
      {
         img: "https://images.unsplash.com/photo-1614288532696-203f89dc0db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
         name: "C Class"
      },
      {
         img: "https://images.unsplash.com/photo-1614288532696-203f89dc0db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
         name: "C Class"
      },
      {
         img: "https://images.unsplash.com/photo-1614288532696-203f89dc0db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
         name: "D Class"
      },
      {
         img: "https://images.unsplash.com/photo-1614288532696-203f89dc0db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
         name: "D Class"
      },
      {
         img: "https://images.unsplash.com/photo-1614288532696-203f89dc0db4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcG5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
         name: "A Class"
      },
   ]
   const [Class, setClass] = useState(array)
   const filters = (category) => {
      if (category === "all") {
         setClass(array)
         return
      }
      const newitem = array.filter((menu) => menu.name === category)
      setClass(newitem)
   }
   return (
      <div className='bg'>
         <div className="bgs">
            <button onClick={() => filters("all")} className="">All</button>
            <button onClick={() => filters("A Class")} className="">A Class</button>
            <button onClick={() => filters("B Class")} className="">B Class</button>
            <button onClick={() => filters("C Class")} className="">C Class</button>
            <button onClick={() => filters("D Class")} className="">D Class</button>
         </div>
         <div className="carusel">
            {Class.map(item =>
               <div className="divCarusel">
                  <img src={item.img} alt="" />
                  <div className="hover"></div>
                  <i className='bi bi-star' ></i>
                  <i className='bi bi-star' ></i>
                  <i className='bi bi-star' ></i>
                  <i className='bi bi-star' ></i>
                  <h3>{item.name}</h3>
                  <p>Mercades-Benz</p>
               </div>
            )}
         </div>
      </div>
   )
}

export default Carusel