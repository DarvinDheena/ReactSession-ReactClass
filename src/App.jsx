import React from 'react'

function App( props ) {
  console.log(props)
  const { notes } = props
  return (
    <div>
      <p> {notes[0].content }</p>
      <ul>
        {
       notes.map ((note) => {
        return <li key={note.id}>{ note.content}</li>
       })
      }
      </ul>
    </div>
    
  )
}

export default App
