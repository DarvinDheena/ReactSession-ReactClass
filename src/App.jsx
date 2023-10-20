import React, { useReducer } from 'react'

const initialState = {
  isActive : false,
}

function reducer(state,action){
  switch(action.type){
    case 'toggle':return { isActive: !state.isActive }
  }
}

function App() {
  const [state , dispatch] = useReducer( reducer,initialState);
  return (
    <div>
      <h1>toggle Button</h1>
      <p>Activate profile : { state.isActive ? 'yes' : ' no'  }</p>
      <button onClick={ ()=> dispatch({type:'toggle'})}>toggle profile</button>
    </div>
  )
}

export default App