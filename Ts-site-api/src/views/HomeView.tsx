import React, { useState, useEffect, FunctionComponent } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import SaleUp from '../sections/SaleUp'
import Banners from '../sections/Banners'
import FlashSaleSection from '../sections/FlashSaleSection'
import FlashSaleSection2 from '../sections/FlashSaleSection2'
import InfoBottomSection from '../sections/InfoBottomSection'
import { Product } from '../types'



const HomeView: FunctionComponent<{products:Product[]}> = ({products}) => {

  useEffect(() => {
    if (window) {
      window.document.title = 'Fixxo.'
    }
  }, [])

  return (
    <>
      <SaleUp />
      <ProductGridSection title="Featured Products" products={products.slice(0,8)} />
      <Banners />
      <FlashSaleSection products={products.slice(8,12)} />
      <FlashSaleSection2 products={products.slice(12,16)}/>
      <InfoBottomSection />
    </>
  )
}

export default HomeView