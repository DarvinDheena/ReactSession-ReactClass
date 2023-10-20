import React, { useReducer, useState } from 'react'
import { initialState, reducer } from './Components/countReducer'

function App() {

  const [ state,dispatch] = useReducer(reducer,initialState);

  return (
    <div>
      <p>Count : { state.count }</p>
      {/* <button onClick={ ()=> setCount(count + 1)}>Increase</button>
      <button onClick={ ()=> setCount(count - 1)}>Decrease</button>
      <button onClick={ ()=> setCount(0)}>Reset</button> */}
      <button onClick={()=>dispatch ({ type : 'increment'} ) }>increment</button>
      <button  onClick={ ()=> dispatch ( {type:'decrement'})}>decrement</button>
      <button onClick={ ()=>dispatch ( { type: 'reset'})}>reset</button>

    </div>
  )
}

export default App