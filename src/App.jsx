import React, { useState } from 'react'

function App() {
    const [ counter , setCounter] = useState(0);

    const handlePlusClick = ()=>{
        setCounter(counter + 1);
    }
    const handleZeroClick = ()=>{
        setCounter(0);
    }
    const handleMinusClick = ()=>{
        if (counter > 0){
            setCounter(counter -1);
        }
    }
  return (
    <div>
        <div>{ counter }</div>
        <button onClick={ handlePlusClick }> Increment </button>
        <button onClick={ handleZeroClick }> Zero </button>
        <button onClick={ handleMinusClick }> Increment </button>
    </div>
  )
}

export default App