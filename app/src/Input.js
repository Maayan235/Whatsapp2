
export {inputRef};

export default function Input(){

    const inputRef = useRef(null);
    
    const onMouseOver =()  => {
    inputRef.current.type ="text"
  
}
    const onMouseOut =()  => {
    inputRef.current.type ="password"
  }


return ( <input type="password" value={this.state.value} onChange={handleChange} id="myPassword"></input>  )
}
