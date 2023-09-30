import React, { useState } from 'react'

function Display(props){
    let {counter}=props;
    return(
        <div>{ counter }</div>

    )
}

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
        <Display counter={counter}/>
        <button onClick={ handlePlusClick }> Increment </button>
        <button onClick={ handleZeroClick }> Zero </button>
        <button onClick={ handleMinusClick }> Decrement </button>
    </div>
  )
}

export default App