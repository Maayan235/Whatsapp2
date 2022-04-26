import React from 'react';
import DisplayImage from './DisplayImage';
import VideoInput from './VideoInput';
import Audio from './Audioo';

class Message extends React.Component {
  
  render() {
    // Was the message sent by the current user. If so, add a css class
    const fromMe = this.props.fromMe ? 'from-me' : '';

    if (this.props.type === 'Text') {
      return (
        <div className={`message ${fromMe}`}>
          <div className='username'>
            { this.props.username }
          </div>
          <div className='message-body'>
            { this.props.message }
            <div className='message-time'>
            {this.props.time}
            </div>
          </div>
        </div>
      );
    }
    if (this.props.type === 'Image') {
      return (
        <div className={`message ${fromMe}`}>
          <div className='username'>
            {this.props.username}
          </div>
          <div className='message-body'>
            <DisplayImage url={this.props.message} />
            <div className='message-time'>
              {this.props.time}
            </div>
          </div>
        </div>
      );
    }
    if (this.props.type === 'Video') {
      return (
        <div className={`message ${fromMe}`}>
          <div className='username'>
            {this.props.username}
          </div>
          <div className='message-body'>
            <VideoInput url={this.props.message} />
            <div className='message-time'>
              {this.props.time}
            </div>
          </div>
        </div>
      );
    }
    if (this.props.type === 'Audio') {
      return (
        // <Audio username={this.props.username} time={this.props.time} fromMe={fromMe}/>
        <div>
            <div className={`message ${fromMe}`}>
              <div className='username'>
                {this.props.username}
              </div>
              <div className='message-body'>
                  <div className="audio-container">
                    { <audio controls src={this.props.message} />}
                  </div>
                <div className='message-time'>
                {this.props.time}
                </div></div> </div></div>
        );
    }

  }
}

Message.defaultProps = {
  type: 'Text',
  context: {
    message: '',
    username: '',
    fromMe: false,
    time: ''
  }
};

export default Message;