import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super()
    this.state = {
     emp1:{ 
        name: "peter",
        age: "18"
    },
    emp2:{
        name:"parker",
        age:"25"
    }
  }
  }
  render() 
  {
    return (
      <>
        <h1>{this.state.emp1.name}</h1>
        <h1>{this.state.emp2.name}</h1>
      </>
    )
  }
  }
