import React from 'react'

function Note (props){
  console.log(props)
  if (props.note.important){
    return(
      <option >{props.note.content} STAR</option>
    )
  }
  return(
    <option >{props.note.content}</option>
  )
  
}

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
