import React, { Component } from 'react'
import Child2 from './Child2'

export default class Parent2 extends Component {
  render() {
    return (
        <>
      <Child2 email="sonu@gmail.com"/>
      <h1>{this.props.title}</h1>
      </>
    )
  }
}
