import React, { Component } from 'react'
import json from "./users.json"
import Child from "./Child.jsx"

export default class Parent extends Component {
  render() {
    return (
        <Child data={json}/>
    )
  }
}
