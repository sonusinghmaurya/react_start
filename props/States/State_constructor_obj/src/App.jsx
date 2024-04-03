import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "peter",
      age: "18",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
      </div>
    );
  }
}
