import React from 'react'
import GrandChildComponent from './GrandChildComponent'

function ChildComponent( {message} ) {
  return (
    <div>
         <p>message from child component : { message }</p>
        <GrandChildComponent message = { message }/>
    </div>
  )
}

export default ChildComponent


