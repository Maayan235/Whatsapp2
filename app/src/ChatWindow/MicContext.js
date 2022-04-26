import React, {useContext, useState } from "react";

const MicAccess = React.createContext()
const MicAccessUpdate = React.createContext()

export function useMic() {
    return useContext(MicAccess);
}

export function useMicUpdate() {
    return useContext(MicAccessUpdate);
}

export function MicProvider({children}) {
    const [isMicAccsess, setMicAccess] = useState(false);

    function getMicAccess() {
        setMicAccess(true);
    }

    return (
        <MicAccess.Provider value={isMicAccsess}>
            <MicAccessUpdate.Provider value={getMicAccess}>
                {children}
            </MicAccessUpdate.Provider>
        </MicAccess.Provider>
    )
}