import React from 'react'
let Hello = ({name})=>{
    return (
        <p>HEllo Sathis{ name }</p>
    )
}
function App() {
  return (
    <div>
        <Hello name ="sathis"/>
    </div>
  )
}

export default App