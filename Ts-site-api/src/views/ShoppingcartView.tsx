import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'


const ShoppingcartView = () => {
  if (window && window.top){
    window.top.document.title = 'Cart Fixxo.'
  }
  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  )
}

export default ShoppingcartView
