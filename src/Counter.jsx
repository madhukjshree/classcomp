import React, { Component } from 'react'

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {count: 0}
  }
  render() {
    return (
      <div style={{margin: "20px"}}>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => {
            this.setState((prevState) => ({count: prevState.count + 1}))
        }}>Increment</button>
        <button onClick={() => {
            this.setState((prevState) => ({count: prevState.count - 1}))
        }}>Decrement</button>
      </div>
    )
  }
}