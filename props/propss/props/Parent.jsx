import React, { Component } from 'react'
import Child from './Child.jsx'
export default class Parent extends Component {
  render() {
    return (
      <div>
        <Child student={{name:"sonu",age:"25",married:true}}/>
      </div>
    )
  }
}
