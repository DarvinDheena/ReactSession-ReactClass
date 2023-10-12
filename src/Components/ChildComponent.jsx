import React, { useContext } from 'react'
import GrandChildComponent from './GrandChildComponent'
import { MessageContext } from '../App'



function ChildComponent( ) {
  
  const [message,setMessage] = useContext(MessageContext);


  return (
    <div>
         <p>message from child component :{ setMessage('hoi') } </p>
        <GrandChildComponent />
    </div>
  )
}

export default ChildComponent


