import React from 'react'
import ExternalLinkIcon from '../assets/scss/components/ExternalLinkIcon'

const FooterSection = () => {
  return (
    <footer>
        <div className="socialmedia">
          <ExternalLinkIcon link="https://omni.se" icon="fa-brands fa-facebook-f" /> 
          <ExternalLinkIcon link="https://omni.se" icon="fa-brands fa-instagram" /> 
          <ExternalLinkIcon link="https://omni.se" icon="fa-brands fa-twitter" /> 
          <ExternalLinkIcon link="https://omni.se" icon="fa-brands fa-google" /> 
          <ExternalLinkIcon link="https://omni.se" icon="fa-brands fa-linkedin" /> 
        </div>
        <div>© 2022 Fixxo. All Rights Reserved.</div>
    </footer>
  )
}

export default FooterSection