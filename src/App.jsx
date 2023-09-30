import React from 'react'

function App(props) {
    console.log(props);
    let { counter } = props
    return (
    <div>
        <p>{counter }</p>
    </div>
  )
}

export default App