import React from 'react';
import Messages from './Messages';
import ChatInput from './ChatInput.js';
import Audio from "./Audioo";
import camera from "./camera.png"
import video from "./videp.png"
import microphone from "./microphone.png"

require('../ChatApp.css');

class ChatApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      chatContact: this.props.chosenChatMember,
      messages: this.props.chat,
      lastMessage: this.props.lastMessage,
      id: this.props.id,
      time: this.getCurrentTime(),
      imageSrc: null,
      imageRef: null,
      videoRef: null,
      videoSrc: null,
      audioSrc: null,
      audioUrl: { url: null },
      streamAccess: false,
      render: false,
      isRecording: false
    };
    this.setState= {
      render : true
        }


    console.log(this.props.chat)


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
    this.handleAudioClick = this.handleAudioClick.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.setLastMes = this.setLastMes.bind(this);

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
    console.log(message)
     const messageObject = {
       from: this.state.id,
       content:message,
       time: this.getCurrentTime(),
     }
    //this.sendMessage(message)
    //this.props.renderhat();
     messageObject.fromMe = true;
     this.addMessage('Text', messageObject);
    //this.props.setLastMessage(messageObject);
  }
  setLastMes(message) {
    this.props.setLastMessage(message)
  }



  sendImageHandler(src) {
    const messageObject = {
      id: this.props.id,
      message: src,
      time: this.getCurrentTime()
    }
    this.props.renderChat();
    messageObject.fromMe = true;
    this.addMessage('Image', messageObject);
  }


  sendVideoHandler(src) {
    const messageObject = {
      id: this.props.id,
      message: src,
      time: this.getCurrentTime()
    }
    this.props.renderChat();
    messageObject.fromMe = true;
    this.addMessage('Video', messageObject);
  }


  sendAudioHandler = (url) => {
    if (url) {
      const messageObject = {
        id: this.props.id,
        message: url,
        time: this.getCurrentTime()
      }
      messageObject.fromMe = true;
      this.addMessage('Audio', messageObject);
    }
    this.props.renderChat();

    this.setState({
      isRecording: false
    })
  }


  async sendMessage(text) {
    const res = await fetch("http://localhost:5286/api/contacts/" + this.state.chatContact.id + "/messages", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: text })
    }).then(response => {
      if (response.status == 201 ) {
        console.log("201 !!!!!!!!!")
        this.props.setChat(this.props.chosenChatMember)
      }
      console.log(response)
    })


      ;


    //  this.props.setLastMessage(text)

  }



  addMessage = (messageType, message) => {
    // Append the message to the component state
    const messages = this.props.chat;
    //messages.push({ type: messageType, context: message });
    console.log(message);
    console.log(messages);
    //fetch to save the message in serVER
    this.sendMessage(message.content);
    messages.push(message);
    console.log(messages);

    this.setState({ messages: messages });
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
  }

  executeScroll = () => window.scrollTo(0, this.scroll.current.offsetTop);

  render() {
    return (
      <div className="list-inline">
        <div ref={this.scroll}>
          {
            // <Messages messages={this.props.chosenChatMember.messages} />
          }
          <Messages id={this.state.id} messages={this.state.messages} />
        </div>
        <div className="position-absolute bottom-0 end-0 col-9">
          <span className='list-inline-item col-11 align-middle border rounded'>
            <ChatInput type="text" id="writeMessage" className="" onSend={this.sendTextHandler} />
          </span>
          <div>
            {this.state.isRecording ?
              <div><Audio id={this.props.id} time={this.getCurrentTime} fromMe={true} audioUrl={this.state.audioUrl} send={this.sendAudioHandler} />

              </div>
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
  // id: 'Anonymous'
};

export default ChatApp;
