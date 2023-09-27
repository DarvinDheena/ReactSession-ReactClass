const Hello = (props)=>{
  return (
    <div>Hello {props.name},i am {props.age}</div>
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
    <Hello name='darvin' age='25' />
    <Hello name ='balan' age ='50'/>
    </div>
   
  )
  
}
export default App