import React from 'react';

import Message from './Message';

class Messages extends React.Component {
  
  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }
  
  render() {
    // Loop through all the messages in the state and create a Message component
  var messages = <div>hi :(</div>
  if(this.props.messages!= null){
     messages = this.props.messages.map((message, i) => {
      return (
        <Message
          userId = {this.props.id}
          key={i}
          id={message.id}
          message={message.content}
          fromMe={message.from == this.props.id? true:false} 
          time={message.time}
          
          />
      );
      });
    }
    else{
      console.log("nul...............")
    }
    return (
     
      <div className='messages' id='messageList'>
        { messages }
      </div>
    );
  }
}

Messages.defaultProps = {
  messages: [{type:'', context:''}]
};

export default Messages;