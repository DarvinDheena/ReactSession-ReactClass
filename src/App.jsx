import React from 'react'
import Home from './Components/Home'
import Note from './Components/Note'
import User from './Components/User'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
function App() {
  const padding = {
    padding : 5 ,
  }
  return (
       <Router>
        <div>
          <Link to='/' style={padding}>Home</Link>
          <Link to='/notes' style={padding}> Note</Link>
          <Link to='/users' style={padding}>User</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notes' element={<Note />} />
          <Route path='/users' element={<User />} />
        </Routes>
       </Router>
  )
}

export default App