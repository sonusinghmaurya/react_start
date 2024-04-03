import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div id="menu">
        <ul>
        <li><Link to={"/"}>HOME</Link></li>
        <li><Link to={"/about"}>ABOUT</Link></li>
        <li><Link to={"/services"}>SERVICES</Link></li>
        <li><Link to={"/register"}>REGISTER</Link></li>
        <li><Link to={"/login"}>LOGIN</Link></li>
        </ul>
    </div>
  )
}

export default Menu