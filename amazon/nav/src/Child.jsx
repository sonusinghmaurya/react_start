import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.student.name}</h1>
      </div>
    )
  }
}
