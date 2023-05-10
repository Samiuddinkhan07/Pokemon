import { useState } from "react";
import { AppState } from "../Context";


const WebAppState = (props) =>{
    const GlobalState = {

    }

    const [__GlobalAppSettings,__updateGlobalSettings] = useState(GlobalState);


    return(
        <AppState.Provider  value={{__GlobalAppSettings,__updateGlobalSettings}}>
            {props.children}
        </AppState.Provider>
    )
}

export default WebAppState;