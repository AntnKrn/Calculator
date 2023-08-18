import React from "react";
import './Display.css'

const Display = (props) => {
    
    return (
        <h1 className="output">{props.displayValue}</h1>
    )
}

export default Display;