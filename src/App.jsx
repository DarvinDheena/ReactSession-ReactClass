import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import CreateNote from './Components/CreateNote';
import Notes from './Components/Notes';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';

function App() {

  // define states
  const [notes, setNotes] = useState([]);
  const [showStatus, setShowStatus] = useState('all');

  // states for adding new note form
  const [newNoteContent, setNewNoteContent] = useState('');
  const [newNoteImportant, setNewNoteImportant] = useState('');
 

  const newNoteContentRef = useRef(null);
  const fetchNotes = async ()=>{
    try {
      const response = await axios.get('http://localhost:3000/notes')
      setNotes(response.data)
    }
    catch(error){
      console.log(error);
    } 
  }
  const addNote = (event) => {
    event.preventDefault();
    // create a new note object
    let noteObject = {
      content: newNoteContent,
      important: newNoteImportant === 'true',
    }
    axios .post('http://localhost:3000/notes',noteObject)
          .then(response =>{
              console.log('new note added')
          })
    // clear the inputs
    setNewNoteContent('');
    setNewNoteImportant('');

    newNoteContentRef.current.focus();
    fetchNotes();
  }
  
  useEffect(()=>{
   fetchNotes();
  },[]);

  const handleStatusChange = (event) => {
    // console.log(event.target.value);
    setShowStatus(event.target.value);
  }

  const padding = {
    paddingRight : 10 ,
  }
  return (
    <Router>
      <div>
        <Link to="/" style={padding}>DashBoard</Link>  
        <Link to="/readnote" style={padding}>Read Notes</Link>
        <Link to="/createnote" style={padding}>Create Note</Link>
      </div> 
      <Routes>
         <Route path='/' element={<Dashboard />} />
         <Route path='/readnote' element={ <Notes showStatus={ showStatus } handleStatusChange={ handleStatusChange } notes={ notes }/>} />
         <Route path='/createnote' element={<CreateNote newNoteContent={ newNoteContent } newNoteImportant={ newNoteImportant } newNoteContentRef={ newNoteContentRef } setNewNoteContent={ setNewNoteContent } setNewNoteImportant={ setNewNoteImportant } addNote={ addNote } />} />
      </Routes>  
    </Router>
  )
}

export default App