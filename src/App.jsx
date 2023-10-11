import React from 'react'
import ChildComponent from './Components/ChildComponent'

function App() {
  const message =  'Helo Child'

  return (
    <div>
      <h1>Props Drilling</h1>
      <ChildComponent message = { message }/>
    </div>
  )
}

export default App