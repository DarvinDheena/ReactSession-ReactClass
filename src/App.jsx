import React, { Component } from 'react'

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            count :0,
        }
    }
increment = ()=>{
    this.setState((prevState) => ({
        count : prevState.count + 1,
    }))
}
decrement = () => {
if ( this.state.count > 0) {
    this.setState((prevState) => ({
        count :prevState.count - 1, 
    }))
}
}

reset = () => {
    this.setState((prevState) => ({
        count :0 ,
    })) 
}

  render() {
    return (
      <div>
        <p>count : { this.state.count}</p>
        <button onClick={ this.increment}>Increment</button>
        <button onClick={ this.decrement}>Decrement</button>
        <button onClick={ this.reset}>Reset</button>
      </div>
    )
  }
}
