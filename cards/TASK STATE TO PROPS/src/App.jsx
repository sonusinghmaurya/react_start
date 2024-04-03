import React, { Component } from 'react'
import Child from './Child'
export default class App extends Component {
    constructor(){
        super()
        this.state = {
            name:"sonu"

        }
    }
    handleChange=()=>{
        this.setState({name:"ashish"})
    }
  render() {
    return (
      <>
      <Child data={this.state.name}/>
      <button onClick={this.handleChange}>change</button>
      </>
    )
  }
}
