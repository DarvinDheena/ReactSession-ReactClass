import React, { useEffect, useState } from 'react'

function App() {

    const [state,setState] = useState(0);
    useEffect(()=>{
        document.title = `count : ${state}`
    },[state])

    function Increment(){
        setState(state+1);
        
    }

  return (
    <div>
        <p>count :{state} </p>
        <button onClick={ Increment }>Increment</button>
    </div>
  )
}

export default App