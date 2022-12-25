import React, {FunctionComponent} from 'react'
import { NavLink } from 'react-router-dom'

type Props = {
  quantity?: string;
  link: string;
  icon: string;
}

const MenuIcon: FunctionComponent<Props> = ({ link, icon, quantity }: Props) => {
  return (
    <NavLink className="menu-icon" to={link} end>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{quantity}</span>
        <i className={icon}></i>
    </NavLink>
  )
}

export default MenuIcon