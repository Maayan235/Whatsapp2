import React, { useState, useRef} from "react";

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

const myCancleButtonStyle = {
  position: "fixed",
  top: "50%",
  left: "15%",
  transform: "translate(350%, 300%)",
};

const mySendButtonStyle = {
  position: "fixed",
  top: "50%",
  left: "10%",
  transform: "translate(70%, 300%)",
};


export default function Audio({Id, time, fromMe, audioUrl, send}) {
  let soundWavesGif = require("./soundWaves.gif");

  const [stream, setStream] = useState({
    access: false,
    recorder: null,
    error: ""
  });

  const [recording, setRecording] = useState({
    active: false,
    available: false,
    gotAccessAlready: false,
    url: ""
  });

  const [isRecording, setIsRecording] = useState(true);

  const [isBoxOpen, setisBoxOpen] = useState(true);

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
          chunks.current.push(e.data);
        };

        mediaRecorder.onstop = async function () {
          const url = URL.createObjectURL(chunks.current[0]);
          chunks.current = [];
          audioUrl.url = url;
          send(url);
          

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
        setStream({ ...stream, error });
      });
  }
  
  return (
    <div>
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
                  <button className="btn btn-outline-dark" style={mySendButtonStyle} onClick={function (event) { stream.recorder.stop(); setIsRecording(false); }}>Send</button>
                  <button className="btn btn-outline-dark" style={myCancleButtonStyle} onClick={function (event) {setisBoxOpen(false); send(null)}}>Cancel</button>
                </div>
                :
                <div></div>
              )}
          </div>
          )}
          {(isBoxOpen && !isRecording )?
            null
          :
          null
          }
        </div>
        ) : getAccess() }
        </div>
    </div>
  );
}


