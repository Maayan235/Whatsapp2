//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faMicrophone, faTimes, faSave } from "@fortawesome/free-solid-svg-icons";
import { formatMinutes, formatSeconds } from "../../utils/format-time";
import "./recordingStyle.css"

export default function RecorderControls({ recorderState, handlers }) {
  console.log(handlers)
    const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
    const { startRecording, saveRecording, cancelRecording } = handlers;
  
    return (
      <div className="controls-container">
        <div className="recorder-display">
          <div className="recording-time">
            {initRecording && <div className="recording-indicator"></div>}
            <span>{formatMinutes(recordingMinutes)}</span>
            <span>:</span>
            <span>{formatSeconds(recordingSeconds)}</span>
          </div>
          {initRecording && (
            <div className="cancel-button-container">
              <button className="cancel-button" title="Cancel recording" onClick={cancelRecording}>
         
              </button>
            </div>
          )}
        </div>
        <div className="start-button-container">
          {initRecording ? (
            <button
              className="start-button"
              title="Save recording"
              disabled={recordingSeconds === 0}
              onClick={saveRecording}
            >
              
            </button>
          ) : (
            <button className="start-button" title="Start recording" onClick={startRecording}>
            </button>
          )}
        </div>
      </div>
    );
  }