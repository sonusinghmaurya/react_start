import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div id='menu'>
        <ul>
            <li className='blue'>HOME</li>
            <li>ABOUT</li>
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
