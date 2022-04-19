import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null
    };
    this.height = props.height
    this.width = props.width

    this.onImageChange = this.onImageChange.bind(this);
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        image: URL.createObjectURL(img)
      });
    }
  };

  render() {
    return (
      <div className="bg-light border p-2 bd-highlight">
        
            <img src={this.state.image}  height='100'/>
            <div>Image</div>
            <input type="file" name="myImage" onChange={this.onImageChange} />
          </div>
        
    );
  }
}
export default Image;
