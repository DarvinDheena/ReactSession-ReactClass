import React from 'react'
import { Link } from 'react-router-dom';

function Note({ notes }) {
  console.log(notes);
  return (
    <div>
        <h1>Note App</h1>
        <div>
          <ul>
            {
              notes.map(note=>{
                return <li key={note.id}> <Link to={ `/note/${note.id}`}> {note.content } </Link></li>
              })
            }
          </ul>
        </div>
    </div>
  )
}

export default Note