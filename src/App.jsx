import React, { useState } from 'react'

function App() {
    const [ counter , setCounter] = useState(0);

    const handleClick = ()=>{
        setCounter(counter + 1);
    }
  return (
    <div>
        <div>{ counter }</div>
        <button onClick={ handleClick }> Increment </button>
    </div>
  )
}

export default App