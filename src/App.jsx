import React, { Component } from 'react'
 
class Hello extends Component {
    render(){
        const { name } = this.props
        const { age } = this.props
        console.log(this.props)

        return(
            <p>Hello { name },i am { age}</p>
        )
        
    }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <p>Hello Guest</p>
        <Hello name='darvin' age='25'/>
      </div>
    )
  }
}
