import React, { Component } from "react";
import Navbar from "../../public/COMPONENT/Navbar";
import "./global.css";
import About from "../../public/COM_ABOUT/About";
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <About/>
      </div>
    );
  }
}
