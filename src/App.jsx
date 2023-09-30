import React, { useState } from 'react'

function App() {
    let  [counter , setCounter] = useState(0);
    setTimeout(
        ()=>{setCounter(counter+1)},
        1000
    )
    return (
    <div>
        <p>{counter }</p>
    </div>
  )
}

export default App