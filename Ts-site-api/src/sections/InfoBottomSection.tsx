import React, { useState } from 'react'
import MenuIcon from '../assets/scss/components/MenuIcon'




const InfoBottomSection = () => {
  return (
    <section className="info-section container">


        <div className=" customer-s">
            <div className="menu-icons">
                <MenuIcon link="/contacts" icon="fa-regular fa-headset" /> 
            </div>
            <h6>Customer Support</h6>
            <p>Village did removed enjoyed</p>
            <p>explain talking.</p>
        </div>
        <div className="customer-s">
        <div className="menu-icons">
                <MenuIcon link="/404" icon="fa-regular fa-credit-card" /> 
            </div>
            <h6>Secured Payment</h6>
            <p>Village did removed enjoyed</p>
            <p>explain talking.</p>
        </div>
        <div className="customer-s">
        <div className="menu-icons">
                <MenuIcon link="/404" icon="fa-regular fa-truck" /> 
            </div>
            <h6>Free Home Delivery</h6>
            <p>Village did removed enjoyed</p>
            <p>explain talking.</p>
        </div>
        <div className="customer-s">
        <div className="menu-icons">
                <MenuIcon link="/404" icon="fa-regular fa-truck" /> 
            </div>
            <h6>30 Day Reuters</h6>
            <p>Village did removed enjoyed</p>
            <p>explain talking.</p>
        </div>

    </section>

  )
}

export default InfoBottomSection