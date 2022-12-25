import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'


const NotFoundView = () => {
  if (window && window.top){
    window.top.document.title = '404 Fixxo.'
  }
  return (
    <>
        <MainMenuSection />
        <div className="container d-flex justify-content-center align-items-center" style= { { height: "500px" } }>
          <h1>404 - Page Not Found. Try again later.</h1>
   
        </div>
        <div style={{ position: "fixed", bottom : "0"}}>
        <FooterSection />
        </div>


    </>
  )
}

export default NotFoundView
