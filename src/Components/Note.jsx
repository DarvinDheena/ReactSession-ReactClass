import React from 'react'


function Note(props) {
  return (
    <div>
        <li>{ props.note.content }</li>
    </div>
  )
}

export default Note