import React from 'react';
// import io from 'socket.io-client';
import config from '../config';

import Messages from './Messages';
import Message from './Message';
import ChatInput from './ChatInput.js';
import ContactsData from '../Contacts/ContactsData'
import '../ChatApp.css'
// require('../ChatApp.css');
import DisplayImage from './DisplayImage';
import VideoInput from './VideoInput';
import Audio from "./Audioo";


class ChatApp extends React.Component {
  // socket = {};

  constructor(props) {
    super(props);
    var today = new Date(),
      currentTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    this.state = {
      messages: ContactsData[this.props.chosenChatMember].messages,
      time: currentTime,
      imageSrc: null,
      inputRef: null,
      videoSrc: null,
      audioSrc: null
    };
    this.sendTextHandler = this.sendTextHandler.bind(this);
    this.sendImageHandler = this.sendImageHandler.bind(this);
    this.sendVideoHandler = this.sendVideoHandler.bind(this);
    this.sendAudioHandler = this.sendAudioHandler.bind(this);
    this.handleVideoChange = this.handleVideoChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.setAudio = this.setAudio.bind(this);
  }

  setAudio = (src) => {
    this.sendAudioHandler(src);
  }
  
  sendTextHandler(message) {
    const messageObject = {
      username: this.props.username,
      message,
      time: this.state.time
    }
    messageObject.fromMe = true;
    this.addMessage('Text', messageObject);
  }

  sendImageHandler() {
    const messageObject = {
      username: this.props.username,
      message: this.state.imageSrc,
      time: this.state.time
    }
    messageObject.fromMe = true;
    this.addMessage('Image', messageObject);
  }

  
  sendVideoHandler() {
    const messageObject = {
      username: this.props.username,
      message: this.state.videoSrc,
      time: this.state.time
    }
    messageObject.fromMe = true;
    this.addMessage('Video', messageObject);
  }

    
  sendAudioHandler= (src) => {
    const messageObject = {
      username: this.props.username,
      message: src,
      time: this.state.time
    }
    messageObject.fromMe = true;
    this.addMessage('Audio', messageObject);
  }

  addMessage(messageType, message) {
    // Append the message to the component state
    const messages = ContactsData[this.props.chosenChatMember].messages;
    messages.push({type: messageType, context: message});
    this.setState({ messages });
  }

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      this.setState({
        imageSrc: URL.createObjectURL(img)
      });
    }
  }

  handleVideoChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    this.setState({
        videoSrc: url
    })
};

  render() {
    return (
      <div className="container">
        <Messages messages={ContactsData[this.props.chosenChatMember].messages} />
        <div className="position-absolute bottom-0 end-0 w-75">
          <ChatInput type="text" className="w-75" onSend={this.sendTextHandler} />
          <div className="align-items-end ">
            <div>Image</div>
            <input type="file" name="myImage" onChange={this.onImageChange} />
            {<button onClick={this.sendImageHandler}>send</button>}
            <div>Video</div>
            <div className="VideoInput">
              <input
                ref={this.state.inputRef}
                className="VideoInput_input"
                type="file"
                onChange={this.handleVideoChange}
                accept=".mov,.mp4"
              />
              {<button onClick={this.sendVideoHandler}>send</button>}
            </div>
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