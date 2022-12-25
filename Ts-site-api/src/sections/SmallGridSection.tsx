import React from 'react'
import ProductCard from '../assets/scss/components/ProductCard'
import { Product } from '../types'

const SmallGridSection = ({ products}:{products:Product[]}) => {
  return (
<section className="small-product-grid small-product-grid2 product-grid">
        <div className="smallcontainer">
        <div className="row row-cols-2 row-cols-md-2">
            {
            products.map(product => <ProductCard key={product.id} product={product} />)
            }
        </div>
    </div>
</section>
  )
}

export default SmallGridSection