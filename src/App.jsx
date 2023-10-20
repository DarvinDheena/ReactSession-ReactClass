import React, { useReducer } from 'react'

const initialState = {
  isActive : false,
}

function reducer(state,action){
  switch(action.type){
    case 'toggle':return { isActive: !state.isActive }
    case 'toactive' : return { isActive : true }
    case 'toinactive' : return { isActive : false }
  }
}

function App() {
  const [state , dispatch] = useReducer( reducer,initialState);
  return (
    <div>
      <h1>toggle Button</h1>
      <p>Activate profile : { state.isActive ? 'yes' : ' no'  }</p>
      <button onClick={ ()=> dispatch({type:'toggle'})}>toggle profile</button>
      <button onClick={()=>dispatch({type : 'toactive'})}>toactive</button>
      <button onClick={()=>dispatch({type : 'toinactive'})}>toinactive</button>
    </div>
  )
}

export default App