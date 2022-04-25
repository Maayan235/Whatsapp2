import React, { useState, useRef } from "react";
import soundWaves from "./soundWaves.gif"
//import "./styles.css";

const mystyle = {
  position: "fixed",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "500px",
  background: "#FFF",
  "z-index": "200",
  "box-shadow": "#000 0 2px 18px"
};
const myGivStyle = {
  padding: "30px",
  width: "50%",
  transform: "translate(50%, 0%)",
};

const myButtonStyle = {
  position: "fixed",
  top: "60%",
  left: "35%",
  transform: "translate(0%, 300%)",
};

export default function Audio({username, time, fromMe, streamAccess, setStreamAccess}) {
  let soundWavesGif = require("./soundWaves.gif");
  const [stream, setStream] = useState({
    access: false,
    recorder: null,
    error: ""
  });

  const [recording, setRecording] = useState({
    active: false,
    available: false,
    url: ""
  });

  const [isRecording, setIsRecording] = useState(true);

  const chunks = useRef([]);

  function getAccess() {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((mic) => {
        let mediaRecorder;

        try {
          mediaRecorder = new MediaRecorder(mic, {
            mimeType: "audio/webm"
          });
        } catch (err) {
          console.log(err);
        }

        const track = mediaRecorder.stream.getTracks()[0];
        track.onended = () => console.log("ended");

        mediaRecorder.onstart = function () {
          setRecording({
            active: true,
            available: false,
            url: ""
          });
        };

        mediaRecorder.ondataavailable = function (e) {
          console.log("data available");
          chunks.current.push(e.data);
        };

        mediaRecorder.onstop = async function () {
          console.log("stopped");

          const url = URL.createObjectURL(chunks.current[0]);
          chunks.current = [];

          setRecording({
            active: false,
            available: true,
            url
          });
        };

        setStream({
          ...stream,
          access: true,
          recorder: mediaRecorder
        });
      })
      .catch((error) => {
        console.log(error);
        setStream({ ...stream, error });
      });
  }
  
  return (
    <div>
      {stream.access ? (
        <div>
        {recording.available? <div></div>: (<div style={mystyle}>
          {!recording.active?
            (
              <div>
                { stream.recorder.start() && !recording.active}
              </div>
            ) :
            (
              <div>
            <h3>Recording now...</h3>
            <img style={myGivStyle} src={soundWavesGif} alt="wait until the record stops"/>
              <button style={myButtonStyle} onClick={function(event){stream.recorder.stop(); setIsRecording(false);}}>Stop Recording</button>
              </div>
            )}
        </div>)}
          <div className={`message ${fromMe}`}>
            <div className='username'>
              {username}
            </div>
            <div className='message-body'>
              <div className="App">
                <div className="audio-container">
                  {recording.available && <audio controls src={recording.url} />}
                </div>
              </div>
            </div>
          </div>
          <div className='message-time'>
            {time}
          </div>
        </div>

      ) : (
        <div style={mystyle}>
        <h3>For recording, please give access for your microphone</h3>
        <button style={myButtonStyle} onClick={getAccess}>Get Microphone Access</button>
        </div>
      )}

    </div>
  );
}
