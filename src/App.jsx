import React from 'react'

function App( props ) {
  console.log(props)
  const { notes } = props
  return (
    <div>
      <p> {notes[0].content }</p>
      <ul>
        <li> {
        notes[0].content }</li>
        <li>{ notes[1].content }</li>
        <li>{ notes[2].content }</li>
        <li> { notes[3].content}</li>
        <li>{ notes[4].content }</li>

      </ul>
    </div>
    
  )
}

export default App
