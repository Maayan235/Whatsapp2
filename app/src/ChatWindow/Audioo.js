import React, { useState, useRef, useContext } from "react";
import MyContacts from "../Contacts/MyContacts";
import { useMic, useMicUpdate } from "./MicContext";
import soundWaves from "./soundWaves.gif";
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
  transform: "translate(20%, 300%)",
};

const myCancleButtonStyle = {
  position: "fixed",
  top: "60%",
  left: "35%",
  transform: "translate(350%, 300%)",
};

const mySendButtonStyle = {
  position: "fixed",
  top: "60%",
  left: "35%",
  transform: "translate(70%, 300%)",
};


export default function Audio({username, time, fromMe, audioUrl,sendAudioHandler}) {
  let soundWavesGif = require("./soundWaves.gif");
  const micAccess = useMic();
  const micAccessUpdate = useMicUpdate();
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

  const [isBoxOpen, setisBoxOpen] = useState(true);

  const chunks = useRef([]);

  function getRecorder() {

  }

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
          // console.log(err);
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
          // console.log("data available");
          chunks.current.push(e.data);
        };

        mediaRecorder.onstop = async function () {
          // console.log("stopped");
          console.log("yyyyyyyyyyyyyyyyyyes")
          
          const url = URL.createObjectURL(chunks.current[0]);
          console.log(audioUrl);
          chunks.current = [];
          audioUrl.url = url;
          sendAudioHandler(url)

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
        }
        );
      })
      .catch((error) => {
        // console.log(error);
        setStream({ ...stream, error });
      });

      console.log(micAccess);

  }

  function getMicAccess() {
    getAccess();
    if (stream.access) {
      micAccessUpdate();
    }
  }
  
  return (
    <div>
      {(micAccess) ? (
        <div>
        { stream.access ? 
        (<div>
          {recording.available ? <div></div> : 
          (<div style={mystyle}>
            {!recording.active ?
              (
                <div>
                  {stream.recorder.start() && !recording.active}
                </div>
              ) :
              (isBoxOpen ?
                <div>
                  <h3>Recording now...</h3>
                  <img style={myGivStyle} src={soundWavesGif} alt="wait until the record stops" />
                  <button style={mySendButtonStyle} onClick={function (event) { stream.recorder.stop(); setIsRecording(false); }}>Send</button>
                  <button style={myCancleButtonStyle} onClick={() => setisBoxOpen(false)}>Cancle</button>
                </div>
                :
                <div></div>
              )}
          </div>
          )}
          {isBoxOpen ?
            null
          :
          null
          }
        </div>
        ) : getAccess() }
        </div>
      ) : (
        <div>
          {
            isBoxOpen ? (
              <div style={mystyle} >
                <h3>For recording, please give access for your microphone</h3>
                <button style={myButtonStyle} onClick={() => getMicAccess()}>Get Mic Access</button>
                <button style={myCancleButtonStyle} onClick={() => setisBoxOpen(false)}>Cancle</button>
              </div>
            ) : (<div></div>)
          }
        </div>
      )}

    </div>
  );
}


