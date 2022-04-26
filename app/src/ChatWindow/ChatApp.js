import React from 'react';
// import io from 'socket.io-client';
import config from '../config';

import Messages from './Messages';
import Message from './Message';
import ChatInput from './ChatInput.js';
import ContactsData from '../Contacts/ContactsData'
// require('../ChatApp.css');
import DisplayImage from './DisplayImage';
import VideoInput from './VideoInput';
import Audio from "./Audioo";
import camera from "./camera.png"
import video from "./videp.png"
import microphone from "./microphone.png"


require('../ChatApp.css');


class ChatApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: ContactsData[this.props.chosenChatMember].messages,
      time: this.getCurrentTime(),
      imageSrc: null,
      imageRef: null,
      videoRef: null,
      videoSrc: null,
      audioSrc: null,
<<<<<<< HEAD
      audioUrl : {url: null},
      streamAccess: false,
      
=======
      isRecording: false
>>>>>>> b755ad430fbfc2ced62b5cb621899fd8a88a422a
    };
    this.sendTextHandler = this.sendTextHandler.bind(this);
    this.sendImageHandler = this.sendImageHandler.bind(this);
    this.sendVideoHandler = this.sendVideoHandler.bind(this);
    this.sendAudioHandler = this.sendAudioHandler.bind(this);
    this.handleVideoChange = this.handleVideoChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.setStreamAccess = this.setStreamAccess.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleVideoClick = this.handleVideoClick.bind(this);
    this.imageRef = React.createRef(null);
    this.videoRef = React.createRef(null);
    this.scroll = React.createRef();
    this.executeScroll = this.executeScroll.bind(this);
    this.getCurrentTime = this.getCurrentTime.bind(this);
<<<<<<< HEAD
    
=======
    this.handleAudioClick = this.handleAudioClick.bind(this);
>>>>>>> b755ad430fbfc2ced62b5cb621899fd8a88a422a
  }

  getCurrentTime() {
    var today = new Date(),
      currentTime = today.getHours() + ':' + today.getMinutes();
    return currentTime;
  }

  setStreamAccess = (bool) => {
    this.setState = {
      streamAccess: bool
    }
  }
  sendTextHandler(message) {
    const messageObject = {
      username: this.props.username,
      message,
      time: this.getCurrentTime(),
    }
    this.props.renderAllContacts();
    messageObject.fromMe = true;
    this.addMessage('Text', messageObject);
  }

  sendImageHandler(src) {
    if(this.state.audioUrl.url != null){
      console.log(this.state.audioUrl);
    }else{
      console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    }
    const messageObject = {
      username: this.props.username,
      message: src,
      time: this.getCurrentTime()
    }
    this.props.renderAllContacts();
    messageObject.fromMe = true;
    this.addMessage('Image', messageObject);
  }


  sendVideoHandler(src) {
    const messageObject = {
      username: this.props.username,
      message: src,
      time: this.getCurrentTime()
    }
    this.props.renderAllContacts();
    messageObject.fromMe = true;
    this.addMessage('Video', messageObject);
  }


  sendAudioHandler = () => {
    const messageObject = {
      username: this.props.username,
      message: this.state.audioSrc,
      time: this.getCurrentTime()
    }
    this.props.renderAllContacts();
    messageObject.fromMe = true;
    this.addMessage('Audio', messageObject);
    
  }

  addMessage(messageType, message) {
    // Append the message to the component state
    const messages = ContactsData[this.props.chosenChatMember].messages;
    messages.push({ type: messageType, context: message });
    this.setState({ messages });
  }

  onImageChange = event => {
    
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      let url = URL.createObjectURL(img);
      this.setState({
        imageSrc: url
      });
      this.sendImageHandler(url);
    }
  }

  handleVideoChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    this.setState({
      videoSrc: url
    })
    this.sendVideoHandler(url);
  };

  handleImageClick = event => {
    this.imageRef.current.click();
  }

  handleVideoClick = event => {
    this.videoRef.current.click();
  }

  handleAudioClick = event => {
    this.setState({
      isRecording: true
    });
    console.log(this.state.isRecording);
  }

  executeScroll = () => window.scrollTo(0, this.scroll.current.offsetTop);

  render() {
    return (
      <div className="list-inline">
      <Audio username={this.props.username} time={this.getCurrentTime} fromMe={true} audioUrl={this.state.audioUrl}/>
      {this.state.audioUrl? <audio src={this.state.audioUrl}>!</audio> : <div></div>}
        <div ref={this.scroll}>
          <Messages messages={ContactsData[this.props.chosenChatMember].messages} />
        </div>
        <div className="position-absolute bottom-0 end-0 col-9">
          <span className='list-inline-item col-9 align-middle border rounded'>
            <ChatInput type="text" id="writeMessage" className="" onSend={this.sendTextHandler} />
          </span>
          <span className='list-inline-item mb-1'>
            <button onClick={this.handleImageClick} className="btn btn-outline-dark">
              <img src={camera} height='20' width='20' />
            </button>
            <input
              ref={this.imageRef}
              type="file"
              name="myImage"
              onChange={this.onImageChange}
              style={{ display: 'none' }}
            />
          </span>
          <span className="VideoInput list-inline-item">
            <button onClick={this.handleVideoClick} className="btn btn-outline-dark">
              <img src={video} height='20' width='20' />
            </button>
            <input
              ref={this.videoRef}
              className="VideoInput_input"
              type="file"
              onChange={this.handleVideoChange}
              accept=".mov,.mp4"
              style={{ display: 'none' }}
            />
          </span>
          <span className='list-inline-item'>
            <button onClick={this.handleAudioClick} className="btn btn-outline-dark">
              <img src={microphone} height='20' width='20' />
            </button>
          </span>
          <div>
          { this.state.isRecording ?
            <Audio username={this.props.username} time={this.props.time} fromMe={true} />
            : 
            null
          }
          </div>
        </div>
      </div>
    );
  }


}

ChatApp.defaultProps = {
  username: 'Anonymous'
};

export default ChatApp;


// <input type="text" className="w-75"></input>
// <button type="button" className="btn btn-primary">send</button>