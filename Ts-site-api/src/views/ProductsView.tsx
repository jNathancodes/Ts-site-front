import React,{Dispatch,SetStateAction} from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import { Product } from '../types'
import AddNewProduct from '../sections/AddNewProduct'

const ProductsView = ({products,setProducts}:{products:Product[], setProducts:Dispatch<SetStateAction<Product[]>>}) => {
  if (window && window.top){
    window.top.document.title = 'Products Fixxo.'
  }
  return (
    <>
      <ProductGridSection title="All Products" products={products} />
      <AddNewProduct addProduct={product => setProducts([...products,product])} />
    </>
  )
}

export default ProductsView
