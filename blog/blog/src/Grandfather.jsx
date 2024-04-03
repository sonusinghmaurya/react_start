import React, { Component } from "react";
import Parent from "./Parent.js";
export default class Grandfather extends Component {
  render() {
    return (
      <h1>
        <Parent title="ct jack sparrow" />
        <h1>{this.props.username}</h1>
      </h1>
    );
  }
}
