const Hello = ()=>{
  return (
    <div>Hello World!</div>
  )
}

const App = ()=>{
  let time = new Date();

  let a=10;
  let b = 20;
  let c = a+b ;

  return(
    <div><p>Hello World!, now time is { time.toString() } </p>
    <p>{ c }</p>
    <Hello />
    <Hello />
    </div>
   
  )
  
}
export default App