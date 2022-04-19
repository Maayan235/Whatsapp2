import ChosenContact from "./ChosenContact";
import img from './img1.jpg'
import DisplayImage from "./DisplayImage";
import React from "react";
import VideoInput from "./VideoInput";

function ReptileListItems() {
    const reptiles = ["alligator", <input type="file" />, "lizard"];

    return reptiles.map((reptile) => <div>{reptile}</div>);
}

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            inputRef: null,
            VideoSrc: null
        };
        this.handleVideoChange = this.handleVideoChange.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.handleVideoChoose = this.handleVideoChoose.bind(this);
    }


    handleVideoChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        this.setState({
            VideoSrc: url
        })
    };

    handleVideoChoose = (event) => {
    
    // add to the chat list...

        // this.state.inputRef.current.click();
    };

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
            <div className="col-9 vh-100">
                <ChosenContact name="Avital" pic={img} />
                <div className="align-items-end ">
                    <div>
                    <ReptileListItems/>        
                        <div className="bg-light border p-2 bd-highlight">bla</div>
                        <div className="bg-light border p-2 bd-highlight ">bla bla</div>
                        <div className="bg-light border p-2 bd-highlight">bla</div>
                        <DisplayImage url={this.state.image} />
                        <VideoInput url={this.state.VideoSrc} />
                        <div>Image</div>
                        <input type="file" name="myImage" onChange={this.onImageChange} />
                        {<button onClick={this.handleVideoChoose}>send</button>}

                        <div>Video</div>
                        <div className="VideoInput">
                            <input
                                ref={this.state.inputRef}
                                className="VideoInput_input"
                                type="file"
                                onChange={this.handleVideoChange}
                                accept=".mov,.mp4"
                            />{<button onClick={this.handleVideoChoose}>send</button>}
                        </div>
                        
                               
                        


                    </div>
                    <div className="position-absolute bottom-0 end-0 w-75">
                        <input type="text" className="w-75"></input>
                        <button type="button" className="btn btn-primary">send</button>
                    </div>
                </div>
            </div>

        )
    }
}
export default Chat;