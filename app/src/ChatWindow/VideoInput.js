import React from "react";

export default function VideoInput(props) {

    return (
        
        <div className="bg-light border p-2 bd-highlight">
                {props.url && (
                    <video
                        className="VideoInput_video"
                        height='150'
                        controls
                        src={props.url}
                    />
                )}        
            
                </div>
    );
}