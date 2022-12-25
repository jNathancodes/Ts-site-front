import { useState } from "react";
import ProductCard from "../assets/scss/components/ProductCard";
import { NavLink } from "react-router-dom";
import img5 from "./../assets/icons/flash.webp";
import SmallGridSection from "./SmallGridSection";
import {Product} from '../types'

function Flashsale({products}:{products:Product[]}) {
  

  return (
    <section className="flashsale">
      
      <div className="flash-left">
        <img className="img5" src={img5} alt="" />
        <div className="flash-text">
          <h1>2 FOR USD $29</h1>
        </div>
        <NavLink to={`/products/`} className="btn-white">
          <span className="corner-w-left"></span>
          <span className="corner-w-right"></span>
          FLASH SALE
        </NavLink>
      </div>
      <div className="flash-right">
        <SmallGridSection products={products} />
      </div>
    </section>
  );
}

export default Flashsale;
