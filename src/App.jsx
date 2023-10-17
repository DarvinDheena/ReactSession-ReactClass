import React from 'react'
import { useRef } from 'react'

function App() {

  const inputRef = useRef(null);
  const handleBtnClick = ()=>{
    inputRef.current.focus();
  }
  return (
    <div>
      <input 
        type='text'
        ref={inputRef}
      />
      <button onClick={handleBtnClick}>Focus Input</button>

    </div>
  )
}

export default App