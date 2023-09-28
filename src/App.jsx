import React from 'react'

function App( props ) {
  console.log(props)
  const { notes } = props
  return (
    <div>
      <select>
        {
       notes.map ((myone,index) => {
        return <option key={ index }>{ myone.content}</option> 
       })
      }
      </select>
    </div>
    
  )
}

export default App
