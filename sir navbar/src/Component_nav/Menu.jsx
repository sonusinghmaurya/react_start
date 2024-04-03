import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
  render() {
    return (
      <div id='menu'>
        <ul>
            <li className='blue'><Link to={"/home"}>HOME</Link></li>
            <li><Link to={"/about"}>ABOUT</Link></li>
            <li>PORTFOLIO</li>
            <li>SERVICES</li>
            <li>TEAM</li>
            <li>BLOG</li>
            <li>CONTACT</li>
        </ul>
      </div>
    )
  }
}
