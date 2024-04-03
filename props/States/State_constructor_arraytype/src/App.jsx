import React, { Component } from 'react'

export default class App extends Component {
    constructor(){
        super()
        this.state = {
            emp1:["sonu",25,"sonu@gmail.com"],
            emp2:["singh",26,"singh@gmail.com"]
        }
    }
  render() {
    return (
        <>
        {this.state.emp1.map((x)=>{
            return (
                <h1>{x}</h1>
            )
        }) }
        <h1>{this.state.emp2.map((x)=>{
            return(
                <h1>{x}</h1>
            )
        })}</h1>
        </>
    )
  }
}
