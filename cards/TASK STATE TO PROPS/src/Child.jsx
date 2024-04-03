import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <>
      <h1>{this.props.data}</h1>
      </>
    )
  }
}
