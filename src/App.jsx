const App = ()=>{
  let time = new Date();

  let a=10;
  let b = 20;
  let c = a+b ;

  return(
    <div><p>Hello World!, now time is { time.toString() } </p>
    <p>{ c }</p>
    </div>
   
  )
  
}
export default App