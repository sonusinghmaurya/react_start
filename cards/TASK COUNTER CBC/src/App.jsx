import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
    // handleIncrement=() => {
    //     this.setState({count:this.state.count+1})
    // }
      handleIncrement() {
      this.setState({count:this.state.count+1})
    }
    handleDecrement=() => {
        this.setState({count:this.state.count-1})
    }

    // function handleDecrement(){
    //   this.setState({count:this.state.count-1})
    // }
    handleReset=() => {
        this.setState({count:0})
    }
  render() {
    return (
      <>
        <h1>class based counter application</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}>++++</button>
        <button onClick={this.handleReset}>reset</button>
        <button onClick={this.handleDecrement}>----</button>
      </>
    )
  }
}
