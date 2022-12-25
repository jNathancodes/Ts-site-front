import React from 'react'
import { NavLink } from 'react-router-dom'
import { Product } from '../../../types'


const ProductCard = ({product}:{product:Product}) => {

    const addToWishList = (e:React.MouseEvent) => {
        console.log(`${e.target} "added to wish list"`)
    }

    const addToCompare = () => {
        console.log("added to comapare")
    }

    const addToCart = () => {
        console.log("added to shopping cart")
    }



  return (
<div className="col">
    <div className="card">
        <div className="card-img">
            <img src={product.img} alt={product.name} />
            <div className="card-menu">
                <button onClick={addToWishList} className ="menu-link" ><i className="fa-regular fa-heart"></i></button>
                <button onClick={addToCompare} className ="menu-link" ><i className="fa-regular fa-code-compare"></i></button>
                <button onClick={addToCart} className ="menu-link" ><i className="fa-regular fa-bag-shopping"></i></button>
            </div>
            <NavLink to={`/products/${product._id}`} className="btn-theme btn-card-theme">
                <span className="corner-left"></span>
                <span className="corner-right"></span>
                QUICK VIEW
            </NavLink>
        </div>
        <div className="card-body">
            <p className="card-category">{product.category}</p>
            <h5 className="card-title">{product.name}</h5>
            <p className="card-rating">
            <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </p>
            <p className="card-price">{product.price}</p>
        </div>
    </div>
</div>
  )
}

export default ProductCard