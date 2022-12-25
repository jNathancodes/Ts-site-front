import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'


const WishlistView = () => {
  if (window && window.top){
    window.top.document.title = 'Wish-List Fixxo.'
  }
  return (
    <>
      <MainMenuSection />
      <FooterSection />
    </>
  )
}

export default WishlistView