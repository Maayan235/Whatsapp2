import RecorderControls from "./recorder-controls/recorderConstrols";
import RecordingsList from "./recordings-list/RecordingsList";
import useRecorder from "../hooks/useRecorder";

export default function useAudioRecording(){
    const { recorderState, ...handlers } = useRecorder();
    const { audio } = recorderState;

    return(
        <div className="recorder-container">
            <RecorderControls recorderState={recorderState} handlers={handlers} />
            <RecordingsList audio={audio} />
        </div> )
    }