import React from 'react';
// import io from 'socket.io-client';
import config from '../config';

import Messages from './Messages';
import Message from './Message';
import ChatInput from './ChatInput.js';
import ContactsData from '../Contacts/ContactsData'
import '../ChatApp.css'
// require('../ChatApp.css');



class ChatApp extends React.Component {
  // socket = {};

  constructor(props) {
    super(props);
    var today = new Date(),
    currentTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    this.state = { messages: ContactsData[this.props.chosenChatMember].messages,
  time: currentTime};
    this.sendHandler = this.sendHandler.bind(this);
    
    // // Connect to the server
    // this.socket = io(config.api, { query: `username=${props.username}` }).connect();

    // // Listen for messages from the server
    // this.socket.on('server:message', message => {
    //   this.addMessage(message);
    // });
  }

  sendHandler(message) {
    const messageObject = {
      username: this.props.username,
      message,
      time: this.state.time
    };

    // Emit the message to the server
    // this.socket.emit('client:message', messageObject);

    messageObject.fromMe = true;
    this.addMessage(messageObject);
  }

  addMessage(message) {
    // Append the message to the component state
    const messages = ContactsData[this.props.chosenChatMember].messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div className="container">
        <Messages messages={ContactsData[this.props.chosenChatMember].messages} />
        <div className="position-absolute bottom-0 end-0 w-75">
        <ChatInput type="text" className="w-75" onSend={this.sendHandler} />
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