import React from "react";

import WebAppState from "./WebAppState/WebAppState";

export default function AppWrapperContext(props){
    return(
        <>
            <WebAppState>
                {props.children}
            </WebAppState>
        </>
    )
}