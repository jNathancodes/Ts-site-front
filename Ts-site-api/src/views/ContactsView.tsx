import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import MapSection from '../sections/MapSection'
import ContactFormSection from '../sections/ContactFormSection'

const ContactsView = () => {
  if (window && window.top) {
  window.top.document.title = 'Contacts Fixxo.'
 } 
  return (
    <>
      <MainMenuSection transparent/>
      <BreadcrumbSection currentPage="Contacts"/>
      <MapSection />
      <ContactFormSection />
    </>
  )
}

export default ContactsView