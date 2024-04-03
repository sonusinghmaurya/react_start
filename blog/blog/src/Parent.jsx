import React, { Component } from 'react'
import Child from './Child.jsx'

export default class Parent extends Component {
  render() {
    return (
        <>
      <Child email="sonu@gmail.com"/>
      <h1>{this.props.title}</h1>
      </>
    )
  }
}
