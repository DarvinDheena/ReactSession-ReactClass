import React, { useEffect, useState } from 'react'

function App() {
   
    let [data , setData] = useState(null);
    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(result => setData(result))
    },[])
    console.log(data);
  return (
    <div>
        <h1>API Data</h1>
        {
            data ? (
                <ul>
                    {
                        data.map(item => {
                            return <li key={item.id}> { item.title } </li>
                        })
                    }
                </ul>
            ) : 
            <p>loading Data..</p>
        }
    </div>
  )
}

export default App