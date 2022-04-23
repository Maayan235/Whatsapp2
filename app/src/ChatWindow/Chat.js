import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ChosenContact from "./ChosenContact";
import img from './img1.jpg'
import DisplayImage from "./DisplayImage";
import VideoInput from "./VideoInput";
import ContactsData from "../Contacts/ContactsData";
import ChatApp from "./ChatApp";
import AllContacts from "../Contacts/AllContacts";
import { userDetails } from "..";
import AudioRecording from "../Components/audioRecording";
import NameForm from "../NameForm";



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
            VideoSrc: null,
            conectedUser: this.props.user,
            chosenChatMember: ContactsData[0],
            isChosedChat: false,
            chosenChatMemberNumber: -1,
        };
        this.setChat = this.setChat.bind(this);
        this.handleVideoChange = this.handleVideoChange.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
        this.handleVideoChoose = this.handleVideoChoose.bind(this);
        this.chatChanged = React.createRef();
        this.logout = this.logout.bind(this);
    }

    setChat = (chatMember) => {
        this.setState({
            isChosedChat: true,
            chosenChatMember: ContactsData[chatMember],
            chosenChatMemberNumber: chatMember
        }
        );
        this.state.chosenChatMember.numOfMessages = "0";
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
    logout() {
        this.props.setIsSubmitted(false);
    }


    render() {
    // JSX code for chat window
    const renderChatWithContact = (
        <div className="col-9 vh-100">
            <ChosenContact name={this.state.chosenChatMember.name} pic={this.state.chosenChatMember.pic} messeges={this.state.chosenChatMember.messeges} />
            <div className="align-items-end ">
                <ChatApp username={this.state.conectedUser} chosenChatMember={this.state.chosenChatMemberNumber} ref={this.chatChanged}/>
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
                    <div><button onClick={this.logout}>logout</button></div>

                    </div>
            </div>
        </div>
    );

    // JSX code for chat window
    const renderHello = (
        <div className="col-9 vh-100">
            <h3>React Chat App</h3>
            <h3>Hi {this.state.conectedUser}! You have new messages!
            </h3>
        </div>
    );

    // const renderChatOfYarin = (
    //     <div className="col-9 vh-100">
    //     <ChosenContact name="Avital" pic={img} />
    //     <div className="align-items-end ">
    //         <div>
    //             <ReptileListItems />
    //             <div className="bg-light border p-2 bd-highlight">bla</div>
    //             <div className="bg-light border p-2 bd-highlight ">bla bla</div>
    //             <div className="bg-light border p-2 bd-highlight">bla</div>
    //             <DisplayImage url={this.state.image} />
    //             <VideoInput url={this.state.VideoSrc} />
    //             <div>Image</div>
    //             <input type="file" name="myImage" onChange={this.onImageChange} />
    //             {<button onClick={this.handleVideoChoose}>send</button>}

    //             <div>Video</div>
    //             <div className="VideoInput">
    //                 <input
    //                     ref={this.state.inputRef}
    //                     className="VideoInput_input"
    //                     type="file"
    //                     onChange={this.handleVideoChange}
    //                     accept=".mov,.mp4"
    //                 />{<button onClick={this.handleVideoChoose}>send</button>}
    //     return (
    //         <div className="col-9 vh-100">
    //             <ChosenContact name="Avital" pic={img} />
    //             <div className="align-items-end ">
    //                 <div>
    //                 <ReptileListItems/> 
                    
    //                     <div className="bg-light border p-2 bd-highlight">bla</div>
    //                     <div className="bg-light border p-2 bd-highlight ">bla bla</div>
    //                     <div className="bg-light border p-2 bd-highlight">bla</div>
    //                     <DisplayImage url={this.state.image} />
    //                     <VideoInput url={this.state.VideoSrc} />
    //                     <div>Image</div>
    //                     <input type="file" name="myImage" onChange={this.onImageChange} />
    //                     {<button onClick={this.handleVideoChoose}>send</button>}

    //                     <div>Video</div>
    //                     <div className="VideoInput">
    //                         <input
    //                             ref={this.state.inputRef}
    //                             className="VideoInput_input"
    //                             type="file"
    //                             onChange={this.handleVideoChange}
    //                             accept=".mov,.mp4"
    //                         />{<button onClick={this.handleVideoChoose}>send</button>}
    //                         <div><button onClick={this.logout}>logout</button></div>
    //                         </div>
                           


                           
                        
                               
                        


    //                 </div>
    //                 <div className="position-absolute bottom-0 end-0 w-75">
    //                     <input type="text" className="w-75"></input>
    //                     <button type="button" className="btn btn-primary">send</button>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="position-absolute bottom-0 end-0 w-75">
    //             <input type="text" className="w-75"></input>
    //             <button type="button" className="btn btn-primary">send</button>
    //         </div>
    //     </div>
    // </div>
    // );


        return (
            <Router>
            <AllContacts username={this.state.conectedUser} setChatMember={this.setChat} logout={this.logout}/>
            {this.state.isChosedChat ? renderChatWithContact : renderHello}
            
        </Router>


        )
    }
}
export default Chat;



// <div className="col-9 vh-100">
// <ChosenContact name="Avital" pic = {img}/>
// <div className="align-items-end ">
//     <div>
//         <div className="bg-light border p-2 bd-highlight">bla</div>
//         <div className="bg-light border p-2 bd-highlight ">bla bla</div>
//         <div className="bg-light border p-2 bd-highlight">bla</div>
//     </div>
//     <div className="position-absolute bottom-0 end-0 w-75">
//         <input type="text" className="w-75"></input>
//         <button type="button" className="btn btn-primary">send</button>
//     </div>
// </div>
// </div>
