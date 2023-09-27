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
  // let appStyle = {
  //   color : 'white',
  //   background: 'red',
  // }
  return(
    <div><p style={ { color :"white", background :"blue"} }>Hello World!, now time is { time.toString() } </p>
    <p>{ c }</p>
    <Hello name='darvin' age='25' />
    <Hello name ='balan' age ='50'/>
    </div>
   
  )
  
}
export default App