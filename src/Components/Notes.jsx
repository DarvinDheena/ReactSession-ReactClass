import React from 'react'
import { useParams } from 'react-router-dom'

function Notes({ notes }) {

    let id = useParams().id;
    console.log(id);

    let note = notes.find(note=> note.id === Number (id) );

  return (
    <div>
        <h1>{ note.content}</h1>
    </div>
  )
}

export default Notes