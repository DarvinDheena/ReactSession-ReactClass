import React, { useState } from 'react'
import Note from './Components/Note';
function App(props) {

  const [notes,setNotes] = useState(props.notes);
  const [newNote,setNewNote] = useState('');

  function addNote(event){
    event.preventdefault();
    console.log(newNote)
    const noteObject = {
      id : notes.length +1 ,
      content : newNote,
      important : true 
    }
    setNotes(notes.concat(noteObject));
    console.log(notes);
    setNewNote('');
  };

  const handleNoteChange = (event)=>{
    setNewNote(event.target.value);
    console.log(newNote)
  }

  return (
    <div>
      <h1>Basic FORM </h1>
      <div>
        <ul>
            {
                notes.map (note=>
                  <Note key={note.id} note={ note }/>
                )
            }
        </ul>
      </div>
      <form onSubmit={addNote}>
        <input 
        value ={ newNote }
        placeholder='add New note...'
        onChange={handleNoteChange}
        
        />
        <button type='submit'>Save</button>
      </form>

    </div>
  )
}

export default App