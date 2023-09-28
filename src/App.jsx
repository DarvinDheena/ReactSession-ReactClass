import React from 'react'
import Note from "./Note.jsx"


function App( props ) {  const { notes } = props
  return (
    <div>
      <select>
        {
       notes.map ((note) => {
        return <Note note = {note} key={note.id} />
       })
      }
      </select>
    </div>
    
  )
}

export default App
