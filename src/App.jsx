import React, { createContext, useState } from 'react'
import ChildComponent from './Components/ChildComponent'

const MessageContext = createContext();


function App() {

  const [message,setMessage] = useState('hello from App');

  return (
    <div>
      <h1>Props Drilling</h1>
      <MessageContext.Provider value={[message,setMessage]}>
        <ChildComponent />
      </MessageContext.Provider>
    </div>
  )
}

export { App as default , MessageContext };