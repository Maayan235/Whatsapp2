
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

  // state = {
    //     selectedFile: null
    // }

    // fileSelectedHandler(event) {
    //     console.log(event.target.files[0]);

    //     console.log(img);
    //     this.setState({
    //         selectedFile: event.target.files[0].secure

    //     })
    //     console.log(this.state.selectedFile);
    //     // console.log(event.target);
    // }
    // // state = {
    // //     selectedFile: null
    // // }