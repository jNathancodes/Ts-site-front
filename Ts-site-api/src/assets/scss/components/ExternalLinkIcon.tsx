import React from 'react'

type linkprop = {
  link: string,
  icon: string
}

const ExternalLinkIcon = ({link, icon}:linkprop) => {
  return (
    <a href={link} target="_blank"> 
      <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIcon