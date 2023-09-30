import React from 'react'

function GrandChild({name}){
    console.log('grandchild called');
    return(
        <div>
            <p>this.{ name }</p>
        </div>
    )
}

function Child ({name}){
    return(
        <div>
            <p>this {name} </p>
            <GrandChild name = {name}/>
        </div>
        
    )
}
function App() {
  return (
    <div>
        <p>Hello Darvin</p>
        <Child name='sathish'/>
    </div>
  )
}

export default App