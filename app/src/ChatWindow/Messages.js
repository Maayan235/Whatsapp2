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
    const messages = this.props.messages.map((message, i) => {
      return (
        <Message
          key={i}
          username={message.context.username}
          message={message.context.message}
          fromMe={message.context.fromMe} 
          time={message.context.time}
          type={message.type}
          />
      );
      });

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