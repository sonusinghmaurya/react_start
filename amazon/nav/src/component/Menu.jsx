import React from 'react'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <div id='menu'>
        <ul>
            <li ><Link to={"/"}>home</Link></li>
            <li><Link to={"/about"}>about</Link></li>
            <li>services</li>
            <li>sign up</li>
            <li>register</li>
        </ul>
    </div>
  )
}

export default Menu