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

function App( props ) {  
  const { notes } = props ;
  function addNote(event){
    event.preventDefault();
    console.log('button Clicked')
    // console.log(event.target.elements.note.value);
  }

  return (
    <div>
      <select>
        {
       notes.map ((note) => {
        return <Note note = {note} key={note.id} />
       })
      }
      </select>
      <form>
        <input name='note' />
        <button onClick={addNote}>Get Details</button>
      </form>
      
    </div>
    
  )
}

export default App
