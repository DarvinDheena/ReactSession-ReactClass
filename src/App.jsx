import React, { useState } from 'react'

function Change ({nameChange}){
    const name = "darvin"
    return (
        <div>
            <p></p>
            <button onClick={()=>nameChange(name)}>ChangeName</button>
        </div>
    )
}

function App() {
    const [state , setState] = useState('');

    function nameChange (value){
        setState(value);
    }


  return (
    <div>
        <p>nameChange:{ state}</p>
        <Change nameChange = { nameChange}/>
    </div>
  )
}

export default App