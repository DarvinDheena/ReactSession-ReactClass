import React, { useEffect, useState } from 'react'

function App(props) {

  const padding ={
    padding :  10 , 
  }

  const [ notes,setNotes] = useState( props.notes);
  const [ showStatus, setShowStatus] = useState('all')
  
  const handleStatusChange = (event)=>{
    setShowStatus(event.target.value)
  }

  const filterdNotes = (notes,showStatus)=>{
    switch (showStatus){
      case  'all' : return notes 
      case 'imp' : return notes.filter(note => note.important=== true)
      case 'non-imp' : return notes.filter(note=>note.important === false)
     }
  }

  const notesFiltered = filterdNotes(notes,showStatus);
  console.log(notesFiltered);
  return (
    <div>
      <h1>Notes</h1>
      <label style={ padding }>
        <input 
          type='radio' 
          name='filter' 
          onChange={ handleStatusChange}
          value= 'all'
          checked={showStatus==='all'}
        /> 
      Show All
      </label >
      <label style={ padding }>
        <input 
          type='radio' 
          name='filter'
          onChange={ handleStatusChange}
          value='imp'
          checked= { showStatus === 'imp'}
        /> 
      Important
      </label>
      <label style={ padding }>
        <input 
          type='radio' 
          name='filter'
          onChange={ handleStatusChange}
          value = 'non-imp'
          checked= { showStatus === 'non-imp'}
        /> All
      Non-important
      </label>
      


      <ul>
        {
          notesFiltered.map(note=>
          <li key={ note.id }>
            { note.content }
            {/* { note.important ? 'yes':'no'} */}
          </li>)
        }
      </ul>
    </div>
  )
}

export default App