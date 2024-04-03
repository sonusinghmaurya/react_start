import React, { Component } from 'react'

export default class Child extends Component {
    
  render() {
    console.log(this);
    return (
      <div>
        <h1>{this.props.student.name}</h1>
        <h1>{this.props.student.age}</h1>
        {this.props.student.age ?<h1>true</h1>: <h1>false</h1>}
      </div>
    )
  }
}
