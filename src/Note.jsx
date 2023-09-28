function Note (props){
    console.log(props)
    return(
      <option >{props.note.content}</option>
    )
  }

  export default Note 