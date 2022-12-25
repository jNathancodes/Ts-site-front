import React from 'react'
import { NavLink } from 'react-router-dom'
import img3 from './../assets/icons/pam1.jpg'
import img2 from './../assets/icons/pam2.jpg'

function Banners() {
  return (
    <section className="Banners container">
        <div className="img-p1">
            <img className="p1" src={img3} alt=""/>
            <h1>Pamela Reif's </h1>
            <h1>Top Picks</h1>
            <NavLink to={`/products/`} className="btn-theme">
                <span className="corner-left"></span>
                <span className="corner-right"></span>
                SHOP NOW
            </NavLink> 
        </div>
           

        <div className="img-p2">
            <img className="p2"src={img2} alt=""/>
            <h1>Let's Be </h1>
            <h1>Conscious</h1>
            <NavLink to={`/products/`} className="btn-white">
                <span className="corner-w-left"></span>
                <span className="corner-w-right"></span>
                FLASH SALE
            </NavLink>
        </div>

    </section>
  )
}

export default Banners;