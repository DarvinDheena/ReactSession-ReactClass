import React from 'react'
import Home from './Components/Home'
import Note from './Components/Note'
import User from './Components/User'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Notes from './Components/Notes'

function App({ notes }) {
  const padding = {
    padding : 5 ,
  }
  return (
       <Router>
        <h1>Use Params</h1>
        <div>
          <Link to='/' style={padding}>Home</Link>
          <Link to='/notes' style={padding}> Note</Link>
          <Link to='/users' style={padding}>User</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notes' element={<Note notes={ notes }/>} />
          <Route path='/users' element={<User />} />
          <Route  path ='/note/:id' element={ <Notes notes={ notes }/>} />
        </Routes>
       </Router>
  )
}

export default App