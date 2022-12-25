import React from 'react'
import img3 from './../assets/icons/show-left.jpg'
import img2 from './../assets/icons/right-show.jpg'
import { NavLink } from 'react-router-dom'


function Imagess() {
  return (

    <section className="showcase">
        <div className="img-left">
            <img src={img3} alt=""/>
        </div>
        <div className="showcase-body">
            <h1>Sale Up </h1>
            <h1>To 50% Off</h1>
            <p>Online shopping free hom delivery over $100</p>
            <NavLink to={`/products/`} className="btn-theme">
                <span className="corner-left"></span>
                <span className="corner-right"></span>
                SHOP NOW
            </NavLink>
        </div>
        <div className="img-right">
            <img src={img2} alt=""/>
        </div>
    </section>


  )
}


export default Imagess;